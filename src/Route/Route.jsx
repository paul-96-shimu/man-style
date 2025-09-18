
import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";


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
]);
