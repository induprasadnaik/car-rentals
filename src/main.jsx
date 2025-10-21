import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/errorpage.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cars", element: <Cars /> },
      { path: "contact", element: <Contact /> },
      // { path: "users", element: <Users />, loader: usersLoader },
      // { path: "users/:id", element: <UserDetails />, loader: userDetailsLoader },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
