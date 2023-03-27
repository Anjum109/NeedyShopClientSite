import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import vegetable from '../../../../../assets/Categories/vegetables.jpg'
import fruits from '../../../../../assets/Categories/fruites.jpg'
import fish from '../../../../../assets/Categories/fish.jpg'
import edibleOil from '../../../../../assets/Categories/edible-oil-refining-for-groundnut-peanut-oil.jpg'
import personalCare from '../../../../../assets/Categories/personal-care-500x500.jpg'
import meat from '../../../../../assets/Categories/meat.jpg'
import milk from '../../../../../assets/Categories/notmilk-mc-main-210706.jpg'
import '../../../../../Css/AllCategories.css';



const AllCategory = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className='divSetInBanner '>

            <Slider {...settings} className='hidden lg:block'>
                <div className='p-5'>
                    <div className='h-48'>
                        <img src={vegetable} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to='/vegetable' className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Vegetable</Link>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={fruits} className='w-100 h-100 ' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Fruits</Link>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={fish} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to='/fish' className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Fish</Link>
                    </div>
                </div >
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={meat} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Meat</Link>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={personalCare} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Personal Care</Link>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={edibleOil} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Edible Oil</Link>
                    </div>
                </div>
                <div className=' p-5'>
                    <div className='h-48'>
                        <img src={milk} className='w-100 h-100' alt="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link className='text-center bg-green-900 text-white px-4 py-2 w-full font-bold text-2xl'>Milk</Link>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default AllCategory;