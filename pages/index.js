/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BiChevronRight } from "react-icons/bi";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import { headers } from "../helpers/apiHelpers";
const instance = axios.create({
  baseURL: "https://usedcars.onrender.com",
});
const index = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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

  const [success, setsuccess] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await instance.get(
        "https://usedcars.onrender.com/SellList",
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
        <title>Used Cars In India</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="canonical" href="" />
      </Head>
      <Navbar />
      <div className="main_cover">
        <div className="container">
          <div className="main_box">
            <h1>Hello Welcome</h1>
            <p>Lorem Ipsum is simply Logo text
              of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard Logo text ever since the 1500s</p>
            <div className="main_button">
              <button>VIEW ALL CARS</button>
            </div>
          </div>
        </div>
      </div>
      <section className="second">
        <div className="container">
          <div className="crousel_heading">
            <h1>Buy Your Dream Car Today</h1>
          </div>
        </div>
        <div className="container">
          <Carousel autoPlay={true} responsive={responsive}>
            {
              success && success?.map((data) => {
                return (
                  <>
                    <div key={data._id} className="boxee">
                      <Link href={"/carView/?" + "_id=" + data._id}>
                        <img src='/b.png' alt="" />
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
              })}
          </Carousel>
        </div>
      </section>

      <section className="third">
        <div className="container">
          <div className="third_sec_text">
            <h1>How it® Works</h1>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
          </div>
          <div className="its_sides">
            <div className="inner_side">
              <img src="./one.png" alt='' />
              <h2>Choose from the best pre-owned cars</h2>
              <p>5000+ Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.</p>
              <Link href="/">View All Cars<BiChevronRight /></Link>
            </div>
            <div className="inner_side" id="spacer">
              <img src="./two.png" alt='' />
              <h2>Choose from the best pre-owned cars</h2>
              <p>5000+ Lorem Ipsum is simply dummy text of </p>
              <Link href="/">View All Cars<BiChevronRight /></Link>
            </div>
            <div className="inner_side">
              <img src="./three.png" alt='' />
              <h2>Choose from the best pre-owned cars</h2>
              <p>                the printing and typesetting industry.</p>
              <Link href="/">View All Cars<BiChevronRight /></Link>
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

      <div className="container">
        <div className="buycar-contenter">
          <h3>Why choose our Service ?</h3>
          <p>Dummy makes buying a used car in Lorem Ipsum convenient and hassle free with a range of
            customer-focused services. Every Spinny Assured second hand car in Lorem Ipsum
            s available for a free home test drive, giving you convenience to test the car
            you desire in a familiar environment. With attractive used car loan options and
            easy loan approvals, buying an old car in Lorem Ipsum is made more accessible and
            affordable. Spinny also provides free home delivery and secure RC transfer to enhance
            the start of your ownership experience.</p>
        </div>
      </div>

      <div className="fourth_imagesec">
        <div className="container">
          <div className="crousel_heading">
            <h1>Cars By Lifestyle</h1>
          </div>
          <div className="SearchByLifestyle__listWrap">
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM">
              <div className=" SearchByLifestyle__imgClass"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./family_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Family</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM" >
              <div
                role="none"
                className=" SearchByLifestyle__imgClass"

                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./adventure_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Adventure</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM" >
              <div
                className=" SearchByLifestyle__imgClass"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./value_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Value</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM" >
              <div
                className=" SearchByLifestyle__imgClass"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./commuter_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Commuter</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM">
              <div className=" SearchByLifestyle__imgClass"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./featured_pack_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Feature packed</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
            <a className="SearchByLifestyle__lifestyleItem styles__forGTM">
              <div className=" SearchByLifestyle__imgClass"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("./luxury_car.jpg")'
                }}
              >
                <div className="SearchByLifestyle__gradient" />
                <div className="SearchByLifestyle__contentSection">
                  <h4>Luxury</h4>
                  <p>Lorem Ipsum is dolr</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      <div className="container">
        <section className="sellcar_flexer">
          <div className="flex_sellcar">
            <h1>Do you want to sell ?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Simply dummy text of the printing and typesetting industry.</p>
            <Link href="/Sellcar">Sell Car</Link>
          </div>
          <div className="flex_sellcar">
            <img src="./wanttosell_car.jpg" alt="" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default index;