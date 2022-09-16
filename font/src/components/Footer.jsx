import React from 'react';
import '../App.css';
import{Link} from 'react-router-dom'
function Footer() {
    return (
        <div>
            <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d1d1d" fill-opacity="1" d="M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,288C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#1d1d1d" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,128C640,107,800,117,960,138.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                <div className='websitename'> Twassil - تــــــوصّل</div>
                <div className="box-container">
                    <div className="box">
                        <h3>locations</h3>
                        <Link to="#">Moknine</Link>
                        <Link to="#">Ksar Hlel</Link>
                        <Link to="#">Sayeda</Link>
                        <Link to="#">Tebolba</Link>
                        <Link to="#">Lamta</Link>
                    </div>
                    <div className="box">
                        <h3>pages</h3>
                        <Link to="/">Home</Link>
                        <Link to="/menu">menu</Link>
                        <Link to="/cart">order</Link>
                        <Link to="/about">about us</Link>
                        <Link to="/profile">account</Link>
                    </div>
                    <div className="box">
                        <h3>Contact Info</h3>
                        <Link to="#">+216 42 190 200</Link>
                        <Link to="#">+216 42 390 200</Link>
                        <Link to="#">twassil@gmail.com</Link>
                        <Link to="#">Mohamed@gmail.com</Link>
                        <Link to="#">monastir. moknine - 5050</Link>
                    </div>
                    <div className="box">
                        <h3>follow us</h3>
                        <a href='https://www.facebook.com/med.scout1' target='_blank' >Facebook</a>
                        <a href='https://www.instagram.com/mohamed.bzeouich/' target='_blank' >Instaram</a>
                        <a href='https://www.facebook.com/med.scout1' target='_blank' >WhatsApp</a>
                        <a href='https://www.youtube.com/channel/UCWgGaFwDpErO8iIMVLTgHbA' target='_blank' >Youtube</a>
                        
                    </div>
                </div>
                <div className="credit"> copyright @ 2022 by <span>Marwen Zakhama GoMyCode</span></div>
            </div>
        </div>
    );
}

export default Footer;