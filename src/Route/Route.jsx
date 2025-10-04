
import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import AuthLayOut from "../components/AuthLayout/AuthLayOut";
import Register from "../components/Register";
import LogInPage from "../components/LogInPage";
import DetailsPage from "../components/DetailsPage";


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

      {
        path: "product/:id",   
        Component: DetailsPage
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
  },


  {

    path:'login',
    Component:LogInPage
  }
]


  }
]);
