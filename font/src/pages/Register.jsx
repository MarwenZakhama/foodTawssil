import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { show } from '../store/notificationSlice'
import axios from 'axios';
import { userregister } from '../store/userSlice'
import { useNavigate } from "react-router-dom";

function Register() {
   const dispatch = useDispatch()
   const [newuser , setNewuser] = useState({})
   let navigate = useNavigate();

   function register(){
      axios.post(`http://localhost:5000/api/v1/user/register`,newuser)
        .then(response => {
          console.log(response.data)
          dispatch(userregister(response.data))
          navigate(`/profile`, { replace: true });
          dispatch(show({msg:"Registration",error :false}))
        })
        .catch(error => {
         dispatch(show({msg:"Existant Email or password incorrect",error :true}))
        })
   }

    return (
        <div>
        <div class="login-con reg">
          <div>
              <h1>Register</h1>
              <div>
                 <div>
                    <label for="">UserName</label>
                 </div>
                  <input type="text" name="username" id="fullname" onChange={(e) => setNewuser ({...newuser,[e.target.name]:e.target.value})}/>
              </div>
              <div>
                <div>
                   <label for="">Phone Number</label>
                </div>
                 <input type="Number" name="phone" id="" onChange={(e) => setNewuser ({...newuser,[e.target.name]:e.target.value})}/>
             </div>
              <div>
                 <div>
                    <label for="">Email</label>
                 </div>
                  <input type="text" name="email" id="email" onChange={(e) => setNewuser ({...newuser,[e.target.name]:e.target.value})}/>
              </div>
              <div>
                 <div>
                    <label for="">Password</label>
                 </div>
                  <input type="password" name="password" id="password" onChange={(e) => setNewuser ({...newuser,[e.target.name]:e.target.value})}/>
              </div>
              <div>
                 <div>
                    <label for="">Confirm Password</label>
                 </div>
                  <input type="password" name="confirmPassword" id="confirmpassword"onChange={(e) => setNewuser ({...newuser,[e.target.name]:e.target.value})}/>
              </div>
              <div>
                <Link to={'/login'}>
                  <span>Already have one? Login</span>
                  </Link>
              </div>
              <button class="btn-log" onClick={(e) => register()}>Register</button>
          </div>
      </div>
        </div>
    );
}

export default Register;