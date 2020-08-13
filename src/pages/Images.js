import React from 'react'
import Gallery from "../components/Gallery"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLevelDownAlt} from "@fortawesome/free-solid-svg-icons"
import {Footer} from "../components/footer";


export const Images = () => {
    return (
        <div className="vignette">
            <div className="vignette-title">
                <h2>Collection:
                    <span>
                        <FontAwesomeIcon icon={faLevelDownAlt}/>
                    </span>
                </h2>
            </div>
            <Gallery/>
            <Footer/>
        </div>
    )
};