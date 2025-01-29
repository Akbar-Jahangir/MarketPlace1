import axios from "axios";
import { useEffect, useState } from "react";

const UseAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setAllProducts(response.data.products);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return allProducts;
};

export default UseAllProducts;
