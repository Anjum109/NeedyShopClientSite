import Fish from "../../Pages/CategoryPages/Fish";
import Vegetable from "../../Pages/CategoryPages/Vegetable";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/fish',
                element: <Fish></Fish>
            },
            {
                path: '/vegetable',
                element: <Vegetable />
            }

        ]
    }
]);

export default router;