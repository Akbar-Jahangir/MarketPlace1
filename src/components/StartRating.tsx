import React from "react";

interface StarRatingProps {
  initialRating: number;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, onChange }) => {
  const [hoveredRating, setHoveredRating] = React.useState<number | null>(null);
  
  const handleClick = (rating: number) => {
    onChange(rating);
  };
  
  const renderStar = (index: number) => {
    const filled = (hoveredRating !== null ? hoveredRating : initialRating) >= index;
    
    return (
      <svg
        key={index}
        className={`w-6 h-6 cursor-pointer ${filled ? "text-warning" : "text-gray-300"}`}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHoveredRating(index)}
        onMouseLeave={() => setHoveredRating(null)}
        onClick={() => handleClick(index)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  };
  
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map(renderStar)}
    </div>
  );
};

export default StarRating;