import { useEffect, useState } from "react";
import useAllProvider from "../hooks/useAllProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.min.css"
import axios from "axios";
import toast from "react-hot-toast";
import notFound from "../assets/notFound.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { RotatingLines } from "react-loader-spinner";

const VolunteerRequest = () => {
    const { user } = useAllProvider();
    const axiosSecure = useAxiosSecure();
    const [myRequest, setMyRequest] = useState([]);
    const [myRequestLoader, setMyRequestLoader] = useState(true);

    useEffect(() => {
        loadMyRequestPost();
    }, [user])
    const loadMyRequestPost = async () => {
        try {
            const { data } = await axiosSecure(`/my_requests?email=${user?.email}`);
            const sort = data.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
            setMyRequest(sort);
            setMyRequestLoader(false);
        } catch (error) {
            console.log(error.message);
            setMyRequestLoader(false);
        }
    }
    const handleDeleteRequest = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: item.postTitle,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00df9a",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/requests/${item._id}?id=${item.postId}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            setMyRequest(myRequest.filter(post => post._id !== item._id));
                            toast.success("Deleted Successfully.", {
                                style: {
                                    border: '1px solid #00df9a',
                                    padding: '10px',
                                    color: '#00df9a',
                                },
                                iconTheme: {
                                    primary: '#00df9a',
                                    secondary: 'white',
                                },
                            });
                        }
                    })
            }
        });
    }
    if (myRequestLoader) {
        return (
            <div className="flex justify-center my-12">
                <RotatingLines
                    visible={true}
                    width="30"
                    color="#00df9a"
                    strokeWidth="5"
                    animationDuration="0.95"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        )
    }
    if (!myRequest.length) {
        return (
            <div className="w-full flex flex-col justify-center items-center my-9">
                <h1 className="text-3xl my-3 font-semibold text-[#00df9a]">Request Post Not Found!</h1>
                <div className="max-w-[500px] mx-auto text-center">
                    <Lottie animationData={notFound} loop={true} />
                    <Link to={-1} className="btn relative px-10 py-3 font-medium text-white transition duration-300 bg-[#33A093] rounded-md hover:bg-[#33A093] ease mt-4">
                        <span className="absolute bottom-0 left-0 h-full ">
                            <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full">
                            <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                        </span>
                        <span className="relative flex justify-center items-center"><IoChevronBackSharp size={20} />Back</span>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto">
            <div className="text-center my-8">
                <h1 className="text-3xl font-semibold mb-2">Manage Your Requested Post</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <div className="flex-1">
                    <h1 className="text-2xl p-2 sm:p-4 font-semibold">Your Requested Post : {myRequest?.length}</h1>
                    <div className="w-full p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto rounded-xl">
                            <table className="min-w-full text-xs">
                                <thead className="bg-[#00df9a] text-black">
                                    <tr className="text-center">
                                        <th className="p-3">Owner</th>
                                        <th className="p-3">Owner Email</th>
                                        <th className="p-3">Post Title</th>
                                        <th className="p-3">Deadline</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        myRequest.map(item => (
                                            <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                <td className="p-3 flex flex-col items-center">
                                                    <img src={item?.thumbnail} className="w-12 h-12 rounded-full object-cover" />
                                                    <p>{item?.organizer?.name}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item?.organizer?.email}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item?.postTitle}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{new Date(item?.lastDate).toLocaleDateString()}</p>
                                                </td>
                                                <td className={`p-3 ${item?.status === "Requested" ? "text-red-500" : ""} ${item?.status === "Accepted" ? "text-green-500" : ""}`}>
                                                    <p>{item?.status}</p>
                                                </td>
                                                <td className="space-x-4">
                                                    <button onClick={() => handleDeleteRequest(item)} className="text-red-700"><RxCross2 size={20} /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRequest;