import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        
      </>
    </Router>
  );
}

export default App;
