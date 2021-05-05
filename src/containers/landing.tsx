import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import { TestimonialsList } from "../constants/testimonials";
import introduceVideo from "../shared/images/introduce-video.jpg";

function LandingPage() {

    return (<div className="tl-container">
        <Header />
        <div className="video-container">
            <div className="video-box">
                <video autoPlay={true} playsInline={true} muted={true} loop={true} className="video-box-item" id="backgound-video" poster={introduceVideo}>
                    <source src="https://bionictraderassets.s3.amazonaws.com/videos/introduce-video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
        <div className="testiomials-container">
            <div className="testimonials-box">
                <div className="testimonials-row">
                    {TestimonialsList.map((item) => {
                        return <div key={item.name} className="testimonials-item">
                            <div className="item-message"> "{item.message}" </div>
                            <div className="item-name"> {item.name} </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export default LandingPage