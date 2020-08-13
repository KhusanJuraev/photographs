import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faTelegramPlane, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title">
                <a href="/"><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href="/"><FontAwesomeIcon icon={faTelegramPlane}/></a>
                <strong>Khusan Juraev</strong>
                <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="/"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    )
};