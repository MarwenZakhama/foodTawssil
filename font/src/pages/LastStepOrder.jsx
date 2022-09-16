import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import React ,{useState}from 'react';
import { show } from '../store/notificationSlice'
import { empty } from '../store/cartSlice'
import{Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LastStepOrder() {
    const store = useSelector((state) => state)
    const [order,setOrder]= useState({...store.user.user})
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    function sendOrder(e){
        setOrder({...order,[e.target.name]:e.target.value})
       
    }
function send() {
    var fr = store.cart.foods.map((f) => ( {name : f.food.name,...f.foodDetails}) )
    var tot = {foods:fr,name:order.username,number:order.number,address:order.address,totals:store.cart.totalPrice,userid:store.user.user._id}
    console.log(tot);
    if(!store.cart.totalPrice == 0 ){
        axios.post(`http://localhost:5000/api/v1/order`,tot)
            .then(response => {
            console.log(response.data)
            
                dispatch(show({msg:"order sent",error :false}))
                navigate("/", { replace: true });
                dispatch(empty())
            
            
            
            })
            .catch(error => {
                dispatch(show({msg:"Failed",error :true}))
            })
    }else{
        dispatch(show({msg:"Select Food from the menu first",error :true}));
    }
}

    console.log(store)
    return(
        <div>
            <div id="last-step" className="last-step">

                <div id="food-container">      

                <form action="">
                    
                    <h1 className="title">Last Step</h1>
                    <div className="inputBox">
                        <div className="input">
                            <span>your name</span>
                            <input type="text" name='username' onChange={e => sendOrder(e)} defaultValue={store.user.user.username} placeholder='your name'/>
                        </div>
                        <div className="input">
                            <span>phone number</span>
                            <input type="number"name='number' onChange={e => sendOrder(e)} defaultValue={store.user.user.number} placeholder='your number'/>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>Location Adress</span>
                            <input type="text" name='address' onChange={e => sendOrder(e)} defaultValue={store.user.user.address}  placeholder='your adress'/>
                        </div>
                        <div className="input">
                            <span>total price</span>    
                            <input  name='orderprice'  disabled Value={store.cart.totalPrice + " $"} type="text" placeholder='Monney'/>
                        </div>
                    </div>
                    <div className='submitting-location'>

                        <input type="button" value="Submit" onClick={e => send()} className='btn'/>
                        <Link to='/cart'><input type="submit" value="Back" className='btn-cancel'/></Link>
                    </div>
                    
                    
                </form>



                </div>
                
            </div>
        </div>
    );
}
export default LastStepOrder;