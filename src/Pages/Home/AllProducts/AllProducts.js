import React, { useEffect, useState } from 'react';
import Products from './Products';

const AllProducts = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);

    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-green-800 my-12'>All Products</h2>

            <div className='grid grid-cols-5 gap-5'>
                {
                    categories.map(category => <Products key={category._id}
                        category={category}>

                    </Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;