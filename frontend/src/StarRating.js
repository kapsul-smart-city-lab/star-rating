import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleStarClick(ratingValue)}
            />
            <span>{ratingValue}</span>
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
