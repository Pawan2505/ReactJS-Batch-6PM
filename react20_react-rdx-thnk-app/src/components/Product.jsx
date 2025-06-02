import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServerData } from "../redux/Action";

const Product = () => {
  const { loading, error, data } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // getServerData(dispatch);
    dispatch(getServerData)
  }, []);

  return loading ? (
    <h1 style={{textAlign:'center'}}>Loading...</h1>
  ) : (
    <div>
      <h1>Products List</h1>

      {data.map((item) => (
        <div key={item.id}>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <h2>{item.category}</h2>
            <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
