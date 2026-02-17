import Button from "@mui/material/Button";
import axios from "axios";
import { marked } from "marked";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../App.css";
import UserProfileContext from "../context/userContext";

const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;

export default function Bavarchi() {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const { jwtToken, isAuthenticated } = useContext(UserProfileContext);
  const navigate = useNavigate();

  function markdownToPlainText(markdown) {
    // Convert Markdown to HTML
    const html = marked(markdown);
    // Strip HTML tags
    return html.replace(/<\/?[^>]+>/gi, "");
  }

  const handleSubmit = async () => {
    if (isAuthenticated == true) {
      setResponses(["...loading"]);
      try {
        console.log("Sending req to generate dish from frontend");
        const res = await axios.post(
          `${VITE_APP_API_URL}/api/dish/generateDish`,
          {
            question: input,
          }, // Move the headers outside the data object
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`, // Make sure jwtToken is valid
            },
          },
        );
        // console.log(res.data.text.parts[0].text);
        const geminiResponse = res.data.text;
        // Convert Markdown to plain text
        const plainText = markdownToPlainText(geminiResponse);
        // Split the plain text into an array of items (assuming each item is preceded by a bullet point)
        const listOfItems = plainText
          .split("\n")
          .filter((item) => item.trim() !== "");
        setResponses(listOfItems);
      } catch (error) {
        console.error("Error getting response:", error);
        toast.error("Please Try Again");
        setResponses(["Error retrieving data"]);
      }
    } else {
      toast.error("Please Login To Continue");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen text-center overflow-y-auto">
      <h1 className="mt-8 h-16 text-4xl font-bold	">Ask Bavarchi</h1>
      <p className="text-3xl ">
        Just Enter The Ingredients & Our AI Assistant Will Give You All The
        Dishes That You Can Make With Ingredients.
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your ingredients"
        className="h-16 w-2/3 text-center border border-black mt-8"
      />
      <br />
      <div className="mt-8">
        <Button
          variant="contained"
          color="secondary"
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
          Ask
        </Button>
      </div>
      <ul className="mt-8 text-xl">
        {responses.map((response, index) => (
          <li key={index}>{response}</li>
        ))}
      </ul>
    </div>
  );
}
