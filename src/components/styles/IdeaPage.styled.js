import styled from "styled-components";

export const StyledIdeaPage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    box-shadow: 8px 8px 16px #d1d9e6;
    border: none;
    outline: none;
    background-color: orange;
    color: white;
    transition: 0.3s;
    margin: 10px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  input,
  textarea {
    width: 300px;
    height: 40px;
    margin: 4px 0;
    padding: 25px;
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
`;

export const StyledIdea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledEachIdea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  textarea {
    height: 80px;
  }
  button {
    margin-top: 10px;
  }
`;

export const StyledToast = styled.div`
  margin: 10px;
  padding: 5px;
  color: blue;
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
`;
export const StyledSorting = styled.div`
  margin: 10px;
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  select {
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px #d1d9e6;
  }
`;
