/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import withAuth from "./guard/auth.js";

import Head from "next/head";
import {
    BiCar,
    BiUserCircle,
    BiPowerOff,
    BiTrash,
    BiCart
} from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { headers } from "../helpers/apiHelpers";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import moment from "moment";
const instance = axios.create({
    baseURL: "https://usedcars.onrender.com",
});
const Profile = () => {
    const router = useRouter();
    const userId = router.query["userId"];
    const logoutUser = () => {
        window.localStorage.clear(); //clear all localstorage for logout
        router.push("/");
    };
    const [success, setsuccess] = useState("")
    const [isChecked, setisChecked] = useState("")
    const [sellList, setsellList] = useState(true);
    const [info, setinfo] = useState(false);
    const [logout, setlogout] = useState(false);
    const [bookings, setbookings] = useState(false);
    const [trash, settrash] = useState(false);
    // classes state for active tab
    const [click1, setclick1] = useState('click1');
    const [click2, setclick2] = useState();
    const [click3, setclick3] = useState();
    const [click4, setclick4] = useState();

    const handlesellList = () => {
        setsellList(true); setinfo(false); setlogout(false); setbookings(false);
        // 
        setclick1('click1'); setclick2(); setclick3(); setclick4();
    }
    const handlebookings = () => {
        setbookings(true); setlogout(false); setsellList(false); setinfo(false);
        // 
        setclick1(); setclick2('click1'); setclick3(); setclick4();
    }
    const handleinfo = () => {
        setinfo(true); setsellList(false); setlogout(false); setbookings(false);
        // 
        setclick1(); setclick2(); setclick3('click1'); setclick4();
    }
    const handlelogout = () => {
        setlogout(true); setsellList(false); setinfo(false); setbookings(false);
        // 
        setclick1(); setclick2(); setclick3(); setclick4('click1');
    }

    // get user car list api
    useEffect(() => {
        const getData = async () => {
            const response = await instance.get(
                "https://usedcars.onrender.com/user/userSellList",
                {
                    headers: headers,
                }
            );
            setsuccess(response.data.data);
        };
        getData();
    }, []);

    // delete user car list api
    async function deleteList() {
        let item = { _id: isChecked }
        let deleteListing = await fetch(
            "https://usedcars.onrender.com/user/userSellDelete",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(item),
            }
        );
        deleteListing = await deleteListing.json();
        if (deleteListing.success === false) {
            toast("Unable To Delete");

        } else {
            toast("Data has been deleted");
            settrash(false);
            getData();
        }
    }

    // get user personal info 
    useEffect(() => {
        const getData = async () => {
            const response = await instance.get(
                "https://usedcars.onrender.com/user/userList?userId=" + userId,
                {
                    headers: headers,
                }
            );
            setsuccess(response.data.data);
        };
        getData();
    }, []);

    return (
        <>
            <Head>
                <title>Profile | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className="container">
                <div className="profile_flexer">
                    <div className="left_panel">
                        <h3><img src="./avatar.png" alt="" />Welcome, {success.name}</h3>
                        <h2 onClick={handlesellList} className={click1}><BiCar />Sell List</h2>
                        <h2 onClick={handlebookings} className={click2}><BiCart />Bookings</h2>
                        <h2 onClick={handleinfo} className={click3}><BiUserCircle />Personal Information</h2>
                        <h2 onClick={handlelogout} className={click4}><BiPowerOff />Logout</h2>
                    </div>
                    <div className="right_panel">
                        {sellList ? (
                            <div className="boxes_wrap" id="scroll_adjuster">
                                {success &&
                                    success?.map((data) => {
                                        return (
                                            <>
                                                <div className="boxe_buy">
                                                    <img src='./k.png' alt="" />
                                                    <div style={{ padding: '10px' }}>
                                                    <h2>{data.year} {data.brand}, {data.model}
                                                                <span className="dated">
                                                                    {moment(data.createdAt).format("MMM D, Y")}
                                                                </span>
                                                            <BiTrash
                                                                className="remove_l"
                                                                onClick={() => {
                                                                    settrash(!trash);
                                                                    setisChecked(data._id);
                                                                }} />
                                                        </h2>
                                                        <div className="parter">
                                                            <h1>₹{data.AddPrice}</h1>
                                                            <p><FaMapMarkerAlt className="loc_svg" />{data.city}</p>
                                                        </div>
                                                        <span>{data.Owner}</span>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                {trash ? (
                                    <div className="surely_delete">
                                        <div id="flex">
                                            <p>Delete this listing</p>
                                            <p className="close" onClick={() => { settrash(false); }}><GrClose /></p>
                                        </div>
                                        <button onClick={deleteList}>Yes</button>
                                        <button onClick={() => {
                                            settrash(false);
                                            setisChecked("");
                                        }}>No</button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                        {bookings ? (
                            <div className="boxes_wrap" id="scroll_adjuster">
                                <div className="boxe_buy">
                                    {/* <img src='./a.png' alt="" /> */}
                                    <div style={{ padding: '10px' }}>
                                        <h2>
                                            2016 Maruti Suzuki, Dezire
                                            <BiTrash
                                                onClick={() => settrash(!trash)}
                                                className="remove_l"
                                            />
                                        </h2>
                                        <div className="parter">
                                            <h1>₹4000000</h1>
                                            <p><FaMapMarkerAlt className="loc_svg" />New Delhi</p>
                                        </div>
                                        <span>2nd Owner</span>
                                        <span className="booked_ui">REQUESTED</span>
                                    </div>
                                </div>
                                {trash ? (
                                    <div className="surely_delete">
                                        <div id="flex">
                                            <p>Cancel Booking</p>
                                            <p className="close" onClick={() => { settrash(false); }}>X</p>
                                        </div>
                                        <button>Yes</button>
                                        <button onClick={() => { settrash(false); }}>No</button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            // <div className="personal_info_form">
                            //     <div className="info_boxes" id="safety_boxspacer">
                            //         <div id="confirm_btns">
                            //             <h4>You haven’t booked any car yet</h4>
                            //             <Link href="/buycar">
                            //                 <button className="red_bt">View All Cars</button>
                            //             </Link>
                            //         </div>
                            //     </div>
                            // </div>
                        ) : (
                            ""
                        )}
                        {info ? (
                            <div className="personal_info_form">
                                <div className="info_boxes">
                                    <h4>Name</h4>
                                    {/* <p>Username</p> */}
                                    <p>{success.name}</p>
                                </div>
                                <div className="info_boxes">
                                    <h4>Email</h4>
                                    {/* <p>checker@gmail.com</p> */}
                                    <p>{success.email}</p>
                                </div>
                                <div className="info_boxes">
                                    <h4>Mobile</h4>
                                    {/* <p>9876543210</p> */}
                                    <p>{success.mobile}</p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {logout ? (
                            <div className="personal_info_form">
                                <div className="info_boxes" id="safety_boxspacer">
                                    <div id="confirm_btns">
                                        <h4>Are You Sure To Logout ?</h4>
                                        <button onClick={logoutUser}>Yes</button>
                                        <button>No</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default withAuth(Profile);