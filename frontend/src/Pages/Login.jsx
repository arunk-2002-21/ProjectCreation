import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './style.css'
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const {email, password} = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left"
    });
  
  const handleSuccess = (msg) => 
    toast.success(msg, {
      position: "bottom-left"
    });

  const handleSubmit = async (e) => {
    e.prevent();
    try{
      const {data} = await axios.post(
        "https://localhost:8080/login",
        {
          ...inputValue,
        },
        {withCredentials: true}
      );
      console.log(data);
      const {success, message} = data;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate("/");
        },1000)
      } else{
        handleError(message);
      }
    } catch(error){
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email:"",
      password:"",
    })
  }

  return (
    <div className='login-background'>
      <div className='form-main-container '>
        <div className='form-container'>
          <h2>Login to get started</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                value={password}
                placeholder='Enter your password'
                onChange={handleOnChange}
                
              />
            </div>
            <button type='submit'>Login</button>
            <span>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>  
  )
}

export default Login