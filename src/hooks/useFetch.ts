import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url:string) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
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

export default useFetch;
