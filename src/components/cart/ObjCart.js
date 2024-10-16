import React, { useContext } from "react";
import { ProductContext } from "../../includes/cartContextApi/abcContext";

const ObjCart = () => {
  const productContext = useContext(ProductContext);
  const handleAdd = () => {
    productContext.dispatch({ type: "ADD", payload: { id: 1, name: "abc", address: "sadasdsadsa" },
    });
  };
  const handleUpdate = () => {
    productContext.dispatch({type: "UPDATE", payload: { id: 1, name: "aqib" },
    });
  };
  const handledelete = () => {
    productContext.dispatch({ type: "DELETE", payload: { id: 1 } });
  };
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div>
        <button className="btn btn-primary p-2 mx-2" onClick={handleAdd}>
          add
        </button>
        <button className="btn btn-warning p-2 mx-2" onClick={handleUpdate}>
          update Name
        </button>
        <button className="btn btn-danger p-2 mx-2" onClick={handledelete}>
          DELETE
        </button>

        <div className="mt-3">
          <p>ID :{productContext.data.id} </p>
          <p>NAME: {productContext.data?.name || 'not defined'}  </p>
          <p>
            PRICE: {productContext.data?.address || "USER ADDRESS NOT FOUND"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ObjCart;
