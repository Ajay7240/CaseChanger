import { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#022C44";
      document.body.style.color = "#ffffff";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000000";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="Case Changer"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                heading="Enter Your Text Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
