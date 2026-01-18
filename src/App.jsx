
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";




function App() {
  
  return (
    <Router>
 

     
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path= "/Login" element={<Login />} />
        <Route path = "/Signup" element= {<Signup />} />
        
      </Routes>
      
    </Router>
  )
}

export default App;
