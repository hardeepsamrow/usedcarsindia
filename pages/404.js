/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Head from 'next/head';
const ErrorPage = () => {
    const router = useRouter();
    const handelClick = () => {
        router.push("/");
    }
    return (
        <>
            <Head>
                <title>Error 404 | Used Cars In India</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <link rel="canonical" href="" />
            </Head>
            <Navbar />
            <section className="page_404">
                <div className="container">
                    <div className="for_center">
                        <div className="four_zero_four_bg">
                        </div>
                        <div className="contant_box_404">
                            <h3 className="h2">Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <button onClick={handelClick} className="link_404">
                                Go to Home
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default ErrorPage;