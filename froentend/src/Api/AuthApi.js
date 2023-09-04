import  { useState , useCallback, useEffect } from 'react'
import axios from 'axios'

function useAuthApi(props) {
    const [token,setToken] = useState(false)
    const [currentUser,setCurrentUser] = useState(null)

    const [isLogged,setIsLogged] = useState(false)

    const [isAdmin,setIsAdmin] = useState(false)
    const [isUser,setIsUser] = useState(false)

    let loginStatus = new Boolean(localStorage.getItem('loginStatus')) || false

  
    const getToken = useCallback(() => {
        let readAuthToken = async () => {
          const res =  await axios.get(`/api/auth/token`)
                    console.log('token =', res.data)
                setToken(res.data.authToken)
                
                const res1= await axios.get(`/api/auth/current/user`, {
                    headers: {
                        Authorization: res.data.authToken
                    }
                })
                setCurrentUser(res1.data.currentUser)
                setIsLogged(true)
                if(res1.data.currentUser.role === "superadmin") {
                    setIsAdmin(true)
                } else if (res1.data.currentUser.role === "user") {
                    setIsUser(true)
                }        
        }

        if(loginStatus == true) {
            readAuthToken()
        }
    },[])

  

    useEffect(() => {

        if(loginStatus == true) {
            getToken()
        }
    },[])

  return {
        token: [token,setToken],
        currentUser: [currentUser,setCurrentUser],
        isLogged: [isLogged,setIsLogged],
        isUser: [isUser,setIsUser],
        isAdmin: [isAdmin,setIsAdmin]
  }
}

export default useAuthApi