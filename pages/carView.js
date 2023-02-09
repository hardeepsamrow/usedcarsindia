/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Head from "next/head";
import { headers } from "../helpers/apiHelpers";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const instance = axios.create({
    baseURL: "https://usedcars.onrender.com",
});

const Carview = () => {
    const router = useRouter()
    const _id = router.query["_id"];


    const [success, setsuccess] = useState('')
    const getData = async () => {
        const data = await instance.get(
            "https://usedcars.onrender.com/SellGet?_id=" + _id,
            {
                headers: headers,
            }
        );
        setsuccess(data.data.data);
        console.log(success)
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Head>
                <title>Car View | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            {/* <p>Baseball Player Id: {_id}</p> */}
            <div className="carview_main">
                <div className="container">
                    <div className="carview_twomain">
                        <div className="carview_one">
                            <div className="carousel_main">
                                <Carousel>
                                    <div>
                                        <img src="./k.png" alt='' />
                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                    <div>
                                        <img src="./k.png" alt='' />

                                    </div>
                                </Carousel>
                            </div>
                            <div className="caroverview_section">
                                <div className="caroverview_heading">
                                    <h2>Car Overview</h2>
                                </div>
                                <div className="styles__cardWrapperDesktop DesktopOverview__overviewSection">
                                    <div className="DesktopOverview__overviewItemList">
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Car</div>
                                            <div className="DesktopOverview__itemDisplay">{success.brand}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Car Price</div>
                                            <div className="DesktopOverview__itemDisplay">{success.AddPrice}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Year</div>
                                            <div className="DesktopOverview__itemDisplay">{success.year}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Model</div>
                                            <div className="DesktopOverview__itemDisplay">{success.model}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Varient</div>
                                            <div className="DesktopOverview__itemDisplay">{success.varient}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">No. of Owner</div>
                                            <div className="DesktopOverview__itemDisplay">{success.Owner}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Location</div>
                                            <div className="DesktopOverview__itemDisplay">{success.city}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">KM Driven</div>
                                            <div className="DesktopOverview__itemDisplay">{success.kmDriven}</div>
                                        </div>
                                        <div className="DesktopOverview__overviewItem">
                                            <div className="DesktopOverview__itemLabel">Fuel Type</div>
                                            <div className="DesktopOverview__itemDisplay">{success.fuelType}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carview_two">
                            <div className="carview_sepcification_main">
                                <div className="carview_sepcificationone">
                                    <h2>{success.year} {success.brand} {success.model}</h2>
                                </div>
                                <div className="carview_sepcificationtwo">
                                    <h3>{success.kmDriven}</h3>

                                    <p>Used Cars India, {success.city}
                                    </p>
                                </div>
                                <div className="carview_sepcificationthree">
                                    <p><span>₹{success.AddPrice}</span><br />
                                        Car Price</p>
                                    <p>{success.city}<br />
                                        Location</p>
                                </div>
                                <div className="carview_sepcificationbtn">
                                    <button>
                                        <Link href={"/booknow/?" + "_id=" + _id}>BOOK NOW
                                        </Link>
                                    </button>
                                    <button style={{ background: "#ED264F" }}>Contact No.<br />
                                        <span>+9876543210</span></button>
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

export default Carview;