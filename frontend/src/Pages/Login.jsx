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
    e.preventDefault();
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
        <div className='logo'>
            <img src="/assets/Logo.svg" alt="logo" />
            <h6 className='logo-heading'>Online Project Management</h6>
        </div>
      <div className='form-main-container '>
        <div className='form-container'>
          <h3>Login to get started</h3>
          <form onSubmit={handleSubmit} class="needs-validation" novalidate>
          <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" placeholder="" name="email" id="email" class="form-control" required/>
                {/* <div class="invalid-feedback">
                    Email is required 
                </div> */}
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" placeholder="" name="password" id="password" class="form-control" required/>
                {/* <div class="invalid-feedback">
                    Give a valid password 
                </div> */}
            </div>
            <button class="btn-primary">Login</button>
          </form>
          {/* <ToastContainer/> */}
        </div>
      </div>
    </div>  
  )
}

export default Login