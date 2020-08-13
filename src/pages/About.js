import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faTelegramPlane, faInstagram, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Footer} from "../components/footer";

export const About = () => (
    <div className="about">
        <div className="about-banner">
            <div className="about-title">
                <h2>KHUSAN JURAEV</h2>
                <p>professional photograph</p>
            </div>
        </div>
        <div className="about-info">
            <div className="row">
                <div className="col-lg-12 about-info-one">
                    <h3>Lorem Ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores autem doloremque eligendi eos error eum expedita
                        fuga fugit laboriosam magnam natus neque officiis quaerat quas
                        reiciendis, rem suscipit voluptas! Iure?
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 about-info-photo">
                    <img src={require("../img/photograph.jpg")} alt="photograph"/>
                </div>
                <div className="col-lg-6 about-info-two">
                    <h3>about me</h3>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur dicta eligendi ipsum quod suscipit vero.
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus aliquid at autem commodi consequatur delectus dolorem
                        ea eius harum id illum ipsa, iure libero magnam minima minus modi
                        nesciunt nobis odio officia omnis porro quam quisquam quos recusandae
                        sed sequi similique sit soluta vitae? Laborum nam odio tenetur. Magnam, nobis.
                    </p>
                    <div className="about-info-icons">
                        <a href="/"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="/"><FontAwesomeIcon icon={faTelegramPlane}/></a>
                        <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="/"><FontAwesomeIcon icon={faVk}/></a>
                        <a href="/"><FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);