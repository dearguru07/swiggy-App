import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./src/components/navbar";
import Body from "./src/components/body";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import About from "./src/components/about";
import Help from "./src/components/help";
import Offer from "./src/components/offer";
import Menu from "./src/components/menu";

const AppLayOut=()=>{
  return <div className="app-layout">
  <Navbar/>
  <Outlet/>
  </div>
}
const ways=createBrowserRouter(
  [{
   path:"/",
   element:<AppLayOut/>,
   children:[
    {
      path:"/",
      element:<Body/>
    },
    {
     path:"/about",
     element:<About/>
    },
    {
      path:"/help",
      element:<Help/>
     },
     {
      path:"/restarants/1234",
      element:<Menu/>
     },
    {
     path:"/offer",
     element:<Offer/>
    }
   ]
  }

])

const root=ReactDOM.createRoot(document.getElementById('box'))
root.render(<RouterProvider router={ways}/>)
