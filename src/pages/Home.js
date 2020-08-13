import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera} from  '@fortawesome/free-solid-svg-icons'

export const Home = () => {
    return (
        <div className="home">
            <div className="banner-text">
                <i><FontAwesomeIcon icon={faCamera}/></i>
                <h2>PHOTO</h2>
                <h4>- - - collection - - -</h4>
                <h1>ToP</h1>
                <h5>- PROFESSIONAL -</h5>
                <h3>TRAVEL</h3>
                <span>2011 - 2020</span>
                <p>UZB</p>
            </div>
        </div>
    )
}