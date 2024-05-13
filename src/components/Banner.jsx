import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCalendarHeart } from "react-icons/lu";
import { FaPeopleCarry } from "react-icons/fa";


const Banner = () => {
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className=''>
                        <div className='relative bg-cover bg-no-repeat bg-center h-[600px] py-32 text-white px-10 md:px-32'>
                            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
                            <div className="absolute inset-0 z-10">
                                <img src="https://i.ibb.co/JcBrTR2/close-up-of-only-5-employees-hands-holding-each-ot-1.jpg" alt="Background Image" className='w-full h-full object-cover' />
                            </div>
                            <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent to-black"></div>
                            <div className='space-y-4'>
                                <h1 className="subtitle uppercase relative z-30" data-swiper-parallax="-200">
                                    Join careCrew Today!
                                </h1>
                                <h1 className="subtitle text-4xl md:text-6xl uppercase font-bold relative z-30" data-swiper-parallax="-200">
                                    Empower Change with <br /> <span className='text-[#00df9a]'>careCrew!</span>
                                </h1>
                                <div className="text relative z-30 uppercase space-y-4" data-swiper-parallax="-100">
                                    <p className='text-stone-200'>
                                        At careCrew, every volunteer is valued. Join us to create positive change and build <br /> stronger, more resilient communities together.
                                    </p>
                                    <Link to={'/volunteers'} className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className='relative bg-cover bg-no-repeat bg-center h-[600px] py-32 text-white px-32'>
                            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
                            <div className="absolute inset-0 z-10">
                                <img src="https://i.ibb.co/gzrhsns/close-up-of-only-5-employees-hands-holding-each-ot-3.jpg" alt="Background Image" className='w-full h-full object-cover' />
                            </div>
                            <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent to-black"></div>
                            <div className='space-y-4'>
                                <h1 className="subtitle uppercase relative z-30" data-swiper-parallax="-200">
                                    Join careCrew Today!
                                </h1>
                                <h1 className="subtitle text-6xl uppercase font-bold relative z-30" data-swiper-parallax="-200">
                                    Empower Change with <br /> <span className='text-[#00df9a]'>careCrew!</span>
                                </h1>
                                <div className="text relative z-30 uppercase space-y-4" data-swiper-parallax="-100">
                                    <p className='text-stone-200'>
                                        At careCrew, every volunteer is valued. Join us to create positive change and build <br /> stronger, more resilient communities together.
                                    </p>
                                    <Link to={'/volunteers'} className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <div className='relative bg-cover bg-no-repeat bg-center h-[600px] py-32 text-white px-32'>
                            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
                            <div className="absolute inset-0 z-10">
                                <img src="https://i.ibb.co/JqfJWCz/close-up-of-only-5-employees-hands-holding-each-ot-2.jpg" alt="Background Image" className='w-full h-full object-cover' />
                            </div>
                            <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent to-black"></div>
                            <div className='space-y-4'>
                                <h1 className="subtitle uppercase relative z-30" data-swiper-parallax="-200">
                                    Join careCrew Today!
                                </h1>
                                <h1 className="subtitle text-6xl uppercase font-bold relative z-30" data-swiper-parallax="-200">
                                    Empower Change with <br /> <span className='text-[#00df9a]'>careCrew!</span>
                                </h1>
                                <div className="text relative z-30 uppercase space-y-4" data-swiper-parallax="-100">
                                    <p className='text-stone-200'>
                                        At careCrew, every volunteer is valued. Join us to create positive change and build <br /> stronger, more resilient communities together.
                                    </p>
                                    <Link to={'/volunteers'} className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='mt-12 lg:-mt-28 z-50 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-52 text-white'>
                <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/bNGs8r7/praying-hands-together-in-turquoise-background-On.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer border-4 border-[#00df9a]'>
                    <p><TfiMenuAlt size={40} /></p>
                    <p className='text-2xl font-bold'>Diverse Volunteer</p>
                    <p className='px-4'>We believe in the strength of diversity and the power it brings to our volunteer community. </p>
                    <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                </div>
                <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/MMcQDFr/close-up-of-only-5-employees-hands-holding-each-ot-4.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer border-4 border-[#00df9a]'>
                    <p><LuCalendarHeart size={40} /></p>
                    <p className='text-2xl font-bold'>Flexible Scheduling Options</p>
                    <p className='px-4'>We understand that life is busy, and volunteering should fit seamlessly into your schedule.</p>
                    <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                </div>
                <div style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://i.ibb.co/QYCn617/close-up-of-5-employees-hands-holding-each-other.jpg')" }} className='bg-cover bg-no-repeat text-white flex justify-center items-center gap-4 flex-col bg-red-400 py-12 rounded-3xl text-center hover:scale-105 transition-all cursor-pointer border-4 border-[#00df9a]'>
                    <p><FaPeopleCarry size={40} /></p>
                    <p className='text-2xl font-bold'>Impactful Social Initiatives</p>
                    <p className='px-4'>we're committed to driving positive change through impactful social initiatives that address pressing challenges and create lasting solutions.</p>
                    <button className='bg-[#00df9a] btn rounded-full border-none outline-none text-black'>Learn more <IoIosArrowRoundForward size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;