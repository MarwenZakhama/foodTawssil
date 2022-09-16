import React from 'react';
import '../App.css';
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { hide } from '../store/notificationSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Notification() {
    const noti = useSelector((state) => state.noti)
    const dispatch = useDispatch()
    useEffect(() => {
        if(noti.show){
            setTimeout(function () {
                dispatch(hide())
            },4000)
        }
      }, [noti])
    return (
        <div className={noti.show? 'notiactive':'notinot'}  >
            <div className="noti-content" style={{display:noti.error?"none":"flex"}}>
                <div className='icon-check'>
                    <FontAwesomeIcon  icon={faCheck}/>
                </div>
                <div className='message'>
                    <span className="text text-1">Success</span>
                    <span className="text text-2">{noti.msg}</span>
                </div>
            </div>
             <div className="noti-content" style={{display:noti.error?"flex":"none"}}>
                <div className='icon-error'>
                    <FontAwesomeIcon  icon={faTimesCircle}/>
                </div>
                <div className='message'>
                    <span className="text text-1">Error</span>
                    <span className="text text-2">{noti.msg}</span>
                </div>
            </div> 
        </div>
    );
}


        {/* <div className='noti' style={{right:noti.show?"30px":"0",transform:noti.show?"translate(-5%,0%) scale(1)":"scale(1)",visibility:noti.show?"visible":"hidden"}} >
            <span style={{fontSize: "20px",fontWeight:"bold"}} > {noti.msg} </span>
        </div> */}
export default Notification;