import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import '../../../Css/Navbar.css'

const NavbarOne = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    let Links = [
        { name: "HOME", link: "/" },
        { name: "Shop", link: "/" },
        { name: "Product", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0  fixed aa'>
            <div className='md:flex items-center justify-between navbar-line bg-yellow-100 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-green-800 mr-1 pt-2 lg:block md:hidden hidden'>
                        <Link className='mr-2' to='https://www.facebook.com/aunjum.lubaba.1/'><ion-icon name="logo-facebook"></ion-icon></Link>
                        <Link className='mr-2'><ion-icon name="logo-instagram"></ion-icon></Link>
                        <Link className='mr-2'> <ion-icon name="logo-twitter"></ion-icon></Link>
                        <Link className='mr-2'> <ion-icon name="logo-github"></ion-icon></Link>
                        <Link className='mr-2'> <ion-icon name="logo-linkedin"></ion-icon></Link>

                    </span>
                    <p className='lg:hidden'>NeedyShop</p>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all lg:hidden duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    {user?.uid ?
                        <>
                            <Link onClick={handleLogOut} className='text-2xl font-bold text-green-600 hover:text-red-700 '>
                                <ion-icon name="person-circle"></ion-icon>
                            </Link></>
                        :
                        <><Link className='text-2xl font-bold text-green-600 hover:text-red-700 ' to='/login'>
                            Login
                        </Link></>

                    }
                </ul>
                <div className='hidden lg:block'>
                    {user?.uid ?
                        <>
                            <div class="dropdown ">
                                <div>
                                    <button className='text-green-900 mb-2 font-bold  flex items-center px-6 text-4xl'><ion-icon name="person-circle"></ion-icon> </button>
                                </div>
                                <div className="list-style dropdown-content bg-green-300">
                                    <Link onClick={handleLogOut} className='font-bold text-green-600 hover:text-red-700 '>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </>
                        :
                        <><Link className='text-2xl font-bold text-green-600 hover:text-red-700 ' to='/login'>
                            Login
                        </Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavbarOne;



// import React, { useState } from 'react';
// import '../../../Css/Navbar.css'
// import { BsTwitter } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";
// import { BsPinterest } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// const NavbarOne = () => {

//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="w-full bg-green-500 shadow">
//             <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//                 <div>
//                     <div className="flex items-center justify-between py-3 md:py-5 md:block">
//                         <a href="javascript:void(0)" className='hidden lg:block text-white '>
//                             <div className='flex gap-3'>
//                                 <BsFacebook />
//                                 <BsInstagram />
//                                 <BsTwitter />
//                                 <BsPinterest />
//                             </div>

//                         </a>
//                         <a href="javascript:void(0)" className=' lg:hidden text-white '>
//                             <h2 className='text-2xl font-bold'>Needy Shop</h2>
//                         </a>
//                         <div className="md:hidden">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-white"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-white"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 justify-self-center pb-3 mt-8 md:block lg:hidden md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
//                             }`}
//                     >
//                         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="/">Home</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">Blog</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">About US</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">Contact US</a>
//                             </li>
//                         </ul>

//                         <div className="mt-3 space-y-2 md:hidden sm:inline-block">

//                             <Link
//                                 to="/login"
//                                 className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//                             >
//                                 Log in
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="hidden space-x-2 md:inline-block">
//                     <div className="hidden space-x-2 md:inline-block">
//                         <Link
//                             to="/login"
//                             className="inline-block w-full px-4 py-2 text-center text-white font-bold rounded-md shadow"
//                         >
//                             Log in
//                         </Link>
//                     </div>

//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavbarOne;