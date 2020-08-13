import React from 'react'
import {stack as Menu} from 'react-burger-menu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faGrinBeam, faImages, faAddressCard} from  '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {ButtonGroup, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default props => {
    return (
        <Menu {...props} right>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">UZB</Button>
                <Button variant="secondary">RUS</Button>
            </ButtonGroup>
            <div className="telegramm">
                <a href="/" className="p-0"><FontAwesomeIcon icon={faTelegram}/></a>
            </div>
            <div className="sidebar-title">
                <h3>Khusan Juraev</h3>
            </div>
            <NavLink to={'/'} className="menu-item">
                <FontAwesomeIcon icon={faHome}/>
                <span>home</span>
            </NavLink>

            <NavLink to={'/images'} className="menu-item">
                <FontAwesomeIcon icon={faImages}/>
                <span>images</span>
            </NavLink>

            <NavLink to={'/about'} className="menu-item">
                <FontAwesomeIcon icon={faGrinBeam}/>
                <span>about</span>
            </NavLink>

            <NavLink to={'/contact'} className="menu-item">
                <FontAwesomeIcon icon={faAddressCard}/>
                <span>contact</span>
            </NavLink>
        </Menu>
    );
};
