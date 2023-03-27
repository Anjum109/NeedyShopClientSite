import React from 'react';
import discount from '../../../assets/BannerImage/discount.png'
import '../../../Css/Banner.css'
import Navbar from '../../Shared/Navbar/Navbar.js'
import NavbarTwo from '../../Shared/Navbar/Navbartwo';

const Banner = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    return (

        <div className=''>

            <NavbarTwo />
            <NavbarTwo />


            <Navbar />
            <div className='background-image-set grid grid-cols-2'>
                <div>
                    <h2 className='text-green-900 font-bold text-5xl flex justify-start pt-24 px-12'>Welcome To Needy Shop</h2>
                    <p className='px-12 pt-5 text-2xl font-bold text-green-700'>Your Daily Needs is here..</p>
                    <button className='hover:bg-green-400 hover:text-green-900 mx-12 my-5 bg-green-900 text-green-200 font-bold px-3 py-2 rounded-xl'>Shop Now</button>
                </div>
                <div className='flex justify-center items-center image-set'>
                    <img src={discount} className='w-100 h-100' alt="" />
                </div>
            </div>
        </div>
        // <div>

        //     <Slider {...settings}>

        //         <div className='first h-96'>
        //             <Navbar />
        //             {/* <img src={Banner1} className='w-full h-full' alt="" /> */}

        //         </div>
        //         <div className='h-96 first'>
        //             <Navbar />
        //             {/* <img src={Banner2} className='w-full h-full' alt="" /> */}

        //         </div>
        //         <div className='h-96 first'>
        //             <Navbar />
        //             {/* <img src={Banner3} className='w-full h-full' alt="" /> */}

        //         </div>
        //         <div className='h-96 first'>
        //             <Navbar />
        //             {/* <img src={Banner1} className='w-full h-full' alt="" /> */}

        //         </div>
        //         <div className='h-96 first'>
        //             <Navbar />
        //             {/* <img src={Banner2} className='w-full h-full' alt="" /> */}

        //         </div>
        //         <div className='h-96 first'>
        //             <Navbar />
        //             {/* <img src={Banner3} className='w-full h-full' alt="" /> */}

        //         </div>

        //     </Slider>
        // </div>

    );
};

export default Banner;