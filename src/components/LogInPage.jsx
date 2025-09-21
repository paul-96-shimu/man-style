import React, {  useContext, useRef } from 'react';

import pamlar2 from '../assets/img/pamlar2.png'
import line from '../assets/img/Line 19.png'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Context/AuthContext/Authcontex';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const LogInPage = () => {


    // const { logInUser } = use(AuthContext)
    // const { signInGoogle } = use(AuthContext)
    // const { passwordRest } = use(AuthContext)

      const { logInUser, signInGoogle, passwordRest } = useContext(AuthContext);


    const emailRef = useRef();

    const navigate = useNavigate()






    const handleGoodleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result)
                navigate('/');
            })




            .catch(error => {

                console.log(error)
            })

    }

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logInUser(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Success!",
                    text: "Registration completed successfully 🎉",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate('/')
                })

            }).catch(error => {

                console.log(error)
            });




    }



    const handleForgetPassword = () => {

        const email = emailRef.current.value;

        passwordRest(email)
        .then(()=>{

            alert('A password reset email is sent. please check your Email.')
        })
        .catch(error=>{

            console.log(error)
        })

    }
    return (
        <section>



            <div className='container mx-auto py-[198px]'>


                <div className=' '>
                    <div className=' grid col-span-2 grid-cols-2'>

                        <div className='bg-[rgba(91,62,56,0.38)] pt-[40px] pl-[40px] flex items-center'>

                            <h1 className=' text- primary text-[72px] instrument-serif-regular leading-[100%] '
                            >
                                <span className='text-[#AA8265] instrument-serif-regular-italic'>Refined Style</span>  for <br /> the Modern Man</h1>

                            <div className='flex mt-[50px]'>

                                {/* <p>“From classic staples to <br /> modern essentials, elevate <br /> your wardrobe with pieces <br />that redefine timeless fashion."</p> */}

                                <img src={pamlar2} alt="" />

                                {/* <p>Discover expertly crafted <br /> menswear designed to <br /> inspire confidence and <br /> sophistication</p> */}
                            </div>
                        </div>





                        <div className='bg-[#FFF] shadow-lg  pl-[80px] pr-[80px] pt-[80px] '>

                            <h1 className='text-[#5B3E38] instrument-sans font-bold text-[24px]'>Log in</h1>
                            <p className='text-[#5B3E38] text-[16px] font-medium'> Don’t have account yet?{' '} 
                                
                                 <Link to='/register' className='text-[#AA8265]'>Sign up here</Link>
                                 
                                 </p>






                            <form onSubmit={handleLogin} className="flex flex-col">


                                <button onClick={handleGoodleSignIn} className=" flex justify-center items-center gap-4 text-[14px] font-medium   text-[#AA8265] border border-[#E9E2D8] mt-[40px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] instrument-sans">
                                    <FcGoogle />
                                    Login with Google
                                </button>

                                <div className='flex items-center justify-center gap-4 mt-[20px] text-[12px] font-normal text-[#BDA187]'>
                                    <img src={line} alt="" />or Sign with Email  <img src={line} alt="" /></div>

                                <input type="email" name='email' ref={emailRef} className=" border border-[#BDA187] p-[16px] mt-[20px]" placeholder="Email" />

                                <input type="Password" name='password' className=" border border-[#BDA187] p-[16px] mt-[20px]" placeholder="Password" />

                                <div className="flex items-center justify-between mt-5">
                                    {/* Left side - Checkbox with label */}
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="checkbox checkbox-sm"
                                        />
                                        <span className="text-sm text-[#5B3E38]">Remember me</span>
                                    </label>

                                    {/* Right side - Forgot password */}
                                    <h4 onClick={handleForgetPassword} className="text-sm text-[#AA8265] cursor-pointer hover:underline">
                                        Forgot password?
                                    </h4>
                                </div>


                                <button className="border border-[#BDA187] mt-[20px] text-[16px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] 
                                        text-[#F6F4F0] bg-[#AA8265] font-medium ">LogIn Now</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogInPage;