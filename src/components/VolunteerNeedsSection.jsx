import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
const VolunteerNeedsSection = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(response => response.json())
            .then(data => setVolunteers(data))
    }, [])
    console.log(volunteers);
    return (
        <div className="my-12 min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 className="text-4xl font-bold">Volunteer Needs</h1>
                <p className="text-md"> Dive into immediate volunteer needs where your support can create an instant impact. <br /> Explore our urgent opportunities and join hands with careCrew today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-11 my-8">
                {
                    volunteers.map(item=> <HomeCard key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default VolunteerNeedsSection;