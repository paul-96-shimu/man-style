
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
import ErrorPage from "../components/ErrorPage";
import DashBord from "../Layout/DashBord";
import MyOrders from "../components/DashBoard/MyOrders";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    // errorElement: <ErrorPage></ErrorPage>,
    errorElement: <RootLayOut></RootLayOut>,

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
        path: "*",
        Component: ErrorPage,
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


  },

  {

    path: '/dashboard',
    element:
      <PrivateRoute>
        <DashBord></DashBord>

      </PrivateRoute>,

    children: [
      {


        path: 'myorders',
        Component: MyOrders
      },

    ]

  }
]);
