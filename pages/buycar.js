/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "./Component/Navbar";
import React, { useState, useEffect } from 'react';
import Footer from "./Component/Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { headers } from "../helpers/apiHelpers";
import axios from "axios";
import moment from "moment";
const instance = axios.create({
    baseURL: "https://usedcars.onrender.com",
});
const buycar = () => {

    const [success, setsuccess] = useState([])
    const [allData, setAllData] = useState("")

    useEffect(() => {
        const getData = async () => {
            const response = await instance.get(
                "https://usedcars.onrender.com/SellList",
                {
                    headers: headers,
                }
            );
            setAllData(response.data.data);
            setsuccess(response.data.data);

        };
        getData();

    }, []);

    const handleFilterAddPrice = (AddPrice) => {
        const filteredData = allData.filter((data) => {
            if (data.AddPrice.toLowerCase().includes(AddPrice.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFilterbrand = (brand) => {
        const filteredData = allData.filter((data) => {
            if (data.brand.toLowerCase().includes(brand.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFiltermodel = (model) => {
        const filteredData = allData.filter((data) => {
            if (data.model.toLowerCase().includes(model.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFiltercity = (city) => {
        const filteredData = allData.filter((data) => {
            if (data.city.toLowerCase().includes(city.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFilterkmDriven = (kmDriven) => {
        const filteredData = allData.filter((data) => {
            if (data.kmDriven.toLowerCase().includes(kmDriven.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFilterfuelType = (fuelType) => {
        const filteredData = allData.filter((data) => {
            if (data.fuelType.toLowerCase().includes(fuelType.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    const handleFilterOwner = (Owner) => {
        const filteredData = allData.filter((data) => {
            if (data.Owner.toLowerCase().includes(Owner.toLowerCase())) {
                return data;
            }
        });
        setsuccess(filteredData);
    };
    return (
        <>
            <Head>
                <title>Buy Car | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className="buycar_cover">
                <div className="container">
                    <div className="main_box">
                        <h1>Buy Car</h1>
                    </div>
                </div>
            </div>
            <div className="buycar_main">
                <div className="container">
                    <div className="crousel_heading" style={{ paddingTop: '50px' }}>
                        <h1>Buy your dream car today</h1>
                    </div>
                    <div className="buycar_twomain">
                        <div className="buycar_one">
                            <div className="FilterDesktop__filterDesktopItem ">
                                <div className="FilterDesktop__inputsearch">
                                    <p>Enter Your Price</p>
                                    <input type="number" placeholder="000000"
                                        onChange={(e) => handleFilterAddPrice(e.target.value)}
                                    />
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>Brand Name</p>
                                    <select name="city" id="city"
                                        onChange={(e) => handleFilterbrand(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <optgroup label="Popular Brand"></optgroup>
                                        <option value="Maruti Suzuki">Maruti Suzuki</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="Tata">Tata</option>
                                        <option value="Mahindra">Mahindra</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Honda">Honda</option>
                                        <optgroup label="All Brand"></optgroup>
                                        <option value="BYD">BYD</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Ambassador">Ambassador</option>
                                        <option value="Ashok">Ashok</option>
                                        <option value="Ashok Leyland">Ashok Leyland</option>
                                        <option value="Aston">Aston</option>
                                        <option value="Aston Martin">Aston Martin</option>
                                        <option value="Bajaj">Bajaj</option>
                                        <option value="Bentley">Bentley</option>
                                        <option value="Citroen">Citroen</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Bugatti">Bugatti</option>
                                        <option value="Cadillac">Cadillac</option>
                                        <option value="Caterham">Caterham</option>
                                        <option value="Chevrolet">Chevrolet</option>
                                        <option value="Chrysler">Chrysler</option>
                                        <option value="Conquest">Conquest</option>
                                        <option value="Daewoo">Daewoo</option>
                                        <option value="Datsun">Datsun</option>
                                        <option value="Dc">Dc</option>
                                        <option value="Dodge">Dodge</option>
                                        <option value="Eicher Polaris">Eicher Polaris</option>
                                        <option value="Ferrari">Ferrari</option>
                                        <option value="Fiat">Fiat</option>
                                        <option value="Force Motors">Force Motors</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Hummer">Hummer</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="ICML">ICML</option>
                                        <option value="Infiniti">Infiniti</option>
                                        <option value="Isuzu">Isuzu</option>
                                        <option value="Jaguar">Jaguar</option>
                                        <option value="Jeep">Jeep</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Lamborghini">Lamborghini</option>
                                        <option value="Land-rover">Land Rover</option>
                                        <option value="Lexus">Lexus</option>
                                        <option value="Mahindra">Mahindra</option>
                                        <option value="Mahindra Renault">Mahindra Renault</option>
                                        <option value="Maruti Suzuki">Maruti Suzuki</option>
                                        <option value="Maserati">Maserati</option>
                                        <option value="Maybach">Maybach</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                                        <option value="MG">MG</option>
                                        <option value="Mini">Mini</option>
                                        <option value="Mitsubishi">Mitsubishi</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Opel">Opel</option>
                                        <option value="Peugeot">Peugeot</option>
                                        <option value="Porsche">Porsche</option>
                                        <option value="Premier">Premier</option>
                                        <option value="Renault">Renault</option>
                                        <option value="Rolls-Royce">Rolls-Royce</option>
                                        <option value="San">San</option>
                                        <option value="Sipani">Sipani</option>
                                        <option value="Skoda">Skoda</option>
                                        <option value="Smart">Smart</option>
                                        <option value="Ssangyong">Ssangyong</option>
                                        <option value="Subaru">Subaru</option>
                                        <option value="Tata">Tata</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Volvo">Volvo</option>
                                    </select>
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>Car Name </p>
                                    <input type="text" placeholder="Enter Your Car Name"
                                        onChange={(e) => handleFiltermodel(e.target.value)}
                                    />
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>Select Your City</p>
                                    <select name="city" id="city"
                                        onChange={(e) => handleFiltercity(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option>Chandigarh</option>
                                        <option>Mohali</option>
                                        <option>New Delhi</option>
                                    </select>
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>KM Driven</p>
                                    <select name="city" id="city"
                                        onChange={(e) => handleFilterkmDriven(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option>10000 KMs & Less</option>
                                        <option>30000 KMs & Less</option>
                                        <option>50000 KMs & Less</option>
                                        <option>75000 KMs & Less</option>
                                        <option>100000 KMs & Less</option>
                                    </select>
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>Fuel Type</p>
                                    <select name="city" id="city"
                                        onChange={(e) => handleFilterfuelType(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option>Petrol</option>
                                        <option>Diesel</option>
                                        <option>Cng</option>
                                    </select>
                                </div>
                                <div className="FilterDesktop__inputsearch">
                                    <p>Owner</p>
                                    <select name="city" id="city"
                                        onChange={(e) => handleFilterOwner(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option>1st Owner</option>
                                        <option>2nd Owner</option>
                                        <option>2+ Owner</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="buycar_two">
                            <div className="buycartwo_heading">
                                <h2><span>1494</span> Used cars in Lorem Ipsum </h2>
                            </div>
                            <div className="boxes_wrap">
                                {
                                    success.length !== 0 ? success?.map((data) => {
                                        return (
                                            <>
                                                <div key={data._id} className="boxe_buy">
                                                    <Link href={"/carView/?" + "_id=" + data._id}>
                                                        {/* <img src='/b.png' alt="" /> */}
                                                        <div style={{ padding: '10px' }}>
                                                            <h2>{data.year} {data.brand}, {data.model}
                                                                <span className="dated">
                                                                    {moment(data.createdAt).format("MMM D, Y")}
                                                                </span>
                                                            </h2>
                                                            <div className="parter">
                                                                <h1>₹{data.AddPrice}</h1>
                                                                <p><FaMapMarkerAlt className="loc_svg" />{data.city}</p>
                                                            </div>
                                                            <span>{data.Owner}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        );
                                    }) :
                                        <div className="nodata">
                                            <p>No Information Available !!</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container">
                    <div className="crousel_heading" style={{ marginTop: '50px' }}>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                </div>
                <div className="faq">
                    <input id="faq-a" type="checkbox" />
                    <label htmlFor="faq-a">
                        <p className="faq-heading">How do I purchase Brainitz?</p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            You can purchase an individual account or a site license by emailing us at
                            mailto:welcome@brainitz.com One of our staff will be in touch shortly to set-up
                            your account. We accept credit card, purchase order, or check. Learn more
                            on our pricing page.
                            <br />
                            <br />
                            We also offer professional development trainings that include the
                            opportunity to pursue credit while also receiving a discounted license. If
                            you have more questions, please feel free to submit a request!
                        </p>
                    </label>
                    <input id="faq-b" type="checkbox" />
                    <label htmlFor="faq-b">
                        <p className="faq-heading">
                            Do you have professional development trainings available?
                        </p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            Yes, we have professional development trainings available almost every
                            month. Teachers can take our online course that will train you on the
                            theory and practice of putting lessons online, often called flipped or
                            blended learning. These trainings also include in depth instruction on how
                            to use Brainitz.
                            <br />
                            <br />
                            Online training start at $45, include a 1 year subscription Brainitz, and
                            come with 1 hour of advancement credit available through Adams State
                            University or $55. For dates on upcoming trainings, email us at
                            mailto:welcome@brainitz.com. If you have more questions, please feel free to
                            submit a request!
                        </p>
                    </label>
                    <input id="faq-c" type="checkbox" />
                    <label htmlFor="faq-c">
                        <p className="faq-heading">Does Brainitz accept purchase orders?</p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            Yes, Brainitz accepts purchase order for site licenses. Please set the PO,
                            including a description of the order to mailto:welcome@brainitz.com and we will
                            invoice you for the amount. Once we send the invoice, someone will be in
                            touch to set up your Brainitz account.
                            <br />
                            <br />
                            You can learn more about our licensing structure on our pricing page. If
                            you have more questions, please feel free to submit a request!
                        </p>
                    </label>
                    <input id="faq-d" type="checkbox" />
                    <label htmlFor="faq-d">
                        <p className="faq-heading">
                            What are the technical requirements for Brainitz?
                        </p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            To get setup with Brainitz, instructors will need a computer with working
                            Internet connection and a web browser. <br />
                            <br />
                            Students will need any device with a web browser, ranging from smartphones
                            to tablets and personal computer, as well as an Internet or cellular
                            connection. <br />
                            <br />
                            For the be st experience, we recommend using the latest version of Google
                            Chrome, but it should work on a recent version of any major browser. If
                            you have any more questions, please feel free to submit a request!{" "}
                        </p>
                    </label>
                    <input id="faq-e" type="checkbox" />
                    <label htmlFor="faq-e">
                        <p className="faq-heading">Can I add a PowerPoint to Brainitz</p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            Yes, you can add a PowerPoint to Brainitz. The easiest way is to record
                            your PowerPoint presentation using a screen capture program like
                            https://www.screencast-o-matic.com You can view our tutorial on how to do this
                            here. <br />
                            <br />
                            This will allow you to record your PowerPoint as a video with your voice
                            describing the slides. You will then be able to upload the video on
                            Brainitz and create an interactive video lesson. If you have any more
                            questions, please feel free to submit a request!
                        </p>
                    </label>
                    <input id="settings" type="checkbox" />
                    <input id="faq-f" type="checkbox" />
                    <label htmlFor="faq-f">
                        <p className="faq-heading">
                            Did my student really get logged out and lose their progress?
                        </p>
                        <div className="faq-arrow" />
                        <p className="faq-text">
                            If a student does not answer a question in 5 minutes after it pops up the
                            student will be ‘timed out’ and they will lose their progress from the
                            last previously answered question <br />
                            <br />
                            This feature is built in to discourage students from playing a video
                            lesson and walking away. Students must stay engaged with the video lesson
                            to avoid being timed out. If you have more questions, please feel free to
                            submit a request!
                        </p>
                    </label>
                </div>
            </div>
            <div className="container">
                <div className="buycar-contenter">
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                    <h3>Best used cars in Lorem Ipsum with Home Test Drive</h3>
                    <p>Spinny makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
                        customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
                        s available for a free home test drive, giving you convenience to test the car
                        you desire in a familiar environment. With attractive used car loan options and
                        easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
                        affordable. Spinny also provides free home delivery and secure RC transfer to enhance
                        the start of your ownership experience.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default buycar;