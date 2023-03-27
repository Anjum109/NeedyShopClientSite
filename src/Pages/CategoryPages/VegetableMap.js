import React from 'react';
import { Link } from 'react-router-dom';

const VegetableMap = ({ vegetables }) => {

    const { image, product_name, new_price } = vegetables;

    return (
        <div>
            <div className='border border-green-900 bg-green-400  rounded-xl'>
                <div>
                    <div className='w-full h-48 bg-green-200 image-size'>
                        <img src={image} className='w-full h-48 image-size bg-green-200' alt="" />
                    </div>
                    <div className='text-center font-bold p-5 border-set'>
                        <p>{product_name}</p>
                        <p>Price: {new_price}</p>
                    </div>
                    <div className='flex justify-center items-center  text-green-200 font-bold'>
                        <Link className='w-50 bg-green-900 mb-5 px-5 py-2 rounded-2xl hover:text-green-900 hover:bg-green-500'> Add to Cart </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VegetableMap;