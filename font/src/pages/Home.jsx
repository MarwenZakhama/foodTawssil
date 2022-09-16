import React from 'react';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
    <>
    
        <div>
            <section className="home" id="home">

                <div className="swiper-container home-slider">

                    <div className="swiper-wrapper wrapper">

                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>spicy noodles</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <button className="btn">order now</button>
                            </div>
                            <div className="image">
                                <img src="/home-img-1.png" alt=""/>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>fried chicken</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <button className="btn">order now</button>
                            </div>
                            <div className="image">
                                <img src="/home-img-2.png" alt=""/>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>hot pizza</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <button className="btn">order now</button>
                            </div>
                            <div className="image">
                                <img src="/home-img-3.png" alt=""/>
                            </div>
                        </div>

                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </section>
            
        </div>
        <Footer/>
        </>
    );
}

export default Home;