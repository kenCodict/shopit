import React from "react";
import {FaStar} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);

  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <div className="flex">
      {ratingArray.map((value, index) =>
        value ? (
            <FaStar key={index} className="text-lg bi-star-fill text-yellow-500 mr-1"/>
        //   <i
        //     key={index}
        //     className="text-lg bi-star-fill text-yellow-500 mr-1"
        //   ></i>
        ) : (
        //   <i key={index} className="text-lg bi-star text-yellow-500 mr-1"></i>
        <AiOutlineStar className="text-lg bi-star text-yellow-500 mr-1" key={index}/>
        )
      )}
    </div>
  );
};

export default Rating;