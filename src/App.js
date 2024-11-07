import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Home from "./components/main";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current URL path is '/webmail'
    if (window.location.pathname === "/webmail") {
      // Redirect to the specified URL
      window.location.href = "https://premium90.web-hosting.com:2096/cpsess7010092364/3rdparty/roundcube/?_task=mail&_mbox=INBOX";
    }
  }, [window.location.pathname]); // Run the effect when the path changes
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
