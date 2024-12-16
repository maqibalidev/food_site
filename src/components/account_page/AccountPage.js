import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../includes/contexts/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import logout from "../helpers/logout";
import Header from '../../includes/header/Header'
const AccountPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const {name,email} = authContext?.data || 
  {name:'Name not available',email:'Email not available'};

  const handleLogout = async () => {
    setLoading(true);
    const isLoggedOut = await logout(authContext);
    isLoggedOut && navigate("/login");
    setLoading(false);
  };

  return (
    <div className="vh-100">
      <Header/>
      {loading && (
        <div className="loader-overlay d-flex vh-100 align-items-center justify-content-center">
          <div class="loader-container d-flex justify-content-center align-items-center px-5 py-4 bg-light">
            <div class="spinner-border text-success " role="success"></div>
          </div>
        </div>
      )}

      <div className="vh-100 p-5">
        <div className="d-flex justify-content-end">
          <button onClick={handleLogout} className="btn btn-success p-2">
            LOGOUT
          </button>
        </div>

        <div className="w-50 p-4">
          <form className="form">
            <input
              className="form-control p-2 mb-2"
              value={name}
              type="text"
              placeholder={"Enter Name"}
              readOnly
            />
            <input
              className="form-control p-2 mb-2"
              value={email}
              type="text"
              placeholder={"Enter Email"}
              readOnly
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
