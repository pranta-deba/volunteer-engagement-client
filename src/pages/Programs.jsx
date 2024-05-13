import { MdDone } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { PiHandCoinsBold } from "react-icons/pi";
import { GiBrainstorm } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Programs = () => {
    return (
        <div className="min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[95%] mx-auto my-8 md:my-2">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                <div className="flex-1 space-y-4" >
                    <h1 className="flex items-center gap-1"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>VISION & MISSION</h1>
                    <h1 className="text-5xl font-bold">Our Mission To Make A <br /> Difference.</h1>
                    <p>Our mission is simple yet powerful: to make a difference. We are driven by the belief that even the smallest acts of kindness and compassion can create profound impacts on individuals, communities, and the world.</p>
                    <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl bg-[#00df9aA3] text-black">
                        <div className="flex-1 p-6 bg-[#00df9a] rounded-2xl">
                            <h4 className="text-xl font-semibold mb-4">Community Engagement</h4>
                            <p>We foster a sense of belonging and connectedness by engaging with communities, listening to their needs, and working together to address challenges.</p>
                        </div>
                        <div className="flex-1 space-y-3 p-4">
                            <h4 className="flex items-center gap-1 text-md font-semibold"><MdDone size={25} /> Make Positive Impact</h4>
                            <h4 className="flex items-center gap-1 text-md font-semibold"><MdDone size={25} /> Empower Communities</h4>
                            <h4 className="flex items-center gap-1 text-md font-semibold"><MdDone size={25} /> Helping Others</h4>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="https://i.ibb.co/mCx8jhx/Image-of-a-smiling-architect-person-holding-the-ch-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="my-12">
                <div className="text-center flex flex-col justify-center items-center">
                    <h1 className="flex items-center gap-1"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>PROGRAMS & INITIATIVES</h1>
                    <h1 className="text-5xl font-bold">Explore Our Diverse Range Of <br /> Programs And Initiatives.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-white my-12'>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/SrPhS51/celebration-of-mental-health-awareness-in-Lesotho-1.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><LiaCertificateSolid size={70} /></p>
                        <p className='text-2xl font-bold'>Youth Mentorship Program</p>
                        <p className='px-4'>Empowering the leaders of tomorrow, our Youth Mentorship Program provides guidance, support, and encouragement to young individuals as they navigate through life challenges and opportunities. Through meaningful connections and mentorship relationships, we inspire and equip the next generation to reach their full potential.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/qW1h8jm/Illustrate-a-playful-and-humorous-image-of-a-group.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><AiTwotoneSafetyCertificate size={70} /></p>
                        <p className='text-2xl font-bold'>Senior Companion Program</p>
                        <p className='px-4'>Combatting loneliness and fostering companionship, our Senior Companion Program pairs compassionate volunteers with seniors in need of social connection and support. Through regular visits, activities, and conversations, we create meaningful relationships that enrich the lives of both volunteers and seniors, promoting well-being and happiness.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/cQ67044/A-photo-of-a-group-of-people-giving-food-to-a-fami.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><MdFastfood size={70} /></p>
                        <p className='text-2xl font-bold'>Food Distribution Initiative</p>
                        <p className='px-4'>Addressing food insecurity and hunger within our communities, our Food Distribution Initiative strives to ensure that no individual goes hungry. Through partnerships with local organizations and volunteers, we distribute nutritious food to those in need, providing sustenance and support to individuals and families facing food insecurity.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/Th5GHvN/A-realistic-photo-of-an-opened-book-from-which-eme.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><PiHandCoinsBold size={70} /></p>
                        <p className='text-2xl font-bold'>Environmental Conservation</p>
                        <p className='px-4'>Protecting our planet for future generations, our Environmental Conservation efforts focus on preserving and restoring natural ecosystems, reducing waste, and promoting sustainable practices. Through community engagement, education, and advocacy, we work towards a cleaner, greener, and more sustainable world for all.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/vkwNPkV/A-group-of-slightly-happy-School-staff-of-multicul-1.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><GiBrainstorm size={70} /></p>
                        <p className='text-2xl font-bold'>Literacy Tutoring Program</p>
                        <p className='px-4'>Empowering individuals through the gift of literacy, our Literacy Tutoring Program offers personalized tutoring and support to individuals of all ages striving to improve their reading and writing skills. By fostering a love for learning and literacy, we open doors to opportunities and empower individuals to achieve their goals.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/Sf2CPFB/Envision-a-well-organized-construction-site-where.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer px-2'>
                        <p><MdOutlineMapsHomeWork size={70} /></p>
                        <p className='text-2xl font-bold'>Home Repair Assistance</p>
                        <p className='px-4'>Ensuring safe and comfortable living conditions for all, our Home Repair Assistance program provides essential repairs and maintenance services to homeowners in need. Through the dedication of volunteers and skilled professionals, we enhance the quality of life and promote housing stability for individuals and families facing financial challenges.</p>
                        <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                    </div>
                </div>
            </div>
            <div className="my-12">
                <div className="text-center flex flex-col justify-center items-center">
                    <h1 className="flex items-center gap-1"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>PAST EVENTS HIGHLIGHTS</h1>
                    <h1 className="text-5xl font-bold">The Memorable Moments From <br /> Our Past Events.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-6">
                    <div style={{ backgroundImage: "url('https://i.ibb.co/9Tm2fCW/Children-s-celebration-on-Iraqi-National-Day.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col py-12 rounded-3xl text-center cursor-pointer px-2 overflow-hidden h-[400px] group relative'>
                        <p className="animate-bounce bg-[#00df9a] p-2 rounded-full"><FaArrowDown size={30} /></p>
                        <div className="absolute bottom-0 -mb-36 md:-mb-28 group-hover:mb-0 bg-white text-black w-[80%] mx-auto p-3 flex flex-col items-center gap-3 transition-all rounded-b rounded-2xl">
                            <p className="w-[60px] h-[2px] bg-[#00df9a] mb-8"></p>
                            <h1 className="text-2xl font-semibold">Charity Events</h1>
                            <p>Where we come together as a community to make a difference and support causes that matter.s</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: "url('https://i.ibb.co/ZhbHvD4/A-photo-of-a-person-giving-a-donation-to-a-charity.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col py-12 rounded-3xl text-center cursor-pointer px-2 overflow-hidden h-[400px] group relative'>
                        <p className="animate-bounce bg-[#00df9a] p-2 rounded-full"><FaArrowDown size={30} /></p>
                        <div className="absolute bottom-0 -mb-36 md:-mb-28 group-hover:mb-0 bg-white text-black w-[80%] mx-auto p-3 flex flex-col items-center gap-3 transition-all rounded-b rounded-2xl">
                            <p className="w-[60px] h-[2px] bg-[#00df9a] mb-8"></p>
                            <h1 className="text-2xl font-semibold">Charity Events</h1>
                            <p>Where we come together as a community to make a difference and support causes that matter.s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;