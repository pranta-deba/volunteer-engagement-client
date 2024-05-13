import toast from "react-hot-toast";
import useAllProvider from "../hooks/useAllProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddVolunteer = () => {
    const { user } = useAllProvider();
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value.trim();
        const postTitle = form.postTitle.value.trim();
        const description = form.description.value.trim();
        const location = form.location.value.trim();
        const volunteersNeeded = form.volunteersNeeded.value.trim();
        const deadline = startDate;
        const organizerName = form.organizerName.value.trim();
        const organizerEmail = form.organizerEmail.value.trim();
        const category = form.category.value.trim();

        if (!thumbnail || !postTitle || !description || !location || !volunteersNeeded || !deadline || !organizerName || !organizerEmail || !category) {
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
        const post = { thumbnail, postTitle, description, location, volunteersNeeded: parseInt(volunteersNeeded), deadline, category, organizer: { name: organizerName, email: organizerEmail, photo: user?.photoURL } };
        try {
            const { data } = await axiosSecure.post('/volunteers', post);
            if (data.insertedId) {
                toast.success("Post Added Successfully.", {
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
                e.target.reset();
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="px-9 mb-20">
            <div className="text-center my-8">
                <h1 className="text-3xl font-semibold mb-2">Add Volunteer Post</h1>
                <p className="text-sm">Share volunteer opportunities and connect with potential volunteers</p>
            </div>
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    <div className="col-span-1">
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail (URL)</label>
                        <input type="text" id="thumbnail" name="thumbnail" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">Post Title</label>
                        <input type="text" id="postTitle" name="postTitle" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select id="category" name="category" required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                            <option value="">Select Category</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Social Service">Social Service</option>
                            <option value="Animal Welfare">Animal Welfare</option>
                        </select>
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input type="text" id="location" name="location" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="volunteersNeeded" className="block text-sm font-medium text-gray-700">No. of Volunteers Needed</label>
                        <input type="number" id="volunteersNeeded" name="volunteersNeeded" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                        <DatePicker className="mt-1 p-2 border-none outline-none w-full border-gray-300 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="organizerName" className="block text-sm font-medium text-gray-700">Organizer Name</label>
                        <input disabled defaultValue={user?.displayName} type="text" id="organizerName" name="organizerName" readOnly required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-1">
                        <label htmlFor="organizerEmail" className="block text-sm font-medium text-gray-700">Organizer Email</label>
                        <input disabled defaultValue={user?.email} type="email" id="organizerEmail" name="organizerEmail" readOnly required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <button type="submit" className="bg-[#00df9a] text-white px-4 py-2 rounded-md hover:bg-[#00df9a] w-full">Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteer;