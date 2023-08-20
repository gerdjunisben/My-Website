
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./Styles/App.css";

function App() {

  


  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet"/>
      <Router>
        <nav>
        
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
        
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>);

}

export default App;
