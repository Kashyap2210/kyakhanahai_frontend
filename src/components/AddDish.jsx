// This component is used to add a dish to the DB

import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Autocomplete, TextField } from "@mui/material";
import UserProfileContext from "../context/userContext";
import toast from "react-hot-toast";

const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;

export default function AddDish() {
  // State variables for dish Info
  const { jwtToken, isAuthenticated, userDetails } =
    useContext(UserProfileContext);

  const [userDishName, setUserDishName] = useState(""); //Name of the dish
  const [selectedCategory, setSelectedCategory] = useState(null); // Category i.e. meal, snack  const [type, setType] = useState(""); //Type i.e. Veg/Non-veg
  const [selectedType, setSelectedType] = useState(null);
  const categories = ["Veg", "Non-Veg"];
  const types = ["Meal", "Snack", "Breakfast"];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Function to handle the form submission
    e.preventDefault();

    console.log(isAuthenticated);
    //WE WILL CHECK THE AUTHENTICATION DIRECTLY FROM THE JWT TOKENS
    if (isAuthenticated) {
      try {
        console.log(userDishName);
        const dbDishName = userDishName.toLowerCase();
        console.log(dbDishName);
        console.log("inside try block");
        const response = await axios.post(
          `${VITE_APP_API_URL}/api/dish/adddish`,
          {
            //name, category, type are sent to backend
            userDishName,
            dbDishName,
            category: selectedCategory,
            type: selectedType,
            userId: userDetails._id,
          },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
            withCredentials: true,
          }
        );
        console.log("Request sent");

        if (response.status === 201) {
          toast.success("Dish Added");
          navigate("/");
          console.log("Navigated");
        } else if (response.status === 409) {
          toast.error("Dish already exists");
        } else {
          toast.error("Unexpected response from the server");
        }
      } catch (error) {
        console.error("Frontend Response Error:", error);
        if (error.response?.status === 400) {
          toast.error("Improper data. Please check your inputs.");
        } else if (error.response?.status === 500) {
          toast.error("Error adding dish. Please try again.");
        } else {
          toast.error(
            "Unexpected error: " +
              (error.response?.data?.message || error.message)
          );
        }
      }
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="login-form  text-center h-screen flex justify-center pt-16 w-fill">
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="m-8 w-80">
            <TextField
              id="outlined-nameOfDish"
              label="Dish-name"
              variant="outlined"
              type="name"
              value={userDishName}
              onChange={(e) => setUserDishName(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div className="m-8 w-80">
            <Autocomplete
              value={selectedCategory}
              disablePortal
              id="combo-box-demo-category"
              options={categories}
              sx={{ width: 300 }}
              onChange={(event, newValue) => setSelectedCategory(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="outlined-category"
                  label="Category"
                  variant="outlined"
                  type="name"
                  required
                  fullWidth
                />
              )}
            />
          </div>
          <div className="m-8 w-80">
            <Autocomplete
              value={selectedType}
              disablePortal
              id="combo-box-demo-type"
              options={types}
              sx={{ width: 300 }}
              onChange={(event, newValue) => setSelectedType(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="outlined-type"
                  label="Type"
                  variant="outlined"
                  type="type"
                  required
                  fullWidth
                />
              )}
            />
          </div>
          <div className="m-8 w-80">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="w-full"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#e53935",
                color: "#ffeb3b",
                fontWeight: "550",
                "&:hover": {
                  backgroundColor: "#ffeb3b", // Darker background color on hover
                  color: "#e53935", // Font color on hover (if needed)
                },
              }}
            >
              Add dish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
