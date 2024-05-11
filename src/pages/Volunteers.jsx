import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdTableRows } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [layout, setLayout] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(response => response.json())
            .then(data => {
                const sort = data.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
                setVolunteers(sort);
            })
    }, [])
    const handleSearch = async (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        try {
            const { data } = await axiosSecure(`/AllVolunteer?search=${search}`);
            setVolunteers(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleLayout = (who) => {
        if (who == "grid") {
            setLayout(false);
        } else if (who == "table") {
            setLayout(true);
        }
    }
    const handleSort = (value) => {
        if (value === "newtToOld") {
            const sort = volunteers.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
            setVolunteers(sort);
        } else if (value === "oldToNew") {
            const sort = volunteers.slice().sort((a, b) => new Date(new Date(a.deadline).toLocaleDateString()) - new Date(new Date(b.deadline).toLocaleDateString()));
            setVolunteers(sort);
        }
    }
    return (
        <div className="my-8 min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[90%] md:w-[100%] mx-auto">
            <div className="flex flex-col md:flex-row md:justify-around items-center p-5 gap-3">
                <div>
                    <select onChange={(e) => handleSort(e.target.value)} className="text-[#00df9a] font-bold bg-transparent">
                        <option value="" className="text-[#00df9a]">Sort By Date</option>
                        <option value="oldToNew" className="text-black">Oldest to Newest</option>
                        <option value="newtToOld" className="text-black">Newest to Oldest</option>
                    </select>
                </div>
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
                    <div className="flex">
                        <input type="text" name="search" placeholder="Search for title or category"
                            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#00df9a] focus:outline-none focus:border-[#00df9a]" required
                        />
                        <button type="submit" className="bg-[#00df9a] text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                    </div>
                </form>
                <div className="flex items-center gap-2">
                    <p onClick={() => handleLayout("grid")} className={layout ? "cursor-pointer text-[#00df9a80]" : "cursor-pointer text-[#00df9a]"}><BsGrid3X3GapFill size={20} /></p>
                    <p onClick={() => handleLayout("table")} className={layout ? "cursor-pointer text-[#00df9a]" : "cursor-pointer text-[#00df9a80]"}><MdTableRows size={25} /></p>
                </div>
            </div>
            {!layout && <div className="flex justify-center">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-4 w-full my-8 md:mx-12`}>
                    {
                        volunteers.map(item => <HomeCard key={item._id} item={item} />)
                    }
                </div>
            </div>}

            {layout && <div className="flex justify-center">
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="bg-[#00df9a]">
                                <tr className="text-left">
                                    <th className="p-3">Thumbnail</th>
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Deadline</th>
                                    <th className="p-3">Volunteers Needed</th>
                                    <th className="p-3">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    volunteers.map(item => (
                                        <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <img src={item?.thumbnail} className="w-32 h-16 rounded-lg object-cover" />
                                            </td>
                                            <td className="p-3">
                                                <p>{item?.postTitle}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item?.category}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{new Date(item?.deadline).toLocaleDateString()}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item?.volunteersNeeded}</p>
                                            </td>
                                            <td className="p-3 underline">
                                                <Link to={`/details/${item?._id}`}>See More</Link>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}

        </div>
    );
};

export default Volunteers;