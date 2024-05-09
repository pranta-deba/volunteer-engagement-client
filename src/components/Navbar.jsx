import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Volunteer', to: '/need_volunteer' },
        { id: 3, text: 'Program', to: '/program' },
        { id: 4, text: 'About', to: '/about' },
        { id: 5, text: 'Blogs', to: '/blogs' },
    ];

    return (
        <div className='flex justify-between items-center h-20 max-w-full mx-auto px-4 shadow-lg'>
            <Link to={"/"} className='text-3xl font-bold text-[#00df9a]'>CareCrew</Link>
            <ul className='hidden md:flex items-center w-full justify-end capitalize gap-3 font-semibold'>
                {navItems.map(item => (
                    <li

                        key={item.id + 1}

                    >
                        <NavLink className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent' to={item.to}>{item.text}</NavLink>
                    </li>
                ))}
                <li className='hidden'><NavLink className="px-4 py-3 bg-[#00df9a] rounded-sm m-2 cursor-pointer duration-300 text-black border-b-2 border-transparent">Sign in</NavLink></li>
                <li> </li>
            </ul>
            <div className='flex items-center gap-2'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full border-2 border-[#00df9a]">
                            <img alt="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Profile</Link>
                        </li>
                        <li><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Add Volunteer Post</Link></li>
                        <li><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Manage Post</Link></li>
                        <li><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Volunteer Requested</Link></li>
                        <li><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Setting</Link></li>
                        <li><Link className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'>Logout</Link></li>
                    </ul>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={35} className='text-[#00df9a]' /> : <AiOutlineMenu size={35} className='text-[#00df9a]' />}
                </div>
            </div>

            <ul
                className={`flex flex-col gap-6 capitalize font-semibold px-6 
                    ${nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}
                `}
            >
                <Link to={"/"} className='w-full text-3xl font-bold text-[#00df9a] m-4'>CareCrew</Link>
                {navItems.map(item => (
                    <li
                        key={item.id + 2}>
                        <NavLink
                            to={item.to}
                            className='px-4 py-3 hover:bg-[#00df9a] rounded-md cursor-pointer duration-300 hover:text-black border-b-2 border-transparent'
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;