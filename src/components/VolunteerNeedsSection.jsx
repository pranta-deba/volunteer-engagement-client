import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RotatingLines } from 'react-loader-spinner'


const VolunteerNeedsSection = () => {
    const axiosSecure = useAxiosSecure();
    const [volunteers, setVolunteers] = useState([]);
    const [sectionLoader, setsSectionLoader] = useState(false);
    useEffect(() => {
        setsSectionLoader(true);
        getData()
    }, [])

    const getData = async () => {
        const { data } = await axiosSecure(`/volunteers`)
        const sort = data.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
        setVolunteers(sort);
        setsSectionLoader(false);
    }



    return (
        <div className="my-12 min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[95%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 className="flex items-center gap-1 text-3xl font-bold uppercase"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>Volunteer Needs</h1>
                <p className="text-md w-[60%] mx-auto text-center"> Dive into immediate volunteer needs where your support can create an instant impact.</p>
            </div>
            {sectionLoader && <div className="flex justify-center my-12">
                <RotatingLines
                    visible={true}
                    width="30"
                    color="#00df9a"
                    strokeWidth="5"
                    animationDuration="0.95"
                    ariaLabel="rotating-lines-loading"
                />
            </div>}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center items-center  gap-4 w-full my-8 md:mx-12">
                    {
                        volunteers.slice(0, 6).map(item => <HomeCard key={item._id} item={item} />)
                    }
                </div>
            </div>
            {!sectionLoader && <div className="flex justify-center items-center">
                <Link to={"/volunteers"} className="btn bg-[#00df9a] hover:bg-[#00df9aA6] text-md font-medium px-12 text-black">See All</Link>
            </div>}
        </div>
    );
};

export default VolunteerNeedsSection;