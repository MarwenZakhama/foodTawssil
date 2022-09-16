import '../App.css';
import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { userlogin } from '../store/userSlice'
import axios from 'axios';
import { show } from '../store/notificationSlice'

function Profile() {
    
    const store = useSelector((state) => state)
    const [profile , setProfile] = useState({})
    const navigate = useNavigate ()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    function modify(e){
        setProfile({...profile,[e.target.name]:e.target.value})
    }
    function save(e){
        axios.put(`http://localhost:5000/api/v1/user/update`,{...profile,id:user.user._id})
        .then(response => {
          console.log(response.data)
          dispatch(userlogin(response.data))
          navigate("/profile", { replace: true });
          dispatch(show({msg:"Saved",error :false}))
        })
        .catch(error => {
            dispatch(show({msg:"Saving Failed",error :true}))
        })
    }

    return(
        <div>
            <div id="last-step" className="last-step">

                <div id="food-container">      

                <form action="">
                    
                    <h1 className="title">Your Profile</h1>
                    <div className="inputBox">
                        <div className="input">
                            <span>your name</span>
                            <input type="text" name='username' defaultValue={store.user.user.username} placeholder='your name' onChange={e => modify(e)}/>
                        </div>
                        <div className="input">
                            <span>your number</span>
                            <input type="number" name='number' defaultValue={store.user.user.number} placeholder='your number'onChange={e => modify(e)}/>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>your email adress</span>
                            <input type="text" name='email' defaultValue={store.user.user.email}  placeholder='foulan@gmail.com' onChange={e => modify(e)}/>
                        </div>
                        <div className="input">
                            <span>Location Adress</span>
                            <input type="text" name='address' defaultValue={store.user.user.address}  placeholder='your adress' onChange={e => modify(e)}/>
                        </div>
                    </div>
                    <div className="inputBox_newPassword">
                        <div className="input">
                            <span>Old password</span>
                            <input type="password" autoComplete='off' name='oldPassword' placeholder='your old password' onChange={e => modify(e)}/>
                        </div>
                        <div className="input">
                            <span>New Password</span>
                            <input type="password" name='newPassword' placeholder='your new password' onChange={e => modify(e)}/>
                        </div>
                        <div className="input">
                            <span>Confirm Password</span>
                            <input type="password" name='confirmPassword' placeholder='your new password' onChange={e => modify(e)}/>
                        </div>
                    </div>
                    <div className='submitting-location'>

                        <input type="button" value="Save" className='btn' onClick={e=> save(e)}/>
                    </div>
                    
                    
                </form>



                </div>
                
            </div>
        </div>
    );
}
export default Profile;