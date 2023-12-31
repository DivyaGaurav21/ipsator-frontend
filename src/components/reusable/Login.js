import React, { useState } from 'react';
import Styles from './LoginSignup.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const LogIn = () => {
    const notify = (str) => toast(str);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        notify("Login SuccessFully")
        setEmail("")
        setPassword("");

    }

    return (

        <>

            <div className='flex h-screen bg-slate-800'>
                <div className='m-auto bg-slate-50 rounded-xl w-[95%] h-[95%] md:w-3/5 md:h-3/4 flex flex-col md:flex-row justify-center'>

                    <div className='w-[100%] md:w-1/2 h-[40%] md:h-full flex justify-center content-center'>
                        <img src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/01/renewable-energy.jpg" className='w-full rounded-s-xl' alt='logo_img' />
                    </div>

                    <div className=' w-[100%] md:w-1/2  h-2/3 md:h-full rounded-e-xl text-white'>
                        <div className={Styles.loginPage}>
                            <div className="w-full">
                                <h1>Welcome To Waste to Wealth</h1>
                                <h4>Welcome back! Please enter your Login Credentials</h4>

                                <form className="mt-4" onSubmit={loginHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className={Styles.label}>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className={Styles.inputfield}
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>
                                    <div className="mb-3 relative">
                                        <label htmlFor="password" className={Styles.label}>Password</label>
                                        <input
                                            type={showPassword ? "password" : "text"}
                                            id="password"
                                            placeholder="*******"
                                            className={Styles.inputfield}
                                            onChange={e => setPassword(e.target.value)}
                                            value={password}
                                        />
                                        <span onClick={() => setShowPassword(show => !show)} className={Styles.eye}>👁</span>
                                    </div>
                                    <div className="mb-3 flex flex-wrap content-center justify-between">
                                        <div className='flex flex-row gap-2'>
                                            <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                                            <label htmlFor="remember" className={Styles.label2}>Remember me</label>
                                        </div>
                                        <a href="#" className={Styles.forget}>Forgot password?</a>
                                    </div>
                                    <div className="mb-3">
                                        <button type='submit' className={Styles.signinbtn}>Sign in</button>
                                        <button type='button' className={Styles.authbtn}>
                                            <img className={Styles.iconimg} src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                                            Sign in with Google
                                        </button>
                                        <button type='button' className={Styles.authbtn}>
                                            <img className={Styles.iconimg} src="" />
                                            Sign in with Twitter
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center">
                                    <span className="text-xs text-gray-400 font-semibold">Don't have an account?</span>
                                    <Link to="/signup"><span className={Styles.forget}>Sign up</span></Link>
                                </div>
                            </div>


                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />

                        </div>
                    </div>

                </div>

            </div>




        </>
    );
};

export default LogIn;
