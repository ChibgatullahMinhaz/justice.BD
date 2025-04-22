import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";

const routers = createBrowserRouter([
    {
        path: '/',
        Component: Root
    }
])

export default routers