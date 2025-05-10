import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext/AuthContext";
import Button from "../components/Button/Button";
import axios from "axios";

interface ReviewFormProps {
  productId: string | number | undefined;
  onReviewAdded: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, onReviewAdded }) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  const authContext = useContext(AuthContext);
  const { webAccessToken, user } = authContext;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webAccessToken) {
      setError("Please login to submit a review");
      return;
    }
    
    if (!comment.trim()) {
      setError("Please enter a comment");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const reviewData = {
        rating,
        comment,
        reviewerName: user?.name || "Anonymous",
        reviewerEmail: user?.email || "anonymous@example.com",
        date: new Date().toISOString()
      };
      
      const response = await axios.post(
        `https://dummyjson.com/products/${productId}/reviews/add`,
        reviewData,
        {
          headers: {
            'Authorization': `Bearer ${webAccessToken}`
          }
        }
      );
      
      console.log("Review added:", response.data);
      
      // Reset form
      setComment("");
      setRating(5);
      
      // Notify parent component to refresh reviews
      onReviewAdded();
      
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!webAccessToken) {
    return (
      <div className="border p-4 rounded-md bg-gray-50 mt-4 mb-6">
        <p className="text-center text-lightblack font-Montserrat">
          Please <span className="text-warning font-medium cursor-pointer">login</span> to add a review
        </p>
      </div>
    );
  }
  
  return (
    <div className="border p-4 rounded-md bg-white mt-4 mb-6">
      <h3 className="text-lg font-medium mb-4 font-Montserrat">Write a Review</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-lightblack mb-1">
            Rating
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="focus:outline-none"
              >
                <svg
                  className={`w-6 h-6 ${
                    value <= rating ? "text-warning" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            ))}
            <span className="ml-2 text-sm text-lightblack">
              {rating} {rating === 1 ? "Star" : "Stars"}
            </span>
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-lightblack mb-1">
            Your Review
          </label>
          <textarea
            id="comment"
            className="w-full p-2 border border-lightslate rounded-md focus:outline-none focus:ring-1 focus:ring-warning"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this product..."
            required
          ></textarea>
        </div>
        
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        
        <Button
          type="submit"
          text={isSubmitting ? "Submitting..." : "Submit Review"}
          customStyle="bg-warning w-full h-[40px] text-white font-semibold text-sm font-Montserrat font-medium rounded-md"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ReviewForm;