import React, { Suspense, lazy, useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import logout from "./logout";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../includes/contexts/authContext/AuthContext";
import { toast } from "react-toastify";
import Test from "../test/Test";
const HomePage = lazy(() => import("../home/HomePage"));
const ProductCart = lazy(() => import("../cart/ProductCart"));
const Register = lazy(() => import("../register/Register"));
const AccountPage = lazy(() => import("../account_page/AccountPage"));
const Login = lazy(() => import("../login/Login"));

export const Root = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

//   useEffect(() => {
// const checkAuth=()=>{
//     const { authToken } = authContext?.data;
//    if (authToken) {
//    try {
//       // ////////////////// IF TOKEN FOUND ,CHECK FOR THE EXPIRY   ////////////////////
//     const token = jwtDecode(authToken);
//     if (Date.now() / 1000 < token.exp) {
//       if (location.pathname === "/login" || location.pathname === "/register") {
//         navigate("/");
//       }
//     } else {
//       // /////////////////// logout USER ON TOKEN EXPIRY  ///////////////////////////
//     authContext.dispatch({type:'LOGOUT'})
//     }
//    } catch (error) {
//     console.error("Invalid token: ", error);
//     authContext.dispatch({type:'LOGOUT'})
//    }}
//     // /////////////////// NAVIGATE TO INDEX ROUTE IF  authToken IS undefined  ///////////////////////////
//     else if (location.pathname !== "/login" && location.pathname !== "/register") {
//       navigate("/login");
//     }
// }
//    checkAuth();
//   }, [authContext?.data, navigate, location]);

  return (
    <Suspense
      fallback={
        <div class="d-flex justify-content-center align-items-center vh-100">
          <div class="spinner-border text-success " role="success"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="*" element={<_404Page/>} /> */}
      </Routes>
    </Suspense>
  );
};
