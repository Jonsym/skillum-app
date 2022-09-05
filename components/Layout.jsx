import Head from "next/head";
import {Header} from "./Header";
import {Aliados, CTA, Experts, FeaturedCourse, Hero, Icons} from "./home";
import {Footer} from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet"/>
            </Head>
            <Header/>
            <div className='py-1'>
                {children}
            </div>
            <Footer />
        </>
    )
}
