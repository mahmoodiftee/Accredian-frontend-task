import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);