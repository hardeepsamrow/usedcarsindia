/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Head from "next/head";
const bloginner = () => {
    return (
        <>
            <Head>
                <title>Blog View | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className="bloginner_main">
                <div className="container">
                    <div className="bloginner_one">
                        <div className="crousel_heading">
                            <h1>Main blog heading is here</h1>
                        </div>
                        <img src="./bloginnerone.jpg" alt="" />
                        <h3>10 Dec 2022</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                        <p>Engine: 3.0-litre 6-cylinder turbo petrol (345 PS & 450 Nm), 3.0-litre 6-cylinder turbo diesel (268 PS & 620 Nm), 3.0-litre 6-cylinder turbo diesel (405 PS & 760 Nm)</p>
                        <p>Transmission: 8-speed torque converter automatic</p>
                        <p>Mileage: 11.1 – 14.7 kmpl</p>
                        <p>Airbags: 7</p>
                        <p>Fuel Type: Petrol, diesel</p>
                        <p>Seating Capacity: 7</p>
                        <p>Body Type: Full-size SUV</p>
                        <p>14.9-inch infotainment and 12.3-inch instrument panel</p>
                        <p>Adaptive air suspension</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default bloginner