/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Head from "next/head";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Sellcar = () => {
    const [brand, setBrand] = useState("");
    const [AddPrice, setAddPrice] = useState("");
    const [year, setYear] = useState("");
    const [model, setModel] = useState("");
    const [varient, setVarient] = useState("");
    const [Owner, setOwner] = useState("");
    const [city, setcity] = useState("");
    const [kmDriven, setkmDriven] = useState("");
    const [fuelType, setfuelType] = useState("");
    const [file, setfile] = useState("");

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    function handleImage(e) {
        console.log(e.target.files)
        setfile(URL.createObjectURL(e.target.files[0]))
    }
    function SellCar() {
        const url = 'https://usedcars.onrender.com/SellCar'
        if (!brand || !AddPrice || !year || !model || !varient
            || !Owner || !city || !kmDriven || !fuelType || !file) {
            toast("all fields are required !!");
        } else {
            const formData = new FormData()
            formData.append('brand', brand)
            formData.append('AddPrice', AddPrice)
            formData.append('year', year)
            formData.append('model', model)
            formData.append('varient', varient)
            formData.append('Owner', Owner)
            formData.append('city', city)
            formData.append('kmDriven', kmDriven)
            formData.append('fuelType', fuelType)
            formData.append('file', file)
            axios.post(url, formData).then((response) => {
                if (formData) {
                    console.log(response)
                    toast('Data added successfully');
                    setBrand('');
                    setAddPrice('');
                    setYear('');
                    setModel('');
                    setVarient('');
                    setOwner('');
                    setcity('');
                    setkmDriven('');
                    setfuelType('');
                    setfile('');
                } else {
                    toast('something went wrong')
                }
            })
        }
    }
    return (
        <>
            <ToastContainer />
            <section>
                <Head>
                    <title>Sell Car | Used Cars In India</title>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="author" content="" />
                    <link rel="canonical" href="" />
                </Head>
                <Navbar />
                <section className="top_sellcar_section">
                    <div className="container">
                        <div className="content_sellcar">
                            <h1>Add your car details here</h1>
                            <p>Just a few more steps to go</p>
                            {/* <form onSubmit={SellCar}> */}
                            <div className="form_flexer">
                                <div className="box_in">
                                    <label for="brand">Brand</label><br />
                                    <select name="brand" id="brand"
                                        onChange={(e) => setBrand(e.target.value)}
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
                                <div className="box_in">
                                    <label for="brand">Add Price</label><br />
                                    <input type="number" id="brand" name="brand" placeholder="000000" onChange={(e) => setAddPrice(e.target.value)} />
                                </div>
                                <div className="box_in">
                                    <label for="brand">City</label><br />
                                    <select value={city} name="brand" id="brand" onChange={(e) => setcity(e.target.value)}>
                                        <option>Select</option>
                                        <option>Chandigarh</option>
                                        <option>Mohali</option>
                                        <option>New Delhi</option>
                                    </select>
                                </div>
                                <div className="box_in">
                                    <label for="brand">Year</label><br />
                                    <input type="number" id="brand" name="brand" placeholder="0000" onChange={(e) => setYear(e.target.value)} />
                                </div>
                                <div className="box_in">
                                    <label for="brand">Model</label><br />
                                    <input type="text" id="brand" name="brand" placeholder="Model Name" onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div className="box_in">
                                    <label for="brand">Varient</label><br />
                                    <input type="text" id="brand" name="brand" placeholder="XXX" onChange={(e) => setVarient(e.target.value)} />
                                </div>
                            </div>
                            {/*  */}
                            <div className="form_flexer" style={{ marginTop: '20px' }}>
                                <div className="box_in">
                                    <label for="brand">Add Vehicle Images</label><br />
                                    <input
                                        type="file"
                                        id="brand"
                                        name="upload file"
                                        style={{ color: 'transparent', padding: '6px 5px' }}
                                        onChange={handleImage}
                                    />
                                    {file ? (
                                        <img
                                            src={file}
                                            alt=''
                                            style={{ height: 50, width: 100 }}
                                        />
                                    ) : (
                                        false
                                    )}
                                </div>
                                <div className="box_in">
                                    <label for="brand">Owner</label><br />
                                    <select value={Owner} name="brand" id="brand" onChange={(e) => setOwner(e.target.value)}>
                                        <option>Select</option>
                                        <option>1st Owner</option>
                                        <option>2nd Owner</option>
                                        <option>2+ Owner</option>
                                    </select>
                                </div>
                                <div className="box_in">
                                    <label for="brand">KM Driven</label><br />
                                    <select value={kmDriven} name="brand" id="brand" onChange={(e) => setkmDriven(e.target.value)}>
                                        <option>Select</option>
                                        <option> 10000 KMs & Less</option>
                                        <option> 30000 KMs & Less</option>
                                        <option> 50000 KMs & Less</option>
                                        <option> 75000 KMs & Less</option>
                                        <option> 100000 KMs & Less</option>
                                    </select>
                                </div>
                                <div className="box_in">
                                    <label for="brand">Fuel Type</label><br />
                                    <select value={fuelType} name="brand" id="brand" onChange={(e) => setfuelType(e.target.value)}>
                                        <option>Select</option>
                                        <option>Petrol</option>
                                        <option>Diesel</option>
                                        <option>Cng</option>
                                    </select>
                                </div>
                                <div className="box_in">
                                    <label for="brand">Sell car</label><br />
                                    <button onClick={SellCar}>SUBMIT</button>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </section>

                <section className="second_sec_sellcar">
                    <div className="container">
                        <div className="heading_second_sec">
                            <h1>Sell safely with us</h1>
                        </div>
                        <div className="boxes_second_sec_all">
                            <div className="inner_box_second_sec">
                                <h4>Sell Lorem ipsum dummy content</h4>
                                <p>Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                                <img src="./shape_b.png" alt="/" />
                            </div>
                            <div className="inner_box_second_sec">
                                <h4>Sell Lorem ipsum dummy content</h4>
                                <p>Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                                <img src="./shape_c.png" alt="/" />
                            </div>
                            <div className="inner_box_second_sec">
                                <h4>Sell Lorem ipsum dummy content</h4>
                                <p>Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                                <img src="./shape_b.png" alt="/" />
                            </div>
                            <div className="inner_box_second_sec">
                                <h4>Sell Lorem ipsum dummy content</h4>
                                <p>Lorem Ipsum is simply dummy text of
                                    the printing and typesetting industry.</p>
                                <img src="./shape_c.png" alt="/" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="container">
                        <div className="crousel_heading">
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
                                welcome@brainitz.com One of our staff will be in touch shortly to set-up
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
                                welcome@brainitz.com. If you have more questions, please feel free to
                                submit a request!
                            </p>
                        </label>
                        <input id="faq-c" type="checkbox" />
                        <label htmlFor="faq-c">
                            <p className="faq-heading">Does Brainitz accept purchase orders?</p>
                            <div className="faq-arrow" />
                            <p className="faq-text">
                                Yes, Brainitz accepts purchase order for site licenses. Please set the PO,
                                including a description of the order to welcome@brainitz.com and we will
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
                                www.screencast-o-matic.com You can view our tutorial on how to do this
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

                <section className="review_sec_cover">
                    <div className="container">
                        <div className="crousel_heading">
                            <h1>Testimonials</h1>
                        </div>
                        <Carousel autoPlay={true} responsive={responsive}>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                            <div className="review_box">
                                <img src="./quotes.png" alt="" />
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the
                                    industry's standard dummy text
                                    ever since the 1500</p>
                                <h4>Jennie Devs</h4>
                            </div>
                        </Carousel>
                    </div>
                </section>

                <div className="container">
                    <section className="sellcar_flexer">
                        <div className="flex_sellcar">
                            <h1>Why Choose us ?</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex_sellcar">
                            <img src="./whychoose_us.jpg" alt="" />
                        </div>
                    </section>
                </div>
                <Footer />
            </section>
        </>
    )
}
export default Sellcar;
