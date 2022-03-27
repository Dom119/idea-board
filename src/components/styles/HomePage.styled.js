import styled from "styled-components";

export const StyledHomePage = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  /* padding: 40px 0px; */
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  img{
    width: 50vw;
  }
  div {
    width: 50vw;
    display: block;
    margin: auto;
  }
  div:first-child {
    height: inherit;
    background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    padding: 15px 55px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 50px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    color: black;
    font-size: 30px;
  }

  a:hover {
    background-color: orange;
    border: 2px solid white;
    color: white;
    transition: 0.3s;
  }

  h1 {
    margin: 40px;
  }
`;
