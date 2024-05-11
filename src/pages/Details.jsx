import { useLoaderData } from "react-router-dom";
import { FaLocationDot, FaUserTie } from "react-icons/fa6";
import { MdAttachEmail, MdDateRange } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import useAllProvider from "../hooks/useAllProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";


const Details = () => {
    const singleVolunteer = useLoaderData();
    const { user } = useAllProvider();
    const axiosSecure = useAxiosSecure();
    const { _id, thumbnail, postTitle, description, location, category, deadline: lastDate, volunteersNeeded, organizer } = singleVolunteer || {};
    const [startDate, setStartDate] = useState(new Date(lastDate));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (organizer?.email === user?.email) {
            toast.error('you are organizer.!', {
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
        const form = e.target;
        const suggestion = form.suggestion.value.trim();

        if (!suggestion) {
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
        const post = { thumbnail, postTitle, description, location, volunteersNeeded: volunteersNeeded - 1, lastDate, category, postId: _id, organizer: { name: organizer?.name, email: organizer?.email, photo: organizer?.photo || null }, volunteer: { name: user?.displayName, email: user?.email, photo: user?.photoURL }, status: 'Requested' };
        try {
            const { data } = await axiosSecure.post('/requests', post);
            if (data.insertedId) {
                toast.success("Request Successfully.", {
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
                document.getElementById('my_modal_6').close();
            } else if (data.error) {
                toast.error(data.error, {
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
    };
    return (
        <div className="min-h-[calc(100vh-435.6px)] max-w-[1600px] w-[100%] mx-auto">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row">

                    <div className="flex-1 flex items-center justify-center relative max-h-[600px] overflow-hidden rounded-lg">
                        <img src={thumbnail} alt="" className="w-full h-full object-cover rounded-md" />
                        <p className="absolute bg-[#00df9a] p-2 rounded-md text-lg font-bold top-0 left-0">{volunteersNeeded} people needed</p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-7 p-6 text-center rounded-sm lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold leading-none">{postTitle}
                        </h1>
                        <p className="text-md uppercase">#{category}
                        </p>
                        <p className="text-md ">{description}
                        </p>
                        <p className="text-md flex items-center gap-2"><MdDateRange size={20} className="text-[#00df9a]" /> {lastDate}
                        </p>
                        <p className="text-md flex items-center gap-2"><FaLocationDot size={20} className="text-[#00df9a]" />{location}
                        </p>
                        <div className="flex flex-col mt-10 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a onClick={() => document.getElementById('my_modal_6').showModal()} className="px-8 bg-transparent text-lg font-semibold rounded border-2 border-[#00df9a] hover:bg-[#00df9a] hover:text-black cursor-pointer btn"><VscGitStashApply /> Be a Volunteer</a>
                            <a onClick={() => document.getElementById('my_modal_5').showModal()} className="px-8 text-lg font-semibold rounded dark:border-gray-800 flex items-center gap-1 border-2 border-[#00df9a] hover:border-[#00df9a] text-black cursor-pointer btn bg-[#00df9a] hover:bg-[#00df9a] hover:text-black"><LiaPeopleCarrySolid /> Organizer</a>
                        </div>
                    </div>

                </div>
            </section>
            <div>
                <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box hide-scroll">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h1 className="text-xl underline font-bold mb-4">Request From</h1>
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                <div className="col-span-1">
                                    <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail (URL)</label>
                                    <input defaultValue={thumbnail} disabled type="text" id="thumbnail" name="thumbnail" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">Post Title</label>
                                    <input defaultValue={postTitle} disabled type="text" id="postTitle" name="postTitle" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea defaultValue={description} disabled id="description" name="description" className="mt-1 p-2 w-full border border-gray-300 rounded-md hide-scroll"></textarea>
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                    <select defaultValue={category} disabled id="category" name="category" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Social Service">Social Service</option>
                                        <option value="Animal Welfare">Animal Welfare</option>
                                    </select>
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                    <input defaultValue={location} disabled type="text" id="location" name="location" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="volunteersNeeded" className="block text-sm font-medium text-gray-700">No. of Volunteers Needed</label>
                                    <input defaultValue={volunteersNeeded} disabled type="number" id="volunteersNeeded" name="volunteersNeeded" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                                    <DatePicker className="mt-1 p-2 border-none outline-none w-full border-gray-300 rounded-md" disabled selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="organizerName" className="block text-sm font-medium text-gray-700">Organizer Name</label>
                                    <input disabled defaultValue={organizer?.name} type="text" id="organizerName" name="organizerName" readOnly className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="organizerEmail" className="block text-sm font-medium text-gray-700">Organizer Email</label>
                                    <input disabled defaultValue={organizer?.email} type="email" id="organizerEmail" name="organizerEmail" readOnly className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="volunteerName" className="block text-sm font-medium text-gray-700">Volunteer name</label>
                                    <input disabled defaultValue={user?.displayName} type="text" id="volunteerName" name="volunteerName" readOnly className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700">Volunteer Email</label>
                                    <input disabled defaultValue={user?.email} type="email" id="volunteerEmail" name="volunteerEmail" readOnly className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">Suggestion</label>
                                    <textarea id="suggestion" name="suggestion" required className="mt-1 p-2 w-full border border-gray-300 rounded-md hide-scroll"></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="bg-[#00df9a] text-white px-4 py-2 rounded-md hover:bg-[#00df9a]">Request</button>
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
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="flex flex-col justify-center items-center gap-2">
                            {organizer?.photo ? <img src={organizer?.photo} className="w-20 h-20 object-cover border-4 border-[#00df9a] rounded-full" /> :
                                <p className="border-4 border-[#00df9a] p-2 rounded-full"><FaUserTie size={60} /></p>}
                            <h1 className="text-xl font-bold">{organizer?.name}</h1>
                            <h1 className="flex items-center justify-center gap-1"><MdAttachEmail /> {organizer?.email}</h1>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className=""><IoClose size={30} className="text-[#00df9a]" /></button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Details;