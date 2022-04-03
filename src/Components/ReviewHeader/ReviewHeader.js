import React from 'react';
import CustomerReviewMap from '../CustomerReviewMap/CustomerReviewMap';
import Reviews from '../CustomHook/Reviews';

const ReviewHeader = (props) => {
    const [reviews, setReviews] = Reviews();
   
    return (
        <div className="flex flex-wrap justify-center mt-6 gap-2 p-2">
            
          {
              reviews.map(reviews => <CustomerReviewMap
              reviews={reviews}
              key={reviews.id}
              ></CustomerReviewMap>)
          
              
          }

    </div>
    );
};

export default ReviewHeader;