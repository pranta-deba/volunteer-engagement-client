import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(response => response.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div className="my-12 min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center my-8">
                    {
                        volunteers.map(item => <HomeCard key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Volunteers;