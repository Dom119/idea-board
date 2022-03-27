import React from "react";
import { Link } from "react-router-dom";
import { StyledHomePage } from "./styles/HomePage.styled";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div>
        <h1>Welcome to Idea Board</h1>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <img src={require("./homePagePhoto.png")} />
      </div>
    </StyledHomePage>
  );
}
