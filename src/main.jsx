import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home.jsx';
import ContactUs from './component/Contact/ContactUs.jsx';
import AboutUs from './component/About/AboutUs.jsx';
import Gallery from './component/Gallery/Gallery.jsx';
import Chef from './component/Meals/Chef.jsx';
import Footer from './component/Footer/Footer.jsx';
import Menu from './component/OurMenu/Menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
      path: '/',
      element: <Gallery></Gallery>
    },
      {
      path: 'meals',
      element: <Chef></Chef>
    },
      {
      path: 'contact',
      element: <ContactUs></ContactUs>
    },
      {
      path: 'about',
      element: <AboutUs></AboutUs>
    },
      {
      path: 'menu',
      element: <Menu></Menu>
    },
    
  ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  <Footer></Footer>
  </React.StrictMode>,
)
