import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "../interfaces/card.interface"; // Adjust the import path as needed

interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

// Extend CardProps to include reviews if not already included
interface ProductWithReviews extends CardProps {
  reviews?: Review[];
}

const useProductDetails = (id: any) => {
  const [singleProduct, setSingleProduct] = useState<ProductWithReviews | null>(null); 
  const [similarProducts, setSimilarProducts] = useState<CardProps[]>([]); 
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProductDetails = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(response.data);
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch similar products
  const fetchSimilarProducts = async () => {
    if (!category) return;
    
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      // Filter out the current product from similar products
      const filtered = response.data.products.filter((product: CardProps) => product.id !== id);
      setSimilarProducts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to refresh product details (used after adding a review)
  const refetchProductDetails = () => {
    fetchProductDetails();
  };

  // Add review function
  const addReview = async (reviewData: Omit<Review, 'date'> & { date?: string }) => {
    if (!id) return { success: false, error: "Product ID is required" };
    
    try {
      // Ensure date is set if not provided
      if (!reviewData.date) {
        reviewData.date = new Date().toISOString();
      }
      
      const response = await axios.post(
        `https://dummyjson.com/products/${id}/reviews/add`,
        reviewData
      );
      
      // Refresh product details to show the new review
      await fetchProductDetails();
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error adding review:", error);
      return { success: false, error: "Failed to add review" };
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  useEffect(() => {
    if (category) {
      fetchSimilarProducts();
    }
  }, [category]);

  return {
    singleProduct,
    similarProducts,
    loading,
    refetchProductDetails,
    addReview
  };
};

export default useProductDetails;