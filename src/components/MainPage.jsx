// This component renders the main page of our website

import React from "react";
import FirstIntroComp from "./FirstIntroComp.jsx";
import SecondIntroComp from "./SecondIntroComp.jsx";
import ThirdIntroComp from "./ThirdIntroComp.jsx";

import "../App.css";

export default function MainPage() {
  return (
    <>
      <FirstIntroComp />
      <SecondIntroComp />
      <ThirdIntroComp />
    </>
  );
}
