import { useEffect, useState } from "react";
import useAllProvider from "../hooks/useAllProvider";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.min.css"
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import notFound from "../assets/notFound.json";
import { RotatingLines } from 'react-loader-spinner';

const ManageMyPost = () => {
    const { user } = useAllProvider();
    const axiosSecure = useAxiosSecure();
    const [myPosts, setMyPosts] = useState([]);
    const [myPostRequests, setMyPostRequests] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const [startDate, setStartDate] = useState('');
    const [manageMyPostLoader, setManageMyPostLoader] = useState(true);

    useEffect(() => {
        loadMyPost();
    }, [user])
    useEffect(() => {
        loadMyPostRequests();
    }, [user])

    const loadMyPost = async () => {
        setManageMyPostLoader(true);
        try {
            const { data } = await axiosSecure(`/my_post?email=${user?.email}`);
            const sort = data.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
            setMyPosts(sort);
            setManageMyPostLoader(false);
        } catch (error) {
            console.log(error.message);
            setManageMyPostLoader(false);
        }
    }

    const loadMyPostRequests = async () => {
        try {
            const { data } = await axiosSecure(`/requests?email=${user?.email}`);
            const sort = data.slice().sort((a, b) => new Date(new Date(b.deadline).toLocaleDateString()) - new Date(new Date(a.deadline).toLocaleDateString()));
            setMyPostRequests(sort);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = (item) => {
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
                axios.delete(`${import.meta.env.VITE_API_URL}/volunteers/${item._id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            setMyPosts(myPosts.filter(post => post._id !== item._id));
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value.trim();
        const postTitle = form.postTitle.value.trim();
        const description = form.description.value.trim();
        const location = form.location.value.trim();
        const volunteersNeeded = form.volunteersNeeded.value.trim();
        const deadline = startDate || updateData?.deadline;
        const category = form.category.value.trim();

        if (!thumbnail || !postTitle || !description || !location || !volunteersNeeded || !deadline || !category) {
            toast.error('Please fill in all required fields.', {
                style: {
                    border: '1px solid red',
                    padding: '10px',
                    color: 'red',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            });
            return;
        }
        const post = { thumbnail, postTitle, description, location, volunteersNeeded: parseInt(volunteersNeeded), deadline, category };
        try {
            const { data } = await axiosSecure.put(`/volunteers/${updateData._id}`, post);
            if (data.modifiedCount > 0) {
                toast.success("Updated Successfully.", {
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
                loadMyPost();
                e.target.reset();
                document.getElementById('my_modal_8').close();
            }
            if (data.modifiedCount === 0) {
                toast.error('There is no change.!', {
                    style: {
                        border: '1px solid red',
                        padding: '10px',
                        color: 'red',
                    },
                    iconTheme: {
                        primary: 'red',
                        secondary: '#FFFAEE',
                    },
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleRequest = async (id, oldStatus, newStatus) => {
        if (oldStatus === newStatus) {
            return;
        }
        try {
            const { data } = await axiosSecure.put(`/requests/${id}`, { status: newStatus });
            if (data.modifiedCount > 0) {
                toast.success("Status Updated Successfully.", {
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
                loadMyPostRequests();
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    if (manageMyPostLoader) {
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

    if (!myPosts.length && !myPostRequests.length) {
        return (
            <div className="w-full flex flex-col justify-center items-center my-9">
                <h1 className="text-3xl my-3 font-semibold text-[#00df9a]">Post Not Found!</h1>
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
                <h1 className="text-3xl font-semibold mb-2">Manage Your Post</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <div className="flex-1">
                    <h1 className="text-2xl p-2 sm:p-4 font-semibold text-center">Your Post : {myPosts?.length}</h1>
                    <div className="w-full p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto rounded-xl">
                            <table className="min-w-full text-xs">
                                <thead className="bg-[#00df9a] text-black">
                                    <tr className="text-center">
                                        <th className="p-3">Thumbnail</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Deadline</th>
                                        <th className="p-3">Volunteers Needed</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        myPosts.map(item => (
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
                                                <td className="space-x-4">
                                                    <button onClick={() => {
                                                        setUpdateData(item);
                                                        document.getElementById('my_modal_8').showModal();
                                                    }} className="text-blue-700"><FiEdit size={20} /></button>
                                                    <button onClick={() => handleDelete(item)} className="text-red-700"><RiDeleteBin3Fill size={20} /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl p-2 sm:p-4 font-semibold text-center">Post Request : {myPostRequests?.length}</h1>
                    <div className="w-full p-2 mx-auto sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto rounded-xl">
                            <table className="min-w-full text-xs">
                                <thead className="bg-[#00df9a] text-black">
                                    <tr className="text-center">
                                        <th className="p-3">Volunteer</th>
                                        <th className="p-3">Volunteer Email</th>
                                        <th className="p-3">Post Title</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        myPostRequests.map(item => (
                                            <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                <td className="p-3 flex flex-col items-center gap-1">
                                                    <img src={item?.volunteer?.photo} className="w-12 h-12 rounded-full object-cover" />
                                                    <p>{item?.volunteer?.name}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item?.volunteer?.email}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item?.postTitle}</p>
                                                </td>
                                                <td className={`p-3 ${item?.status === "Requested" ? "text-red-500" : ""} ${item?.status === "Accepted" ? "text-green-500" : ""}`}>
                                                    <p>{item?.status}</p>
                                                </td>
                                                <td className="space-x-4">
                                                    {item?.status === "Requested" ? <button
                                                        onClick={() => handleRequest(item?._id, item?.status, "Accepted")}
                                                        className="text-blue-700"><MdOutlineDone size={20} /></button> : ""}

                                                    {item?.status === "Accepted" ?
                                                        <button onClick={() => handleRequest(item?._id, item?.status, "Requested")} className="text-red-700"><RxCross2 size={20} /></button> : ""}
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

            <div>
                <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box hide-scroll">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h1 className="text-xl underline font-bold mb-4">Update Post</h1>
                            <form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                <div className="col-span-1">
                                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail (URL)</label>
                                    <input defaultValue={updateData?.thumbnail} type="text" id="thumbnail" name="thumbnail" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">Post Title</label>
                                    <input defaultValue={updateData?.postTitle} type="text" id="postTitle" name="postTitle" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea defaultValue={updateData?.description} id="description" name="description" className="mt-1 p-2 w-full border border-gray-300 rounded-md hide-scroll"></textarea>
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                    <select defaultValue={updateData?.category} id="category" name="category" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Social Service">Social Service</option>
                                        <option value="Animal Welfare">Animal Welfare</option>
                                    </select>
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                    <input defaultValue={updateData?.location} type="text" id="location" name="location" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="volunteersNeeded" className="block text-sm font-medium text-gray-700">No. of Volunteers Needed</label>
                                    <input defaultValue={updateData?.volunteersNeeded} type="number" id="volunteersNeeded" name="volunteersNeeded" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                                    <DatePicker className="mt-1 p-2 border-none outline-none w-full border-gray-300 rounded-md" selected={startDate || updateData?.deadline} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="bg-[#00df9a] text-white px-4 py-2 rounded-md hover:bg-[#00df9a]">Update</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn px-8">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ManageMyPost;