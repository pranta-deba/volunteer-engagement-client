import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAllProvider from "../hooks/useAllProvider";
import { RotatingLines } from 'react-loader-spinner'
import useAxiosSecure from "../hooks/useAxiosSecure";

const SignUp = () => {
    const axiosSecure = useAxiosSecure();
    const [passToggle, setPassToggle] = useState(false);
    const [passToggle2, setPassToggle2] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const { emailPasswordRegister, updateUser, updateTrigger, setUpdateTrigger, googleSignIn } = useAllProvider();
    const [signUpLoader, setSignUpLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleSignUp = async e => {
        setSignUpLoader(true)
        e.preventDefault();
        if (emailErr ||
            passErr ||
            e.target.email.value === "" ||
            e.target.password.value === "" ||
            e.target.name.value === "" ||
            e.target.photoURL.value === "") {
            toast.error('Input Field Required.', {
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
            setSignUpLoader(false)
            return;
        } else if (e.target.password.value !== e.target.cPassword.value) {
            toast.error('Password Not Match.', {
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
            setSignUpLoader(false)
            return;
        }
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            photoURL: e.target.photoURL.value,
        }
        try {
            const { user: registerUser } = await emailPasswordRegister(userData.email, userData.password);
            if (registerUser) {
                updateUser(userData.name, userData.photoURL)
                    .then(() => {
                        setUpdateTrigger(!updateTrigger);
                        e.target.reset();
                        toast.success("Account Create Successfully.", {
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
                        axiosSecure.post('/users',{displayName: registerUser?.displayName,email:registerUser?.email,createdAt:registerUser?.metadata?.createdAt}).then(()=> {
                            navigate(from);
                            setSignUpLoader(false)
                        })
                        
                    })
            }
        } catch (error) {
            toast.error(error.message.split('/')[1].split(')')[0], {
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
            setSignUpLoader(false)
        }
    }

    const handleGoogleLogin = async () => {
        setSignUpLoader(true);
        try {
            const { user: googleUser } = await googleSignIn();
            if (googleUser) {
                setSignUpLoader(false);
                toast.success("Authentication Successfully.", {
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
                navigate(from);
            }

        } catch (error) {
            toast.error(error.message.split('/')[1].split(')')[0], {
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
            setSignUpLoader(false)
        }
    }

    return (
        <div className="my-12">
            {signUpLoader && <div className="flex justify-center mb-3">
                <RotatingLines
                    visible={true}
                    width="30"
                    color="#00df9a"
                    strokeWidth="5"
                    animationDuration="0.95"
                    ariaLabel="rotating-lines-loading"
                />
            </div>}
            <div className='flex justify-center items-center'>
                <div className="w-full max-w-xl p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create your account</h2>
                    <p className="text-sm text-center dark:text-gray-600">Already account?
                        <Link to={'/sign_in'} className="focus:underline hover:underline text-[#00df9a] font-bold"> Sign In here</Link>
                    </p>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 text-[#00df9a] dark:text-gray-600">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>
                    <form onSubmit={handleSignUp} className="space-y-8">
                        <div className="space-y-4 grid grid-cols-2 gap-2 items-center justify-center">
                            <div className="space-y-2 md:col-span-2">
                                <label htmlFor="email" className="text-sm">Name </label>
                                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border-2 border-[#00df9a] rounded-md" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label htmlFor="email" className="text-sm">Email address {emailErr && <span className="text-[10px] text-red-500">: Invalid email</span>}</label>
                                <input onChange={(e) => {
                                    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e.target.value)) {
                                        setEmailErr(false);
                                    } else {
                                        setEmailErr(true);
                                    }
                                }} type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border-2 border-[#00df9a] rounded-md" />
                            </div>
                            <div className="space-y-2 relative">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password {passErr && <span className="text-[10px] text-red-500">: must uppercase,lowercase,number</span>}</label>
                                </div>
                                <input onChange={(e) => {

                                    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e.target.value)) {
                                        setPassErr(false);
                                    } else {
                                        setPassErr(true);
                                    }
                                }} type={passToggle ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border-2 border-[#00df9a] rounded-md " />
                                <span onClick={() => setPassToggle(!passToggle)} className="absolute bottom-[14px] right-3 text-xs cursor-pointer  px-2">{passToggle ? "Hide" : "Show"}</span>
                            </div>
                            <div className="space-y-2 relative">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Confirm Password</label>
                                </div>
                                <input type={passToggle2 ? "text" : "password"} name="cPassword" id="cPassword" placeholder="*****" className="w-full px-3 py-2 border-2 border-[#00df9a] rounded-md " />
                                <span onClick={() => setPassToggle2(!passToggle2)} className="absolute bottom-[14px] right-3 text-xs cursor-pointer  px-2">{passToggle2 ? "Hide" : "Show"}</span>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <div className="flex justify-between">
                                    <label htmlFor="photo" className="text-sm">Photo URL</label>
                                </div>
                                <input type="text" name="photoURL" id="photo" placeholder="URL" className="w-full px-3 py-2 border-2 border-[#00df9a] rounded-md " />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn relative px-10 py-3 font-medium text-black transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                                <span className="absolute bottom-0 left-0 h-full ">
                                    <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                                </span>
                                <span className="absolute top-0 right-0 w-12 h-full">
                                    <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                                </span>
                                <span className="relative">Sign Up</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;