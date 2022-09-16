import React ,{useState}from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark,faMagnifyingGlass,faHeart,faShoppingCart,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import{Link,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user.user)

    const [mobile,setMobile]= useState(false)
    const [admin,setAdmin]= useState(false)
    return (
        <div>
            <header>
            
                <Link to='/' className="logo"><img src="/TAWSIL_logo.png" alt="logo" style={{width: "45px"}}/>تــــــوصّل</Link>
                <nav className={mobile? "navbarmobile":"navbar"}>
                {/* <Link to='/' className="active">home</Link> */}
                
                {
                    user.isAdmin && (
                        <a onClick={()=>setAdmin(!admin)} style={{background:"crimson", fontWeight:"bolder"}}>Admin</a>
                    )
                }
                <div className={admin? "navadmin":"navadminhide"}>
                {
                    user.isAdmin && (
                        <NavLink  to='/adminorders' >Orders</NavLink>
                    )
                }
                {
                    user.isAdmin && (
                    <NavLink  to='/adminusers' >Users</NavLink>
                    )
                }
                {
                    user.isAdmin && (
                    <NavLink  to='/foodlist' >Foods</NavLink>
                    )
                }
                </div>
                
                
                {/* {
                    
                    user.isAdmin && (
                        <NavLink  to='/addfoodadmin' style={{background:"crimson", fontWeight:"bolder"}}>Add Food</NavLink>
                    )
                } */}
                
                <NavLink  to='/' >home</NavLink>
                <NavLink  to='/menu'>menu</NavLink>
                <NavLink  to='/cart'>order</NavLink>
                <NavLink  to='/about'>about </NavLink>
                
                </nav>
                
                

                <div className="icons">
                    <NavLink  to='#' id='menu-bars' onClick={()=>setMobile(!mobile)} className="icons-r">{mobile?<FontAwesomeIcon  icon={faXmark}/>:<FontAwesomeIcon  icon={faBars}/>}</NavLink>
                    <NavLink  to='/search' id="search-icon" className="icons-r"><FontAwesomeIcon icon={faMagnifyingGlass}/></NavLink>
                    <NavLink  to='/wishlist' className='to-be-notif-icon'><FontAwesomeIcon icon={faHeart} className="icons-r" /><span className='items-notif'>{cart.totalItem}</span></NavLink>
                    <NavLink  to='/cart' className='to-be-notif-icon'><FontAwesomeIcon icon={faShoppingCart} className="icons-r" /><span className='items-notif'>{cart.totalItem}</span></NavLink>
                    <NavLink  to='/login' className="icons-r"><FontAwesomeIcon icon={faUserCircle} /></NavLink>
                </div>

            </header>
        
        
        </div>
    );
}

export default Nav;