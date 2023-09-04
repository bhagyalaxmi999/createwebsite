

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Logout = () => {
    

    const navigate = useNavigate()
    
    const logoutHandler = async () => {
            if(window.confirm(`Are you sure to logout?`)) {
                await axios.get(`/api/auth/logout`)
                .then(res => {
                    toast.success(res.data.msg)
                    navigate(`/`)
                    localStorage.removeItem('loginStatus')
                    window.location.href = '/';
                }).catch(err => toast.error(err.msg))
            } else {
                return;
            }
        }


  return (
    <div className=" flex items-center justify-center">
    
      <button
        onClick={logoutHandler}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    {/* </div> */}
  </div>
  );
};

export default Logout;
