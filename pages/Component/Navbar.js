/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import {
    BiCar,
    BiCart,
    BiUser,
    BiLogIn,
    BiBookReader,
} from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const Navbar = () => {
    const router = useRouter();
    const [Login, setLogin] = useState(false);
    const [Forgot, setForgot] = useState(false);
    const [Otp, setOtp] = useState(false);
    const [signup, setsignup] = useState(false);
    const [user, setUser] = useState(false);
    const [account, setAccount] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // user register api
    async function register(event) {
        event.preventDefault();
        if (!email || !password || !confirmPassword || !name || !mobile) {
            toast("all fields are required !!");
        } else {
            let item = { email, password, confirmPassword, name, mobile };
            let result = await fetch("https://usedcars.onrender.com/user/Register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item),
                });
            result = await result.json();
            if (result.success === true) {
                toast(result.message);
                setsignup(false);
                router.push("/");
            }
            else {
                toast('something went wrong')
            }
        }
    }

    // user login api
    async function login(event) {
        event.preventDefault();
        if (!email) {
            toast("Email is Empty !!");
        } else if (!password) {
            toast("Password is Empty !!");
        } else {
            let item = { email, password };
            let result = await fetch("https://usedcars.onrender.com/user/Login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item),
                });
            result = await result.json();
            let token = result.token;
            if (token && result) {
                localStorage.setItem('Token', token);
                toast(result.message);
                router.push("/Profile");
                setLogin(false);
                setUser(!user);
                setAccount(false);
            }
            else {
                toast(result.message)
            }
        }
    }

    // user send otp 
    async function forgot(event) {
        event.preventDefault();
        if (!email) {
            toast("email required");
        } else {
            let item = { email };
            let result = await fetch("https://usedcars.onrender.com/user/sendOtp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(item),
                });
            result = await result.json();
            if (result.success === true) {
                toast(result.message);
            }
            else {
                toast(result.message)
            }
        }
    }

    const getData = () => {
        let mytoken = localStorage.getItem('Token')
        if (mytoken == null) {
            setUser(false);
            setAccount(true);
        } else {
            setUser(true);
            setAccount(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="navbar_cover">
                <div className="container">
                    <nav>
                        <input type="checkbox" id="nav-toggle" />
                        <div className="logo">
                            <Link href="/"><img src="../logo.png" alt="" /></Link>
                        </div>
                        <ul className="links">
                            <li><Link href="/buycar">Buy Car <BiCart /></Link></li>
                            <li><Link href="/Sellcar">Sell Car<BiCar /></Link></li>
                            <li><Link href="/blog">Blog<BiBookReader /></Link></li>
                            {account ? (
                                <li><Link href="">Account<BiUser /></Link>
                                    <ul>
                                        <li><Link href="#" onClick={() => {
                                            setLogin(!Login);
                                        }}>Login<BiLogIn /></Link></li>
                                        <li><Link href="#" onClick={() => {
                                            setsignup(!signup);
                                        }}>Sign up<BiLogIn /></Link></li>
                                    </ul>
                                </li>
                            ) : (
                                ""
                            )}
                            {user ? (
                                <li><Link href="/Profile">Profile<img className="avatar" src="./avatar.png" alt="" /></Link>
                                </li>
                            ) : (
                                ""
                            )}
                            {Login ? (
                                <div
                                    className="userLogin"
                                >
                                    <div className="inner_userLogin4">
                                        <div className="View-r">
                                            <div className="View_req">
                                                <button
                                                    className="crosss"
                                                    onClick={() => {
                                                        setLogin(false);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className="Login_inner">
                                                <form onSubmit={login}>
                                                    <h2>Login</h2>
                                                    <div className="label-float">
                                                        <input
                                                            type="email"
                                                            placeholder=" "
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <label>Enter Your Email</label>

                                                    </div>
                                                    <div className="label-float">
                                                        <input
                                                            type="password"
                                                            placeholder=" "
                                                            autoComplete="new-password"
                                                            onChange={(e) => setPassword(e.target.value)} />
                                                        <label>Password</label>

                                                    </div>

                                                    <div className="checkbox_inner">
                                                        <p>By logging in, I agree to <span>terms</span> and  <span>privacy policy</span></p>
                                                    </div>
                                                    <div className="Forgot_btn">
                                                        <h1 onClick={() => {
                                                            setForgot(!Forgot);
                                                            setLogin(false)
                                                        }}>Forgot Password ?</h1>
                                                    </div>
                                                    <div className="proceed_btn">
                                                        <button>Login</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}

                            {Forgot ? (
                                <div
                                    className="userLogin"
                                >
                                    <div className="inner_userLogin4">
                                        <div className="View-r">
                                            <div className="View_req">
                                                <button
                                                    className="crosss"
                                                    onClick={() => {
                                                        setForgot(false);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className="Login_inner">
                                                <form onSubmit={forgot}>
                                                    <h2>Forgot Password</h2>
                                                    <div className="label-float">
                                                        <input
                                                            type="email"
                                                            placeholder=" "
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <label>Enter Your Email</label>
                                                    </div>
                                                    <div className="proceed_btn forgot">
                                                        <button>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}

                            {Otp ? (
                                <div
                                    className="userLogin"
                                >
                                    <div className="inner_userLogin4">
                                        <div className="View-r">
                                            <div className="View_req">
                                                <button
                                                    className="crosss"
                                                    onClick={() => {
                                                        setOtp(false);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className="Login_inner">

                                                <h2>Set New Password</h2>
                                                <div className="label-float">
                                                    <input type="text" placeholder=" " maxLength={4} />
                                                    <label>Enter Otp</label>

                                                </div>
                                                <div className="label-float">
                                                    <input type="password" placeholder=" " autoComplete="new-password" />
                                                    <label>Set Password</label>
                                                </div>
                                                <div className="label-float">
                                                    <input type="password" placeholder=" " autoComplete="new-password" />
                                                    <label>Confirm Password</label>
                                                </div>
                                                <div className="proceed_btn forgot">
                                                    <button>Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}

                            {signup ? (
                                <div
                                    className="userLogin"
                                >
                                    <div className="inner_userLogin4">
                                        <div className="View-r">
                                            <div className="View_req">
                                                <button
                                                    className="crosss"
                                                    onClick={() => {
                                                        setsignup(false);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className="Login_inner">
                                                <form onSubmit={register}>
                                                    <h2>Signup</h2>
                                                    <div className="label-float">
                                                        <input
                                                            type="text"
                                                            placeholder=" "
                                                            autoComplete="off"
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                        <label>Name</label>

                                                    </div>
                                                    <div className="label-float">
                                                        <input
                                                            type="email"
                                                            placeholder=" "
                                                            autoComplete="off"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <label>Email</label>

                                                    </div>
                                                    <div className="label-float">
                                                        <input
                                                            type="number"
                                                            placeholder=" "
                                                            autoComplete="off"
                                                            onChange={(e) => setMobile(e.target.value)}
                                                        />
                                                        <label>Mobile</label>

                                                    </div>
                                                    <div className="label-float">
                                                        <input
                                                            type="password"
                                                            placeholder=" "
                                                            autoComplete="new-password"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <label>Set Password</label>

                                                    </div>
                                                    <div className="label-float">
                                                        <input
                                                            type="password"
                                                            placeholder=" "
                                                            autoComplete="new-password"
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                        <label>Confirm Password</label>

                                                    </div>
                                                    <div className="checkbox_inner">
                                                    </div>
                                                    <div className="proceed_btn">
                                                        <button>Sign up</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div class="styles__desktopCallSection">
                                <span class="styles__callHeading">
                                    Call us at</span>
                                <span class="styles__careNumber">+91 6284076970</span>
                            </div>
                        </ul>
                        <label for="nav-toggle" className="icon-burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </label>
                    </nav>
                </div>
            </div>
            <label for="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </>
    )
}
export default Navbar;