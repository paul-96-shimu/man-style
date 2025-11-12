import React, { useContext } from 'react';
import jacket from '../assets/img/brown jacket.png';
import line from '../assets/img/Line 19.png';
import { AuthContext } from '../Context/AuthContext/Authcontex';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const API_BASE = "http://localhost:3000"; // তোমার backend URL

const Register = () => {
    const { createUser, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    // 🔹 Google sign-in
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                // MongoDB তে save করা
                axios.post(`${API_BASE}/users`, {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                })
                .then(() => {
                    Swal.fire("Success!", "Google Sign-in successful 🎉", "success");
                    navigate('/');
                })
                .catch(err => console.error("MongoDB save error:", err));
            })
            .catch(error => console.log(error));
    };

    // 🔹 Email/password register
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // MongoDB তে save করা
                axios.post(`${API_BASE}/users`, {
                    name: user.displayName || "User",
                    email: user.email,
                    image: user.photoURL || ""
                })
                .then(() => {
                    Swal.fire("Success!", "Registration completed successfully 🎉", "success");
                    navigate('/');
                })
                .catch(err => console.error("MongoDB save error:", err));
            })
            .catch(error => console.log(error));
    };

    return (
        <section>
            <div className='container mx-auto py-[198px]'>
                <div className='grid grid-cols-2'>
                    <div className='bg-[rgba(91,62,56,0.38)] pt-[40px] pl-[40px]'>
                        <h1 className='text-[72px] font-serif'>Style That
                            <span className='text-[#AA8265] italic'>Speaks</span> <br /> for You</h1>
                        <div className='flex mt-[50px]'>
                            <p>“From classic staples to <br /> modern essentials, elevate <br /> your wardrobe with pieces <br />that redefine timeless fashion."</p>
                            <img src={jacket} alt="" />
                            <p>Discover expertly crafted <br /> menswear designed to <br /> inspire confidence and <br /> sophistication</p>
                        </div>
                    </div>

                    <div className='bg-[#FFF] shadow-lg pl-[80px] pr-[80px] pt-[80px]'>
                        <h1 className='text-[#5B3E38] font-bold text-[24px]'>Create Account</h1>
                        <p className='text-[#5B3E38] text-[16px] font-medium'> Already have an account? 
                            <Link to={'/login'} className='text-[#AA8265]'> Log in here</Link>
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <button type="button" onClick={handleGoogleSignIn} className="flex justify-center items-center gap-4 text-[#AA8265] border mt-[40px] p-4 font-medium">
                                <FcGoogle /> Register with Google
                            </button>

                            <div className='flex items-center justify-center gap-4 mt-[20px] text-[12px] font-normal text-[#BDA187]'>
                                <img src={line} alt="" />or register with Email<img src={line} alt="" />
                            </div>

                            <input type="email" name='email' className="border p-4 mt-[20px]" placeholder="Email" />
                            <input type="password" name='password' className="border p-4 mt-[20px]" placeholder="Password" />

                            <div className="flex items-center justify-between mt-5">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                                    <span className="text-sm text-[#5B3E38]">Remember me</span>
                                </label>
                                <h4 className="text-sm text-[#AA8265] cursor-pointer hover:underline">Forgot password?</h4>
                            </div>

                            <button type="submit" className="border border-[#BDA187] mt-[20px] text-white bg-[#AA8265] font-medium p-4">
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
