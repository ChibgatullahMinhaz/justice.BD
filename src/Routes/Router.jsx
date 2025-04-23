import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Error/NotFound";
import LawyerDetails from "../Pages/Details/LawyerDetails";
import Booking from "../Pages/Booking/Booking";

const routers = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/My-Bookings',
                element: <Booking></Booking>
            },
            {
                path: '/Blogs',
                element: <div>Blogs</div>
            },
            {
                path: '/Contact-Us',
                element: <div>Contact-Us</div>
            },
            {
                path: '/lawyerDetails/:lucence',
                Component: LawyerDetails
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default routers