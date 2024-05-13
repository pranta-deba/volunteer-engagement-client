import Lottie from "lottie-react";
import notFound from "../assets/notFound.json";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <section className="w-full dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <div className="w-[200px] p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                        <Lottie animationData={notFound} loop={true} />
                    </div>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-500 dark:text-white md:text-3xl">There is no content on this page.</h1>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link to={-1} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Go back</span>
                        </Link>

                        <Link to={"/"} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#00df9a] rounded-lg shrink-0 sm:w-auto hover:bg-[#00df9a] dark:hover:bg-[#00df9a] dark:bg-[#00df9a]">
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;