import React, { useState, useEffect } from "react";
import UserProfileContext from "./userContext";

export const UserProfileContextProvider = ({ children }) => {
  // Initialize state from localStorage, or with default values if localStorage is empty
  const [jwtToken, setJwtToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(() =>
    setUserDetailsInLocalStorage()
  );

  // Function to get userDetails from localStorage or return default values
  function setUserDetailsInLocalStorage() {
    const savedUserDetails = localStorage.getItem("userDetails");
    try {
      return savedUserDetails
        ? JSON.parse(savedUserDetails) // Parse userDetails if present
        : getDefaultUserDetails(); // Return default if no userDetails found
    } catch (error) {
      console.error("Error parsing userDetails from localStorage:", error);
      return getDefaultUserDetails(); // Return default on JSON parse error
    }
  }

  // Function to return default user details
  function getDefaultUserDetails() {
    return {
      id: "",
      profilePic: null,
      name: "",
      password: "",
      address: "",
      phoneNumber: "",
      locality: "",
      email: "",
      previewUrl: null,
      file: null,
      filePath: null,
    };
  }

  // Load jwtToken and userDetails from localStorage when the app starts
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    const savedUserDetails = localStorage.getItem("userDetails");

    try {
      if (storedToken && savedUserDetails) {
        setJwtToken(storedToken);
        setUserDetails(JSON.parse(savedUserDetails));
        setIsAuthenticated(true);
      } else {
        setJwtToken(null);
        setUserDetails(getDefaultUserDetails());
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      setJwtToken(null);
      setUserDetails(getDefaultUserDetails());
      setIsAuthenticated(false);
    }
  }, []);

  // Render the context provider with the necessary values
  return (
    <UserProfileContext.Provider
      value={{
        jwtToken,
        setJwtToken,
        userDetails,
        setUserDetails,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContextProvider;
