import axios from "axios";
import {  useEffect, useState } from "react";


const UseBrowseCategory = (name:string | undefined) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${name}`);
        setProducts(response.data.products);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return Products;
};

export default UseBrowseCategory;
