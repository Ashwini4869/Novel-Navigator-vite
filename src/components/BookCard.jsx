import React from "react";
const BookCard = (props) => {
  return (
    <div className="card--container">
      <div>
        <img className="card--image" src={props.image_url}></img>
      </div>
      <h5 className="mt-2 p-2 card--title">{props.BookName}</h5>
    </div>
  );
};

export default BookCard;
