import { useState } from 'react'
import './App.css'

import "./styles.css"

import Navbar from './Components.jsx/Navbar';
import Memberships from './Components.jsx/Memberships';
import About from './Components.jsx/About';
import Options from './Components.jsx/Options';
import Login from './Components.jsx/Login';
import Footer from './Components.jsx/Footer';
// import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Prac from './Components.jsx/Prac';
import Exercises from './Components.jsx/Exercises';
import Home from './Components.jsx/Home';
import NotFound from './Components.jsx/NotFound';
import Protein from './Components.jsx/Protein';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
       <Memberships/>
       <About heading="About"/>
       <Options/>
       <Login/>
       <Footer/>
      </div>
    },
  {
    path:'/membership',
    element:
    <div>
       {/* <Navbar/>
       <Home/> */}
       <Memberships/>
       <About heading="About"/>
       <Options/>
       <Login/>
       <Footer/>
    </div>
    
  },
    {
      path:"/exercises",
      element:
      <div>
      <Navbar/>
      <Exercises/>
      <Footer/>
      </div>
    },
    {
      path:'/protein',
      element:
      <div>
        <Navbar/>
        <Protein/>
        <Footer/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
)

function App() {
  return(
    <>
    <RouterProvider router={router}/>
    {/* <Router>
      <Routes>
        
        <Route exact path="about" element={<About/>}/>
        
          
      </Routes>

    </Router> */}
       {/* <Navbar/>
       
       

       
       
       <Prac/> */}
      

  </>
  )
}

export default App
