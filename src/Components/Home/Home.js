import React from 'react';
import CustomerReviews from '../CutomerReviews/CustomerReviews';
import car from '../../Images/rolls-royce.jpg'
import './Home.css'
import { useNavigate } from 'react-router-dom';




const Home = () => {

    const navigate = useNavigate();
    const showAllReview =()=>{
        const path = "/reviews";
        navigate(path);
    }

    return (
        <div>
            <div className="grid grid-cols-2 mt-4 p-4 
            firs-div ">
                <div className="">
                    <h1 className="text-3xl mb-5">This is the first choice of people</h1>
                    <h3 className="text-2xl mb-5">Take a tour by luxurious Rolls-Royce</h3>
                    <p className="mt-2">Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom.</p>
                </div>
                <div className="w-auto">
                    <img className="" src={car} alt="" />
                </div>

            </div>
            <h3 className="text-center mt-10 text-5xl">CUSTOMER REVIEWS</h3>
            {
                <CustomerReviews></CustomerReviews>
            }
           <div className="text-center mt-5">
           <button className="bg-blue-300 p-2 border-2 border-r-2 mb-5" onClick={showAllReview}><p>See All Reviews</p></button>
           </div>
        </div>

    );
};

export default Home;