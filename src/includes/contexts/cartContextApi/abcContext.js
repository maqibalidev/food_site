import { createContext, useReducer } from "react";
const INITIAL_STATE = JSON.parse(localStorage.getItem("cartData")) || { id: null,name: "",address: null};
const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
    const data = {id:action.payload.id,name:action.payload.name,address:action.payload.address}
    localStorage.setItem("cartData", JSON.stringify(data));
    return data;
    }
    case "UPDATE": {
     INITIAL_STATE.name = action.payload.name;
   localStorage.setItem("cartData", JSON.stringify(INITIAL_STATE));
      return {...state,name:action.payload.name};
      }
    case "DELETE": {
    delete INITIAL_STATE.name;
      localStorage.setItem("cartData", JSON.stringify(INITIAL_STATE));
      return {...state,name:null};
    }

    default: return state;
  }};

 

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);

  return (
    <ProductContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
