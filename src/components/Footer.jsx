import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { FaHandsPraying } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sections = [
    {
        title: "Quick Links",
        items: [
            { "title": "Home", "link": "/" },
            { "title": "Need Volunteer", "link": "/volunteers" },
            { "title": "Program", "link": "/program" },
            { "title": "Blogs", "link": "/blogs" }
        ]
    },
    {
        "title": "Support",
        "items": [
            { "title": "Pricing", "link": "/" },
            { "title": "Documentation", "link": "/" },
            { "title": "Guides", "link": "/" },
        ]
    },
    {
        "title": "Legal",
        "items": [
            { "title": "Claims", "link": "/" },
            { "title": "Privacy", "link": "/" },
            { "title": "Terms", "link": "/" },
            { "title": "Policies", "link": "/" },
            { "title": "Conditions", "link": "/" }
        ]
    },
    {
        "title": "Urgent Charity",
        "items": [
            { "title": "Old People", "link": "/" },
            { "title": "War Donation", "link": "/" },
            { "title": "Kids Donation", "link": "/" },
            { "title": "Policies", "link": "/policies" },
            { "title": "Non Profit School", "link": "/" }
        ]
    }
];
const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
];

const Footer = () => {
    return (
        <div className="w-full bg-[#00df9a40] py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-10">
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold"><Link to={"/"} className='text-3xl font-bold text-[#00df9a] flex items-center gap-1'><FaHandsPraying />CareCrew</Link></p>
                    <p className="py-4">
                        Join CareCrew in our mission to make a difference. Together, lets build stronger communities through volunteerism and compassion. Connect with us today and become part of the CareCrew family.
                    </p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }} className="flex flex-col sm:flex-row">
                        <input
                            className="w-full p-2 mr-4 rounded-md mb-4"
                            type="email"
                            name="email"
                            placeholder="Enter email.."
                            required
                        />
                        <button type="submit" className="p-2 mb-4 bg-[#00df9a] rounded-md text-black">Subscribe</button>
                    </form>
                </div>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className="py-1 hover:underline cursor-pointer">
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">{new Date().getFullYear()} CareCrew. All rights reserved</p>
                <div className="flex justify-end gap-7 sm:w-[300px] pt-4 text-2xl">
                    {items.map((x, index) => {
                        return <x.icon key={index} className="cursor-pointer" />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;