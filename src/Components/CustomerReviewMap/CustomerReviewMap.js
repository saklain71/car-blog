import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const CustomerReviewMap = (props) => {
    const {name, ratings, title} = props.reviews;
  
  
    return (
        <div className="">
            <div className=" mt-6 gap-2 border-2 p-10 ">
            <h3><b>Name</b> : ({name})</h3>
            <p> <b>Review</b> : {title}</p>
            <p><span> <b>Ratings</b>: {ratings}  <FontAwesomeIcon> icons{faStar}</FontAwesomeIcon> </span></p>
        
        </div>
       <hr />
        </div>
       
    );
};

export default CustomerReviewMap;