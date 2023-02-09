/* eslint-disable @next/next/no-img-element */
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { BiCheckCircle, BiStar, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Head from "next/head";
const blog = () => {
    return (
        <>
            <Head>
                <title>Blog | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <div className="main_coverblog">
                <div className="container">
                    <div className="main_box">
                        <h1>Blog</h1>
                    </div>
                </div>
            </div>
            <section className='two_aboutbox'>
                <div className='container'>
                    <div className='abouttwo_main'>
                        <div className='about1'>
                            <img src="./blog_clipart.jpg" alt="/" />
                        </div>
                        <div className='about2'>
                            <h2>
                                Lorem Ipsum has been the industry standard</h2>
                            <p>
                                Tortor, fames vitae penatibus sed et pharetra mi, mattis est donec amet ac egestas urna, nascetur sem arcu libero, in lacinia amet eget sem neque amet elit venenatis etiam eget eget phasellus quam aliquet sed gravida non varius sit faucibus dictumst quis et arcu dapibus non consequat, venenatis, scelerisque duis purus etiam amet bibendum adipiscing at odio penatibus quis volutpat dis quis egestas lectus.
                            </p>
                            <div className='certifiedboxes'>
                                <div className='certifiedbox'>
                                    <BiCheckCircle />
                                    <h3>Certified Company</h3>
                                </div>
                                <div className='certifiedbox'>
                                    <BiCheckCircle />
                                    <h3>Precise Builder</h3>
                                </div>
                                <div className='certifiedbox'>
                                    <BiCheckCircle />
                                    <h3>Satisfied Guaranteed</h3>
                                </div>
                                <div className='certifiedbox'>
                                    <BiCheckCircle />
                                    <h3>Excellence Support</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {/ {/ ---------------two_aboutbox--------- /} /} */}
            {/*------------- core values------------ */}
            <section className='CoreValues'>
                <div className='container'>
                    <div className='CoreTop_heading'>
                        <h2>All Blogs</h2>
                        <p>Ipsum ornare eu nibh sagittis nunc quisque viverra fringilla egestas dictumst nisl, vestibulum diam nisi <br />suscipit eros, consectetur sapien nullam mi facilisis magna sem</p>
                    </div>
                    <div className='three_Coreboxes'>
                        <div className='corebox'>
                            <div className='icons'>
                                <BiStar />
                            </div>
                            <div className='iconBOx_content'>
                                <h3>First blog here</h3>
                                <p>Sem in eget faucibus massa arcu et elementum sed
                                    massa nulla dolor felis dictumst malesuada non.</p>
                                <div className="link_more">
                                    <Link href="/bloginner">Read More</Link>
                                    <BiChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='corebox' id="core_id">
                            <div className='icons'>
                                <BiStar />
                            </div>
                            <div className='iconBOx_content'>
                                <h3>Second blog here</h3>
                                <p>Sem in eget faucibus massa arcu et elementum sed
                                    massa nulla dolor felis dictumst malesuada non.</p>
                                <div className="link_more">
                                    <Link href="/bloginner">Read More</Link>
                                    <BiChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='corebox'>
                            <div className='icons'>
                                <BiStar />
                            </div>
                            <div className='iconBOx_content'>
                                <h3>Third blog here</h3>
                                <p>Sem in eget faucibus massa arcu et elementum sed
                                    massa nulla dolor felis dictumst malesuada non.</p>
                                <div className="link_more">
                                    <Link href="/bloginner">Read More</Link>
                                    <BiChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default blog