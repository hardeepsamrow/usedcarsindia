/* eslint-disable @next/next/no-img-element */
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Head from "next/head";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Booknow = () => {
    const [name, setname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [address, setaddress] = useState("");
    const [pinCode, setpinCode] = useState("");
    const [city, setcity] = useState("");

    async function BookCar(event) {
        event.preventDefault();
        if (!name || !phoneNumber || !address || !pinCode || !city) {
            toast("all fields are required !!");
        } else {
            let item = { name, phoneNumber, address, pinCode, city };
            let result = await fetch("https://usedcars.onrender.com/BookCar",
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
                setname("");
                setphoneNumber("")
                setaddress("");
                setcity("");
                setpinCode("")
            }
            else {
                toast(result.message)
            }
        }
    }
    return (
        <>
            <ToastContainer />
            <Head>
                <title>Book Now | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className="bookNow_main">
                <div className="container">
                    <div className="bookNow_towmain">
                        <div className="booknow_one">
                            <div className="BookNowBanner__mainCtn BookNowBanner__desktop">
                                <div className="BookNowBanner__infoCtn">
                                    <div className="BookNowBanner__mainHead BookNowBanner__desktop">
                                        <p>Lorem Ipsum Dolar</p>
                                    </div>
                                    <div className="BookNowBanner__txtCtn BookNowBanner__desktop">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="BookNowBanner__imgctn">
                                    <img src="./booknow1.png" alt="/" />
                                </div>
                            </div>
                            <div className="form_mainbook">
                                <div className="OwnerDetailsForm__container OwnerDetailsForm__desktop">
                                    <header className="BackHeading__heading" data-category="" data-label="">
                                        <div className="BackHeading__headingTextContainer">
                                            <h1 className="BackHeading__title">Send Car Booking Request</h1>
                                            <div className="BackHeading__subTitle">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </div>
                                        </div>
                                    </header>
                                    <div className="OwnerDetailsForm__contentSection">
                                        <form onSubmit={BookCar}>
                                            <div className="label_flex">
                                                <div className="flex_onefrom">
                                                    <div className="label-float">
                                                        <input
                                                            type="text"
                                                            placeholder=""
                                                            onChange={(e) => setname(e.target.value)}
                                                        />
                                                        <label>Enter Your Full Name</label>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="flex_twoform">
                                                    <div className="label-float">
                                                        <input
                                                            type="number"
                                                            placeholder=""
                                                            onChange={(e) => setphoneNumber(e.target.value)}
                                                        />
                                                        <label>Enter Your Phone Number</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="label-float">
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    onChange={(e) => setaddress(e.target.value)}
                                                />
                                                <label>Enter Your Address</label>
                                            </div>
                                            <br />
                                            <div className="label_flex">
                                                <div className="flex_onefrom">
                                                    <div className="label-float">
                                                        <input
                                                            type="number"
                                                            placeholder=""
                                                            onChange={(e) => setpinCode(e.target.value)}
                                                        />
                                                        <label>Enter Your Pin Code</label>
                                                    </div>
                                                </div>

                                                <br />
                                                <div className="flex_twoform">
                                                    <div className="label-float">
                                                        <input
                                                            type="text"
                                                            placeholder=""
                                                            onChange={(e) => setcity(e.target.value)}
                                                        />
                                                        <label>Enter Your City</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="save_btn">
                                                <button >SEND</button>
                                            </div>
                                            <div className="OwnerDetailsForm__noteSection">
                                                <div className="OwnerDetailsForm__noteHeading">Note</div>
                                                <ul className="OwnerDetailsForm__listSection">
                                                    <li className="OwnerDetailsForm__listItem">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </li>
                                                    <li className="OwnerDetailsForm__listItem">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        simply dummy text of the printing and typesetting industry.
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="booknow_two">
                            <div className="booknow_twoinner">
                                <div className="PaymentSummary__heading">Summary</div>
                                <div className="PaymentSummary__summaryItemSection">
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                    <div className="PaymentSummary__summaryItem">
                                        <span className="PaymentSummary__summaryKey">Add summary here </span>
                                        <span className="PaymentSummary__green">
                                            Dummy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booknow