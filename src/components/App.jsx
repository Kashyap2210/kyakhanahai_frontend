import React from "react";
import { Outlet } from "react-router-dom";

// import Navbar from "./Navbar";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import UserProfileContextProvider from "../context/userContextProvider.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProfileContextProvider>
      <Navbar />
      <Outlet />
      {/* Outlet allows us to change the maincontent of the page and populate different components. Outlet manages the nested routing in our code */}
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </UserProfileContextProvider>
  );
}

export default App;
