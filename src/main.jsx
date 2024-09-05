import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

console.log("App is running now");

// Importing components for rendering for specific paths
import AddDish from "./components/AddDish.jsx";
import LogIn from "./components/LogIn.jsx";
import ShowDish from "./components/ShowDish.jsx";
import GetDish from "./components/GetDish.jsx";
import Profile from "./components/Profile.jsx";
import Bavarchi from "./components/Bavarchi.jsx";
import CheckPlaces from "./components/CheckPlaces.jsx";
import ContactUs from "./components/ContactUs.jsx";
import SignUp from "./components/SignUp.jsx";
import MainPage from "./components/MainPage.jsx";

const router = createBrowserRouter([
  // "createBrowserRouter" is used to create a router object with route definitions.

  {
    path: "/", //Defines the base path
    element: <App />, // App will contain the common layout
    children: [
      // Routes are defined & the components are assigned to that route so that when the request is sent on the route corresponding component will be rendered
      { path: "/", element: <MainPage /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/adddish", element: <AddDish /> },
      { path: "/showdish", element: <ShowDish /> },
      { path: "/getdish", element: <GetDish /> },
      { path: "/profile", element: <Profile /> },
      { path: "/bavarchi", element: <Bavarchi /> },
      { path: "/checkplaces", element: <CheckPlaces /> },
      { path: "/contactUs", element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
