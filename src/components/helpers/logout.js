import axios from "axios";
import { toast } from "react-toastify";
import { logoutApi } from "../../services/user_listing_api";

const logout = async (authContext) => {

  

  try {
    const { authToken } = authContext?.data;
    const res = await logoutApi(authToken)

    if (res.status === 200) {
      authContext.dispatch({ type: "LOGOUT" }); 
      toast.success("Successfully logged out.");
      return true;
    }
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("An error occurred during logout.");
    return false;
  }
};

export default logout;
