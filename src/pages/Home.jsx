import { useState } from "react";
import { About } from "../componenets/About";
import { Navbar } from "../componenets/Navbar";
import { Hero } from "../componenets/Hero";
import { Services } from "../componenets/Services";
import { Features } from "../componenets/Features";
import { HowItWorks } from "../componenets/HowItWorks";
import { Testimonials } from "../componenets/Testimonials";
import { FAQ } from "../componenets/FAQ";
import { CTA } from "../componenets/CTA";
import { Footer } from "../componenets/Footer";
import { Blog } from "../componenets/Blog";

export const Home = () => {
   
 return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Features/>
    <HowItWorks/>
    <Testimonials/>
    <Blog/>
    <FAQ/>
    <CTA/>
    <Footer/>

    </>
 );
}