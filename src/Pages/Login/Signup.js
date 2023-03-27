import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import '../../Css/signup.css'
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSinaWeibo } from "react-icons/bs";

const Signup = () => {

    // useTitle('signup');
    const { createUser, updateUser, providerLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    const from = location.state?.from?.path || "/";

    // if (token) {
    //     navigate('/');
    // }

    const handleSignUp = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(error => { console.error(error) })
            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message)
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email);
                getUserToken(email);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveGoogleUser(user.displayName, user.email, user.role)
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const saveGoogleUser = (name, email, role = 'Buyer') => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email);
            })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    toast.success('Signup SuccessFully')
                    navigate('/')
                }
            })
    }



    return (
        <div className='login-background'>
            <Navbar></Navbar>
            <div className=" justify-center items-center">

                <div className=" h-[700px] flex justify-center items-center">
                    <div
                        className="login-bg w-96 p-7"
                        style={{
                            "box-shadow": " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
                            "border-radius": "18px",
                        }}
                    >
                        <h2 className="text-6xl text-green-900 text-center mb-6 login-name font-bold">Sign Up</h2>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full flex input-bg items-center pl-3 mb-2">
                                {/* <label className="label">
                                    <span className="label-text font-bold ">Name</span>
                                </label> */}
                                <BsFillPersonFill className='text-green-900' />
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        placeholder='Write your name here'
                                        className="input-bgs input pl-3 input-bordered ml-2 w-full max-w-xs py-2"
                                    />
                                    {errors.name && <p className="text-error">{errors.name?.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full mb-2">
                                {/* <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label> */}
                                <div className='input-bg flex  items-center'>
                                    < BsFillEnvelopeCheckFill className='ml-3 text-green-900' />
                                    <div className='w-full'>
                                        <input
                                            type="text"
                                            {...register("email", { required: "Email Address is required" })}
                                            placeholder='Write your email here'
                                            className="input-bgs input input-bordered w-full max-w-xs py-2 pl-3 ml-2"
                                        />
                                        {errors.email && <p className="text-error">{errors.email?.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-control w-full input-bg flex items-center ">
                                {/* <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label> */}
                                <BsSinaWeibo className='text-green-900 ml-3' />
                                <div className='w-full rounded-3xl'>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be one uppercase letter,one special character,1 digit" }
                                        })}
                                        placeholder='Set your secret password'
                                        className="input input-bgs input-bordered w-full max-w-xs py-2 pl-3 ml-2"
                                    />
                                    {errors.password && <p className="text-error">{errors.password?.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full mb-5 mt-3 ">
                                <label className="label">
                                    <span className="label-text font-bold ml-3">Set Role</span>
                                </label>
                                <select {...register("role")} className="input-bg select input-bordered w-full py-2 pl-3 mt-2">
                                    <option selected>Buyer</option>

                                </select>


                            </div>

                            <input
                                type="submit"
                                className="btn text-1xl py-3 rounded-3xl  bg-green-900 text-green-100 hover:bg-green-700 font-bold  w-full mt-5"
                                value="Sign Up"
                            />
                            <div>
                                {signupError && <p className="text-red-500 mt-2  font-bold">{signupError}</p>}
                            </div>
                        </form>
                        <p className="text-md font-semibold mt-3">
                            Already have an account ?
                            <Link className="text-indigo-600" to="/login">
                                Please Login
                            </Link>
                        </p>
                        <div className="divider text-center">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn bg-pink-900 hover:bg-pink-700 text-1xl py-3 rounded-3xl btn-secondary w-full text-white">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;