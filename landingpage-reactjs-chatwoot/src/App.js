import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Offer from "./components/Offer";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ChatwootWidget from "./components/ChatwootWidget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Offer />
      <Pricing />
      <Contact />
      <ChatwootWidget />
    </div>
  );
}

export default App;
