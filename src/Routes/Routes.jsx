import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Home/Category/category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/RegLog/Login";
import Register from "../pages/RegLog/Register";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
      },
      {
        path: "/categories/:id",
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <Privateroute>
            <News></News>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-alpha-neon.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
