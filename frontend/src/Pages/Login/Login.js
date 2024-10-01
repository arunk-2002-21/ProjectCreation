import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './loginStyle.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: ''})

  const {email, password} = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    // reset error when user types
    setErrors({...errors, [name]: ''});

  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: '', password: ''}

    // Email validation
    if(!email){
      newErrors.email = 'Email is required'
      isValid = false;
    }

    // Password Validation 
    if(!password){
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

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

    if(!validateForm()){
      return;
    }

    try{
      const {data} = await axios.post(
        "http://localhost:8080/login",
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
          navigate("/dashboard");
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
            <h6 className='logo-heading mt-4'>Online Project Management</h6>
        </div>
      <div className='form-main-container '>
        <div className='form-container'>
          <h3 className='mb-5'>Login to get started</h3>
          <form onSubmit={handleSubmit} className="needs-validation" novalidate>
          <div class="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email"
                    name="email"
                     id="email" 
                     className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                     value={inputValue.email}
                      onChange={handleOnChange}
                      
                    />
                {errors.email && <div className="invalid-feedback">
                    {errors.email} 
                </div>}
            </div>
            <div class=" password-container">
                <label htmlFor="password" className="form-label">Password</label>
                <div style={{position : 'relative'}}>
                <input 
                  type={showPassword ? "tect" : "password" }
                   name="password"
                    id="password" 
                    className={`form-control password-input ${errors.password ? 'is-invalid': ''}`} 
                    value={inputValue.password}
                    onChange={handleOnChange}
                    />
                <img src={showPassword ? '/assets/eye.svg': '/assets/hide-password.svg'} 
                      className='toggle-icon'
                      onClick={() => setShowPassword(!showPassword)}     
                      alt="toggle visibility" 
                />
                {errors.password && <div className="invalid-feedback">
                    {errors.password} 
                </div> }
                </div>
            </div>
            <a href='#' className='mb-4'>Forgot password?</a>
            <button className="btn-primary">Login</button>
          </form>
          {/* <ToastContainer/> */}
        </div>
      </div>
    </div>  
  )
}

export default Login;