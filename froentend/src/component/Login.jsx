import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function Login  ()   {
  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    
    email: "",
    password: "",
    
   
  });


  const readValue = (e) => {
    const { name, value } = e.target
    setUser({ ...user,[name]:value})
}
  const submitHandler = async (e) => {
    try {
        e.preventDefault()
        console.log('new user =', user)
        await axios.post(`/api/auth/Login`,user)
            .then(res => {
                toast.success(res.data.msg)
                navigate(`/`)
            }).catch(err => toast.error(err.response.data.msg))
    } catch (err) {
        toast.error (err.msg)
    }

}


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className='text-center text-2xl font-bold'>Login</h1>
        

        <form className="w-full py-3 flex flex-col" onSubmit={submitHandler} >
          

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={user.email}
            onChange={readValue}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type= "password"
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={user.password}
              onChange={readValue}
            />
            
          </div>


          <button className="w-full max-w-[150px] m-auto  bg-blue-500 hover:bg-blue-700 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
           Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
           signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;



