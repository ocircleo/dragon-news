import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
export default Routers;
