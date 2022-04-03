import React from 'react';
import Reviews from '../CustomHook/Reviews';

const CustomerReviews = () => {
    const [reviews, setReview] = Reviews();
    return (
        <div className="text-center">
            {
                <h1>reviews: {reviews.length}</h1>
            }
        </div>
    );
};

export default CustomerReviews;