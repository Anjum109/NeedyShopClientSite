import React from 'react';
import NavbarOne from '../../Shared/Navbar/NavbarOne';
import Navbartwo from '../../Shared/Navbar/Navbartwo';
import AllProducts from '../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import AllCategory from '../CategoriesTab/Categories/AllCategory/AllCategory';


const Home = () => {
    return (
        <div>
            <NavbarOne />
            <Banner />
            <div className='mt-24 max-w-screen-xl mx-auto '>
                <AllCategory />
                <AllProducts />
            </div>

        </div>
    );
};

export default Home;