import React, { useEffect, useState } from "react";
import { getProducts } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products?.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </div>
            <div className="flex-end">{item.price}</div>
          </div>
          <div className="text-sm mt-4">{item.description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(item.id)}
                id={`addtocart_${item.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
