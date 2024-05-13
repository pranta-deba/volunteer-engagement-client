import { BiSolidDonateBlood } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GiSelfLove } from "react-icons/gi";
import { FaHandFist } from "react-icons/fa6";
const HappyClient = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/bNGs8r7/praying-hands-together-in-turquoise-background-On.jpg')" }} className="my-12 max-w-[1600px] w-[100%] mx-auto py-20 bg-fixed bg-cover bg-no-repeat shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col items-center gap-3 text-white">
                    <p className="flex items-center gap-3 text-5xl font-semibold text-[#E96326]"><BiSolidDonateBlood />12532</p>
                    <p>DONATIONS MADE</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-white">
                    <p className="flex items-center gap-3 text-5xl font-semibold text-red-600"><HiOutlineEmojiHappy />12532</p>
                    <p>HAPPY CHILDREN</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-white">
                    <p className="flex items-center gap-3 text-5xl font-semibold text-yellow-500"><GiSelfLove />12532</p>
                    <p>VOLUNTEERING HELPERS</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-white">
                    <p className="flex items-center gap-3 text-5xl font-semibold text-green-500"><FaHandFist />12532</p>
                    <p>EDUCATED CHILDREN</p>
                </div>
            </div>
        </div>

    );
};

export default HappyClient;