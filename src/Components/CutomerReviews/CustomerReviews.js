import React from 'react';
import CustomerReviewMap from '../CustomerReviewMap/CustomerReviewMap';
import Reviews from '../CustomHook/Reviews';

const CustomerReviews = () => {
    const [reviews, setReview] = Reviews();
    const data = reviews.slice(0,3);
    return (
        <div className="text-center">
        
            {
                data.map(reviews => <CustomerReviewMap
                reviews ={reviews}
                key= {reviews.id}
                ></CustomerReviewMap>)
            }
        </div>
    );
};

export default CustomerReviews;