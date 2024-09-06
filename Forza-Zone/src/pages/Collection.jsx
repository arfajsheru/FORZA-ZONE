import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  //Category human
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      //Check karega ki category includes hai ki nahi.
      setCategory((prev) => prev.filter((item) => item !== e.target.value)); // ye check karega ki category includes hai to fir usek remove karo.
    } else {
      setCategory((prev) => [...prev, e.target.value]); // if agar category include nahi hai to uako setcategory mai includes kar lo.
      //prev ak array he jo state manage karta he spred karene ke liye
    }
  };

  //Category clothes
  const toggleSubCategory = (e) => { // ye ak function he jo ki ak event callback le raha he is me hamen check kiya hai subCategory ke array ka ander jo category ye vo ismai include he ya nahi. vo condition check karega
    if (subCategory.includes(e.target.value)) { // check condition included or not // condition is false then we will go to else blog
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value)); // item !== e.target.value; ye true iski condition jab false hogi to item ko remove karega
    } else {
      setSubCategory((prev) => [...prev, e.target.value]); // item is not added then start else conditon. prev me join hoyega e.target.value jo hame milegi onchange event se 
    }
  };

  // All Filter catergory apply
  

  const applyFilter = () => {

    let productsCopy = products.slice();


    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(
        (item) => category.includes(item.category)
        //item callback sab items ko iterate karega or mene click kiya men category to vo include karega men category ki sab products
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) { //sortType ye state he jo by default relevnet he
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      case "100-200":
        setFilterProducts(
          fpCopy.filter((item) => item.price >= 100 && item.price <= 200)
        );
        break;

      case "200-300":
        setFilterProducts(
          fpCopy.filter((item) => item.price >= 200 && item.price <= 300)
        );
        break;

      case "300-400":
        setFilterProducts(
          fpCopy.filter((item) => item.price >= 300 && item.price <= 400)
        );
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light texxt-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              kids
            </p>
          </div>
        </div>
        {/* Sub Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-4 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light texxt-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/*Right side*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavnet</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="100-200">Sort by: 100-200</option>
            <option value="200-300">Sort by: 200-300</option>
          </select>
        </div>

        {/*Map Produts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
