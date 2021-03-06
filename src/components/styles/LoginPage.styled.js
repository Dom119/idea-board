import styled from "styled-components";

export const StyledLoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f3;

  > div {
    border-radius: 0;
    border-color: #ccc;
    border-width: 2px;
    border-style: solid;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  }
  > div:first-child {
    width: 400px;
    border-radius: 10px 0px 0px 10px;
  }
  > div:nth-child(2) {
    width: 600px;
    border-radius: 0px 10px 10px 0px;
  }

  h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
  }
  input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }

  input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }

  button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    background-color: orange;
    color: white;
    transition: 0.3s;
  }

  .existingUser {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
  }
  .existingUser > div {
    padding: 10px 15px;
    margin: 5px 5px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: orange;
    border: none;
    outline: none;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;

  }
  a{
    color: white;
    text-decoration:none;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
  }
`;
