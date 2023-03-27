import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import NavbarTwo from '../Shared/Navbar/Navbartwo';
import FishMap from './FishMap';

const Fish = () => {

    const [fish, setFish] = useState([]);

    useEffect(() => {
        fetch('fish.json')
            .then(res => res.json())
            .then(data => setFish(data))
    }, [])
    console.log(fish);

    return (
        <div>
            <NavbarTwo />
            <Navbar />
            <h2 className='text-center text-2xl text-green-800 mt-12 font-bold'>All Fish Items</h2>
            <div className='grid grid-cols-3 gap-5 mt-5 max-w-screen-xl mx-auto'>

                {
                    fish.map(fishes => <FishMap key={fishes._id}
                        fishes={fishes}>

                    </FishMap>)
                }
            </div>
        </div>
    );
};

export default Fish;