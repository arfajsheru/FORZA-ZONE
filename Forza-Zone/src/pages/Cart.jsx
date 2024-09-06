import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Cart = () => {

  // const[cartData, setCartData] = useState([]);

  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    cartData,
    setCartData,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  useEffect(() => {
    const tempData = []; //Initialization
    for (const items in cartItems) {
      // ye condition cartItems me itemId ko iterate karega items
      for (const item in cartItems[items]) {
        // ye condiion cartItems me itemId ke size ko iterate karega
        if (cartItems[items][item] > 0) {
          // check karega ki carteItems me itemId or size ki value greterthan 0 hai to tempData mai push method se _id: items, size:item, quantity: cartItems[items][item];
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, size, newQuantity);
    }
  };
  return (
    <div className="border-t pt-14">
      <Title text1={"YOUR"} text2={"CART"} />
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={index}
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-20 justify-center items-center  border border-gray-700">
                <span
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity - 1)
                  }
                  className="text-lg font-semibold cursor-pointer w-8 text-center"
                >
                  -
                </span>
                <span className="text-lg font-semibold border-r border-l w-10 text-center border-gray-700">
                  {item.quantity}
                </span>
                <span
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity + 1)
                  }
                  className=" text-lg font-semibold cursor-pointer w-8 text-center "
                >
                  +
                </span>
              </div>

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
        {cartData.length === 0 && (
          <div className="flex flex-col justify-center items-center h-[50vh]">
           <MdOutlineAddShoppingCart className="text-8xl text-gray-300 mb-12" />
            <h2 className="text-gray-300 text-2xl sm:text-3xl font-semibold text-center px-4  flex justify-center">
              YOUR CART IS EMPTY
            </h2>
            <button
              onClick={() => navigate("/collection")} // Adjust this path to where you want the button to navigate
              className="bg-black text-white text-sm my-4 px-8 py-3"
            >
              SHOP NOW
            </button>
          </div>
        )}
      </div>
      {cartData.length !== 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />

            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
