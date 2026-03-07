import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateBlog from "./pages/CreateBlog";
import BlogArticle from "./pages/BlogArticle";
import UserProfile from "./pages/UserProfile";
import Explore from "./pages/Explore";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/create",
    Component: CreateBlog,
  },
  {
    path: "/article/:id",
    Component: BlogArticle,
  },
  {
    path: "/article",
    Component: BlogArticle,
  },
  {
    path: "/profile",
    Component: UserProfile,
  },
  {
    path: "/explore",
    Component: Explore,
  },
]);
