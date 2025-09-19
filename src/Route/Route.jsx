
import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import AuthLayOut from "../components/AuthLayout/AuthLayOut";
import Register from "../components/Register";


export const router = createBrowserRouter([
  {
    path: "/",
  Component: RootLayOut,

  children:[


    {
         index: true,
        Component: Home


    },

   {
        path: 'contact',
        Component: ContactUs,
      },

  ]
  },


  {

path:'/',
Component: AuthLayOut,

children:[

  {

    path:'register',
    Component:Register
  }
]


  }
]);
