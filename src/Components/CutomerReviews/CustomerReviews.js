import React from 'react';
import CustomerReviewMap from '../CustomerReviewMap/CustomerReviewMap';
import Reviews from '../CustomHook/Reviews';

const CustomerReviews = () => {
    const [reviews, setReview] = Reviews();
   
    return (
        <div className="text-center">
            
            {
                reviews.map(reviews => <CustomerReviewMap
                reviews ={reviews}
                key= {reviews.id}
                ></CustomerReviewMap>)
            }
        </div>
    );
};

export default CustomerReviews;