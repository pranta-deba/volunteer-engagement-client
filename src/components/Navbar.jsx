import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { MdAddChart, MdLightMode, MdManageAccounts, MdManageHistory, MdOutlineLightMode } from "react-icons/md";
import { GoGitPullRequest } from "react-icons/go";
import { RiLogoutBoxLine } from "react-icons/ri";
import useAllProvider from '../hooks/useAllProvider';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const { user, themeController, setThemeController, logOut } = useAllProvider();
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Volunteer', to: '/volunteers' },
        { id: 3, text: 'Program', to: '/program' },
        { id: 4, text: 'About', to: '/about' },
        { id: 5, text: 'Blogs', to: '/blogs' },
    ];
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', themeController);
    }, [themeController])

    const handleThemeChanged = () => {
        if (themeController === "light") {
            localStorage.setItem('theme', 'dark')
            document.querySelector('html').setAttribute('data-theme', 'dark');
            setThemeController('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.querySelector('html').setAttribute('data-theme', 'light');
            setThemeController("light")
        }
    }
    return (
        <div className='flex justify-between items-center h-20 max-w-full mx-auto px-4 shadow-lg'>
            <Link to={"/"} className='text-3xl font-bold text-[#00df9a]'>CareCrew</Link>
            <ul className='hidden md:flex items-center w-full justify-end capitalize gap-3 font-semibold'>
                {navItems.map(item => (
                    <li

                        key={item.id + 1}

                    >
                        <NavLink className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 focus:bg-[#00df9a] focus:text-black' to={item.to}>{item.text}</NavLink>
                    </li>
                ))}
                {!user && <li><NavLink to={'/sign_in'} className="btn relative px-4 py-3 font-medium text-black transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                    <span className="absolute bottom-0 left-0 h-full ">
                        <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                    </span>
                    <span className="absolute top-0 right-0 w-12 h-full">
                        <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
                    </span>
                    <span className="relative">Sign In</span></NavLink></li>}
            </ul>
            {user && <div className='flex items-center gap-2 ms-2'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full border-2 border-[#00df9a]">
                            <img alt="" src={user?.photoURL} data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />
                        </div>
                    </div>
                    <ul id='dropdown-content' tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>

                            <NavLink to={'/profile'} className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a]'><MdManageAccounts />Profile</NavLink>
                        </li>
                        <li><NavLink to={'/add_volunteer'} className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a]'><MdAddChart />Add Volunteer Post</NavLink></li>
                        <li><NavLink to={'/manage_post'} className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a]'><MdManageHistory />Manage My Post</NavLink></li>
                        <li><NavLink to={'/volunteer_request'} className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a]'><GoGitPullRequest />Volunteer Requested</NavLink></li>

                        <div onClick={handleThemeChanged} className='flex items-center gap-1 px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black focus:bg-[#00df9a]'>{themeController === "dark" ? <MdOutlineLightMode /> : <MdLightMode />}{themeController === 'dark' ? "Light Mode" : "Dark Mode"}</div>

                        <li onClick={logOut}><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a]'><RiLogoutBoxLine />Logout</Link></li>
                    </ul>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={35} className='text-[#00df9a]' /> : <AiOutlineMenu size={35} className='text-[#00df9a]' />}
                </div>
            </div>}

            <ul
                className={`flex flex-col gap-6 capitalize font-semibold px-3 z-30  
                    ${nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-white dark:bg-black ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}
                `}
            >
                <Link to={"/"} className='w-full text-3xl font-bold text-[#00df9a] m-4'>CareCrew</Link>
                {navItems.map(item => (
                    <li
                        className=''
                        key={item.id + 2}>
                        <NavLink
                            to={item.to}
                            className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent focus:bg-[#00df9a] focus:text-black'
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;