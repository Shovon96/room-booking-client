import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Login from "../Pages/Login-Register/Login";
import Register from "../Pages/Login-Register/Registetion";
import RoomDetails from "../components/RoomDetails/RoomDetails";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/rooms',
            element: <Rooms></Rooms>
        },
        {
            path: '/roomDetails/:id',
            element: <PrivetRoutes><RoomDetails></RoomDetails></PrivetRoutes>
        },
        {
            path: '/myBookings',
            element: <PrivetRoutes><Bookings></Bookings></PrivetRoutes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registetion',
            element: <Register></Register>
        }
      ],
    },
  ]);

  export default router