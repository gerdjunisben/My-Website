
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./Styles/App.css";

function App() {

  


  return (
    <Router>
      <nav>
        
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        
         </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>);

}

export default App;
