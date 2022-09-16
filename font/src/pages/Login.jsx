import React from 'react';
import '../App.css';
import{Link} from "react-router-dom"
import axios from 'axios';
import { useState } from 'react';
import { userlogin } from '../store/userSlice'
import { show } from '../store/notificationSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [user, setUser] = useState({})
    function login() {
        axios.post(`http://localhost:5000/api/v1/user/login`,user)
        .then(response => {
          console.log(response.data)
          dispatch(userlogin(response.data))
          navigate(`/`, { replace: true });
          dispatch(show({msg:"Login Success",error :false}))
        })
        .catch(error => {
            dispatch(show({msg:"login failed, check password / Email",error :true}))
        })
    }
    return (
        <div>
        <div class="login-con">
          <div>
              <h1>Login</h1>
              <div>
                 <div>
                    <label for="">Email or UserName</label>
                 </div>
                  <input type="text" name="email" onChange={(e) => setUser({...user,[e.target.name]:e.target.value})} id=""/>
              </div>
              <div>
                 <div>
                    <label for="">Password</label>
                 </div>
                  <input type="password" name="password" id="" onChange={(e) => setUser({...user,[e.target.name]:e.target.value})} />
              </div>
              <div class="flex">
                  <input type="checkbox" name="" id=""/>
                  <label for="">Remembre Me</label>
              </div>
              <div>
                <Link to={"/register"}>
                <span>You Don't have an Account? Register Now!</span>
                </Link>
            </div>
              <button class="btn-log" onClick={(e) => login()} > Login</button>
          </div>
      </div>
        </div>
    );
}

export default Login;