import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/Details" element={<Details/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
