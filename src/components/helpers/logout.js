import axios from "axios";
import { toast } from "react-toastify";


const logout = async (authContext) => {

  

  try {
    const { authToken } = authContext?.data;
    const res = await axios.post(
      'http://127.0.0.1:8000/api/logout', {},{
        headers: { Authorization: `Bearer ${authToken}` },
      });

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
