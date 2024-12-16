import React, { useEffect } from "react";
import "./App.css";
import { CartProvider } from "./includes/contexts/cartContextApi/cartContext";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import { AuthProvider } from "./includes/contexts/authContext/AuthContext";

import { Root } from "./components/helpers/Root";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer autoClose={2000} toastClassName="toast-class" />
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
    //   <ProductProvider>

    //   <ObjCart/>
    // </ProductProvider>
  );
}

export default App;
