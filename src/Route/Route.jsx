
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

import Mypayments from "../components/DashBoard/Mypayments";





import AllUser from "../components/DashBoard/AllUser";
import PendingProduct from "../components/DashBoard/PendingProduct";
import ApproveProduct from "../components/DashBoard/ApproveProduct";
import MakeAdmin from "../components/DashBoard/MakeAdmin";
import ForbiddenPage from "../components/ForbiddenPage";
import AdminRoute from "./AdminRoute";
import Updated from "../components/DashBoard/Updated";
import Review from "../components/DashBoard/Review";
import OrderDetails from "../components/DashBoard/OrderDetails";
import RoleBaseprofile from "../components/Profile/RoleBaseprofile";
import ChangePassword from "../components/DashBoard/ChangePassword";
import Address from "../components/DashBoard/Address";
import AddProduct from "../components/DashBoard/AddProduct";
import TotalProduct from "../components/DashBoard/TotalProduct";



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
        path: 'forbiddenpage',
        Component: ForbiddenPage,
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


        path: 'make-admin',
        element: <AdminRoute>

          <MakeAdmin></MakeAdmin>
        </AdminRoute>
      },


      {
        path: 'pending',


        element: <AdminRoute>

          <PendingProduct></PendingProduct>
        </AdminRoute>

      },


      {
        path: 'totalproduct',

        element: <AdminRoute>
          <TotalProduct></TotalProduct>
       
        </AdminRoute>

      },

       {
        path: 'addproduct',

        element: <AdminRoute>
        <AddProduct></AddProduct>
        </AdminRoute>

      },



{
        path: 'approved',

        element: <AdminRoute>
          <ApproveProduct>
          </ApproveProduct>
          </AdminRoute>

      },




      {
        path: 'user',

        element: <AdminRoute>
          <AllUser></AllUser>
        </AdminRoute>

      },

      {


        path: 'orders',
        Component: MyOrders
      },



      {


        path: 'orderdetails/:id',
        Component: OrderDetails
      },


      {


        path: 'profile',
        Component: RoleBaseprofile
      },




      {


        path: 'review/:id',
        Component: Review
      },



      {


        path: 'update-order/:id',
        Component: Updated
      },

      {
        path: 'payments',
        Component: Mypayments

      },


      {
        path: 'password',
        Component: ChangePassword

      },
      {
        path: 'address',
        Component: Address

      },






    ]

  }
]);
