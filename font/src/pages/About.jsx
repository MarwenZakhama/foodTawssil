import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <div id="fcontainer">
          <div className="info">
            <div id="fimg">
              <img src="/twassilapp.png" alt="" />
            </div>
            <div className="infotext">
              <h1>Twassil - تـــــوصّل</h1>
              <div className="About-text">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima natus consequuntur quibusdam accusantium ab officia nam, doloribus eligendi architecto deserunt autem eius pariatur repellendus provident distinctio illum voluptatum molestiae excepturi.</h3>
              </div>
              <div className='social-icons'>
                <a href='https://www.facebook.com/med.scout1' target='_blank' className='icons'><FontAwesomeIcon icon={faFacebook}/><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                <a href='https://www.instagram.com/mohamed.bzeouich/' target='_blank' className='icons'><FontAwesomeIcon icon={faInstagram}/><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                <a href='https://twitter.com' target='_blank' className='icons'><FontAwesomeIcon icon={faTwitter}/><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                <a href='https://www.youtube.com/channel/UCWgGaFwDpErO8iIMVLTgHbA' target='_blank' className='icons'><FontAwesomeIcon icon={faYoutube}/><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
              </div>
            </div>
            

          </div>
        </div> 
    );
}

export default About;