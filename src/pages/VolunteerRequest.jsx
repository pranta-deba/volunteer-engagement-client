import { useEffect, useState } from "react";
import useAllProvider from "../hooks/useAllProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.min.css"
import axios from "axios";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import NotFound from "../components/NotFound";
import { Helmet } from "react-helmet-async";

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
            <div className="min-h-[calc(100vh-435.6px)] flex justify-center items-center my-12">
                <RotatingLines
                    visible={true}
                    width="30"
                    color="#00df9a"
                    strokeWidth="5"
                    animationDuration="0.95"
                    ariaLabel="rotating-lines-loading"
                />
                <Helmet>
                    <title>CareCrew ~ Your Request</title>
                </Helmet>
            </div>
        )
    }
    if (!myRequest.length) {
        return (
            <div>
                <NotFound />
            </div>
        )
    }

    return (
        <div className="min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto my-8">
            <Helmet>
                <title>CareCrew ~ Your Request</title>
            </Helmet>
            <div className="text-center flex flex-col justify-center items-center my-8">
                <h1 className="flex items-center gap-1 uppercase"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>Manage Your Requested</h1>
                <h1 className="text-5xl font-bold">Request Manager</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <div className="flex-1">
                    <h1 className="flex items-center gap-1 uppercase px-8"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>Your Requested : {myRequest.length}</h1>
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
                                                    <img src={item?.organizer?.photo} className="w-12 h-12 rounded-full object-cover" />
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