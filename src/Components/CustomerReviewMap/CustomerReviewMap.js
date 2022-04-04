import React from 'react';

const CustomerReviewMap = (props) => {
    const {name, ratings, title} = props.reviews;
  
    return (
        <div>
            <div className="flex flex-wrap justify-center mt-6 gap-2 border-2 p-10 bg-orange-300">
            <h3><b>Name</b> : ({name})</h3>
            <p> <b>Review</b> : {title}</p>
            <p><span> <b>Ratings</b>: {ratings}</span></p>
        
        </div>
       <hr />
        </div>
       
    );
};

export default CustomerReviewMap;