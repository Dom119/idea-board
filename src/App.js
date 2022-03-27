import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import IdeaPage from "./components/IdeaPage";
import LoginPage from "./components/LoginPage";
import GlobalStyles from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#fff",
    secondaryColor: "orange",
    footer: "#003333",
  },
};

// Update automatically -- [done]
// Sorting --------------- [done]
// Styling --------------- [done]
// Show toast ------------ [done]

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/:userId" element={<IdeaPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
