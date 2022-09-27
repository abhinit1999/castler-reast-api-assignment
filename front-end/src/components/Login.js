import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const login=(e)=>
  { 
    const {email,password}=user;
    e.preventDefault();
    if(!email || !password)
    {
      alert(`
      \n\n All Fields Are Mandatory`)
    }
    else
    {
      alert(`Login SuccessFull !!! \n
      You will be Redirected to Home Page
      `);
      navigate("/to/home")
    }
    

  }

  return (
    <div className="form_class">
    <form onSubmit={login}>
      <div className="input_container">
        
        <div className="input_div">
          <label className="lbl" htmlFor="email">
            Email:{" "}
            <input
              value={user.email}
              onChange={onChangeHandler}
              className="input_field"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </label>
        </div>
        <div className="input_div">
          <label className="lbl" htmlFor="password">
            Pass:{" "}
            <input
              value={user.password}
              onChange={onChangeHandler}
              className="input_field"
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </label>
        </div>
        
      </div>
      <button className="btn" type="submit">
        Submit
      </button>{" "}
     <span>
      <NavLink style={
        {
          textDecoration:"none",
          marginLeft:"1rem",

        }
      } to="/user/foget-password">forget password ?</NavLink>
     </span>
      
    </form>
  </div>
  )
}

export default Login;