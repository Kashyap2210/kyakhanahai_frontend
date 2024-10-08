// This is the 3rd component on the home page

import "../App.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; //useNavigate is used to change to components on the DOM to some preset components
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UserProfileContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ThirdIntroComp() {
  const { isAuthenticated } = useContext(UserProfileContext);
  console.log(isAuthenticated);
  const navigate = useNavigate();

  const askBavarchi = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/bavarchi");
    } else {
      toast.error("Please Login");
      navigate("/login");
    }
  };
  return (
    <div className="p-8">
      <div className="main-content flex items-center justify-between bg-bg-champagne text-2xl text-justify">
        <p className="w-1/2 pr-8">
          <i className="text-4xl font-bold">Ask AI </i>
          <br />
          Tell our "BAVARCHI-BOT" what ingredients you have and it will suggest
          a dish!
          <br />
          <br />
          <Button
            variant="contained"
            className="h-12 border"
            // color="secondary"
            sx={{
              backgroundColor: "#e53935",
              color: "#ffeb3b",
              fontWeight: "550",
              "&:hover": {
                backgroundColor: "#ffeb3b", // Darker background color on hover
                color: "#e53935", // Font color on hover (if needed)
              },
            }}
            onClick={askBavarchi}
          >
            <MenuBookIcon className="mr-2"></MenuBookIcon>Ask Bavarchi
          </Button>
        </p>
        <img
          src="third_intro.jpg"
          alt=""
          className="w-1/2 main-content rounded-2xl"
          // style={{ borderRadius: "12px" }} // Set border radius with inline styles
        />
      </div>
    </div>
  );
}
