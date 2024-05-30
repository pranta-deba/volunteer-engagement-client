import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-4">
             <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 data-aos="fade-up" className="flex items-center gap-1 text-3xl font-bold uppercase"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>Volunteer Reviews</h1>
            </div>
            <Marquee className="p-4">
                {
                    reviews.map(item => (
                        <div key={item._id} className="mx-4">
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 shadow-2xl">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={item?.review_by_photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{item?.review_by_name}</h4>
                                            <span className="text-xs dark:text-gray-600">{item?.date ? new Date(item?.date).toLocaleDateString() : new Date().toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                    <p className="h-[130px] overflow-y-auto hide-scroll">"{item?.reviews}" for <span className="text-[#00df9a] text-xs">- {item?.review_for_name}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default Reviews;