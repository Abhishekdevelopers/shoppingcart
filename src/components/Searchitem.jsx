import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
const Searchitem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filteredData();
  }, [term]);
  return <Product cart={cart} setCart={setCart} items={filterData} />;
};

export default Searchitem;
