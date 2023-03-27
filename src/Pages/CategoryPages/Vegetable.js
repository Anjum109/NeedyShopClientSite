import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import NavbarTwo from '../Shared/Navbar/Navbartwo';
import VegetableMap from './VegetableMap';

const Vegetable = () => {

    const [vegetable, setVegetable] = useState([]);

    useEffect(() => {
        fetch('vegetable.json')
            .then(res => res.json())
            .then(data => setVegetable(data))
    }, [])
    console.log(vegetable);

    return (
        <div>
            <div>
                <NavbarTwo />
                <Navbar />
                <h2 className='text-center text-2xl text-green-800 mt-12 font-bold'>All Vegetables Items</h2>
                <div className='grid grid-cols-3 gap-5 mt-5 max-w-screen-xl mx-auto'>

                    {
                        vegetable.map(vegetables => <VegetableMap key={vegetables._id}
                            vegetables={vegetables}>

                        </VegetableMap>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Vegetable;