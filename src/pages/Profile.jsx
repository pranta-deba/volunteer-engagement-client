import useAllProvider from "../hooks/useAllProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Profile = () => {
    const { user } = useAllProvider();
    const axiosSecure = useAxiosSecure();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        loadUserData();
    }, [user])

    const loadUserData = async () => {
        const { data } = await axiosSecure.get(`/users?email=${user.email}`);
        setUserInfo(data);
    }
    const handleUpdateProfile = async e => {
        e.preventDefault();
        const { data } = await axiosSecure.put(`/users`, {
            displayName: user?.displayName,
            email: user?.email,
            birthday: e.target.birthday.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
        });
        if (data.modifiedCount > 0 || data.insertedId) {
            toast.success("Profile Updated Successfully.", {
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
            loadUserData();
            e.target.reset();
        }
    }
    return (
        <div className="min-h-screen max-w-[1600px] w-[95%] lg:w-[80%] mx-auto my-8 md:mb-20">
            <div className="text-center flex flex-col justify-center items-center mb-12">
                <h1 className="flex items-center gap-1 uppercase"><p className="w-[60px] h-[2px] bg-[#00df9a]"></p>Manage Your Profile</h1>
                <h1 className="text-5xl font-bold">Profile</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col items-center">
                    <img src={user?.photoURL} className="w-[200px] h-[200px] rounded-full object-cover border-4 border-[#00df9a]" />
                    <p className="text-2xl font-bold">{user?.displayName}</p>
                    <p className="text-xl font-semibold">{user?.email}</p>
                </div>
                <div className="flex-1 border rounded-lg p-4">
                    <Tabs>
                        <TabList>
                            <Tab>Info</Tab>
                            <Tab>Edit Profile</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="space-y-4">
                                <hr />
                                <div className="flex items-center gap-2 mt-2">
                                    <h2 className="text-xl font-medium">Date of birth : </h2>
                                    <p> {userInfo?.birthday}</p>
                                </div>
                                <hr />
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-medium">Address : </h2>
                                    <p> {userInfo?.address}</p>
                                </div>
                                <hr />
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-medium">Phone : </h2>
                                    <p> {userInfo?.phone}</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                <div className="col-span-1">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" id="address" name="address" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Date of birth</label>
                                    <input type="date" name="birthday" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="text" id="phone" name="phone" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="bg-[#00df9a] text-white px-4 py-2 rounded-md hover:bg-[#00df9a]">Update</button>
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Profile;