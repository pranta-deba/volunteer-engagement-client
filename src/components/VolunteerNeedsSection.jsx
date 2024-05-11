import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
const VolunteerNeedsSection = () => {
    const axiosSecure = useAxiosSecure();
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        getData()
      }, [])
    
      const getData = async () => {
        const { data } = await axiosSecure(`/volunteers`)
        setVolunteers(data)
      }
      
    return (
        <div className="my-12 min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 className="text-4xl font-bold">Volunteer Needs</h1>
                <p className="text-md"> Dive into immediate volunteer needs where your support can create an instant impact. <br /> Explore our urgent opportunities and join hands with careCrew today.</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center my-8">
                    {
                        volunteers.map(item => <HomeCard key={item._id} item={item} />)
                    }
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link to={"/volunteers"} className="btn bg-[#00df9a] hover:bg-[#00df9a] text-md font-medium">See All</Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsSection;