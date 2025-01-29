import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "../interfaces/Card.interface"; // Adjust the import path as needed

const UseProductDetails = (id: any | undefined)=> {
  const [singleProduct, setSetSingleProduct] = useState<CardProps | null>(null); 
  const [similarProducts, setSimilarProducts] = useState<CardProps[]>([]); 
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    // Fetch product details
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setSetSingleProduct(response.data);
        setCategory(response.data.category);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if(!category){
        return 
      }
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        setSimilarProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);
  return {singleProduct,similarProducts}
};

export default UseProductDetails;
