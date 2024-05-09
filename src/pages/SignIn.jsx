import { useState } from "react";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [passToggle, setPassToggle] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const handleLogin = e => {
        e.preventDefault()
        if (emailErr || passErr || e.target.email.value === "" || e.target.password.value === "") {
            return
        }
        console.log(7);
    }

    return (
        <div className='my-12 flex justify-center items-center'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to={'/sign_up'} className="focus:underline hover:underline text-[#00df9a] font-bold"> Sign up here</Link>
                </p>
                <div className="flex items-center w-full my-4">

                </div>
                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">Email address : {emailErr && <span className="text-[10px] text-red-500">Invalid email</span>}</label>
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
                                <label htmlFor="password" className="text-sm">Password  : {passErr && <span className="text-[10px] text-red-500">must uppercase,lowercase,number</span>}</label>
                                <a className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
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
                    </div>
                    <div className="text-center">
                        <button className="btn relative px-10 py-3 font-medium text-black transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                            <span className="absolute bottom-0 left-0 h-full ">
                                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="absolute top-0 right-0 w-12 h-full">
                                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                            </span>
                            <span className="relative">Sign In</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;