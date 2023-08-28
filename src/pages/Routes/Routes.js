import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../layout/Main";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Store from "../Store/Store";
import Subscribe from "../Subscribe/Subscribe";
import Privacy from "../Privacy/Privacy";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/contact',
          element : <Contact></Contact>
        },
        {
          path : "/about",
          element : <About></About>
        },
      {
        path : '/store',
        element : <Store></Store>
    },
    {
      path : '/subscribe',
      element : <Subscribe></Subscribe>
  },
  {
    path : '/about',
    element : <About></About>
},
{
  path : '/privacy',
  element : <Privacy></Privacy>
}
    ]
  },
]);

export default routes;
