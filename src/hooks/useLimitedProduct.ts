import axios from "axios";
import { useEffect, useState } from "react";

const UseLimitedProduct = () => {
  const [limitedProducts, setLimitedProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=6');
        setLimitedProducts(response.data.products);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return limitedProducts;
};

export default UseLimitedProduct;
