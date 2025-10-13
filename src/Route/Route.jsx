
import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import AuthLayOut from "../components/AuthLayout/AuthLayOut";
import Register from "../components/Register";
import LogInPage from "../components/LogInPage";
import DetailsPage from "../components/DetailsPage";
import CartPage from "../components/CartPage";
import WishListPage from "../components/WishListPage";
import BuyNowPage from "../components/BuyNowPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ShopBy from "../components/ShopBy";
import PlaceOrder from "../components/PlaceOrder";
import SearchPage from "../components/SearchPage";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,

    children: [


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

      {
        path: 'cart',
        Component: CartPage

      },

      {

        path: 'wishlist',
        Component: WishListPage
      },
      {

        path: 'shop',
        Component: ShopBy
      },

       {

        path: 'placeorder',
        Component: PlaceOrder
      },


      
       {

        path: 'search',
        Component: SearchPage
      },


       
      {

        path: 'buynow',
        element: (
          <PrivateRoute>
            <BuyNowPage />
          </PrivateRoute>
        )

      },

    ]
  },


  {

    path: '/',
    Component: AuthLayOut,

    children: [

      {

        path: 'register',
        Component: Register
      },


      {

        path: 'login',
        Component: LogInPage
      }
    ]


  }
]);
