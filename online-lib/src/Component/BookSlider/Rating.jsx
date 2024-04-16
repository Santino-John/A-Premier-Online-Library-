import React from "react";

const Rating = ({ numbers, review }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= numbers) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    } else if (i - numbers <= 0.5) {
      stars.push(<i key={i} className="bi bi-star-half"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star"></i>);
    }
  }

  return (
    <div style={{ color: "rgb(254,171,17)",margin:" 0px 5px",fontSize:"18px" }}>
      {stars}

      <span> {numbers} </span>
      <span style={{ color: "gray", fontWeight: "bold" }}>
       
        ({review}reviews)
      </span>
    </div>
  );
};
export default Rating;
