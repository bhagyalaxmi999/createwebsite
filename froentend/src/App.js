
import './App.css';
import React,{ useContext }from 'react'
import Header from './component/Header';
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalContext } from './GlobalContext'
import ProtectedRoute from './authgaurd/ProtectedRoute'
import Home from './component/Home'
import Login from './component/Login';
import Signup from './component/Signup';
import Service from './component/Service';
import Feature from './component/Feature';
import Product from './component/Product';
import Pnf from './component/Pnf';
import Testimonial  from './component/Testimonial'

function App() {

  const context = useContext(GlobalContext)
  const [isLogged] = context.auth.isLogged
  const [isUser] =  context.auth.isUser
  const [isAdmin] = context.auth.isAdmin
  return (
    <BrowserRouter>
     <Header/>
    <ToastContainer position = {'top-center'} autoClose={4000}/>
     <Routes>
     <Route path={``} element={<Home/>} />
     <Route path={`/service`} element={<Service/>} />
     <Route path={`/feature`} element={<Feature/>} />
     <Route path={`/product`} element={<Product/>} />
     <Route path={`/login`} element={<Login/>} />
     <Route path={"/testimonial"} element={<Testimonial/>}/>
      <Route path={`/signup`} element={<Signup/>} />
     
       
          {
            isLogged && isUser ? (
              <Route element = {<ProtectedRoute/>}>
                <Route path ={`/home`} element={<Home/>}/>
              </Route>
            ):null
          }  
          {
            isLogged && isAdmin ? (
              <Route element = {<ProtectedRoute/>}>
                <Route path={`/home`} element ={<Home/>}/>
              </Route>
            ): null 
          }  
        <Route path={`/*`} element={<Pnf/>} />     
     </Routes>
     
    
    </BrowserRouter>
     
  
  );
}

export default App;
