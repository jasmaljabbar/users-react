import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { TiUserAddOutline } from "react-icons/ti";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const dispatch = useDispatch();
  const navigate  = useNavigate()

  const {user, isLoading, isError, isSuccess, message} =useSelector((state)=>state.auth)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== re_password) {
      toast.error("Passwords do not match!", {
        position: "top-right",
      });
    }else{
      const userData = {
        first_name,
         last_name,
         email,
         password,
         re_password
      }
      dispatch(register(userData))
    }
  };

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    
    if (isSuccess || user){
      navigate("/")
      toast.success("An activation email has been sent to your email. Please check your email")
    }
  })

  return (
    <div className="container mx-auto">
      <div className="bg-gray-200 rounded-md p-8 max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          Register <TiUserAddOutline className="ml-2" />
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
            value={first_name}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleChange}
            value={last_name}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            onChange={handleChange}
            value={re_password}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          {/* 
          <Link to="/forgot-password" className="text-blue-500 hover:underline block text-center">
            Forgot Password?
          </Link> */}

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full  bg-blue-500 text-white rounded-md px-3 py-2 transition duration-300 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
