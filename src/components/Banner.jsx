
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';


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
                                    <button className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</button>
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
                                    <button className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</button>
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
                                    <button className='btn  bg-transparent border-2 border-[#00df9a] text-[#00df9a] outline-none px-8 text-lg hover:bg-[#00df9a] hover:text-black'>Volunteer Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;