import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/Details" element={<Details />} />
        <Route
          path="/user/foget-password"
          element={
            <>
              <h2>Page Under Development !!!</h2>
              <p> !!! Coming Soon !!!</p>
            </>
          }
        />
                <Route path="*" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
