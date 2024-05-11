import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
    const {_id, thumbnail, postTitle, category, deadline, volunteersNeeded } = item || {};
    return (
        <div className="flex max-w-md overflow-hidden group transition-all hover:bg-[#00df9a] rounded-lg shadow-lg  dark:bg-gray-800">
            <div className="w-1/2 bg-cover" style={{
                backgroundImage: `url('${thumbnail}')`
            }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold group-hover:text-black">{postTitle}</h1>

                <p className="mt-2 text-sm text-[#00df9a] font-semibold dark:text-gray-400 group-hover:text-black uppercase">{category}</p>

                <div className="flex mt-2 item-center group-hover:text-black">
                    <p>Deadline : {deadline}</p>
                </div>

                <div className="md:flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-semibold  dark:text-gray-200 md:text-md group-hover:text-black">Need : {volunteersNeeded}</h1>
                    <Link to={`/details/${_id}`} className="px-2 py-2 text-xs font-bold text-white uppercase  duration-300 transform bg-[#00df9a] rounded dark:bg-[#00df9a] hover:bg-[#00df9a] dark:hover:bg-[#00df9a] focus:outline-none focus:bg-[#00df9a] dark:focus:bg-[#00df9a] group-hover:bg-black transition-all">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;