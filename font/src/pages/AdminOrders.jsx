import React,{useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { show } from '../store/notificationSlice'


function AdminOrders() {
    const [orders, setOrders] = useState([])
    let navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/order')
          .then(response => {
            console.log(response.data)
            setOrders(response.data)
          })
          .catch(error => {
    
          })
      
      }, [])


      function remove(e){
        
        if(window.confirm("Are you sure about deleting this?") == true){

            console.log(e)
                axios.delete('http://localhost:5000/api/v1/order/'+e)
                  .then(response => {
                    console.log(response.data)
    
                    dispatch(show({msg:"Item Removed",error :false}))
                    setOrders(orders.filter(f => f._id != e))
                  })
                  .catch(error => {
                    dispatch(show({msg:"Deleting Failed",error :true}))
                  })
        }
      }

    return (
        <div>
            <div id="containerAdminOrders" className="containerAdminOrders">
                <div id="#food-containerCart">
                    <div id="cart-page" class="cart-toggle">
                    <p id="cart-title">Clients Orders</p>
                    {/* <p id="m-total-amount">Total Amount : $ 100</p> */}
                    <table>
                        <thead>
                            <td>Delivered</td>
                            <td>Time</td>
                            <td>Customer</td>
                            <td>Mobile</td>
                            <td>Address</td>
                            <td>Items</td>
                            <td>Total Price</td>
                            <td>Remove</td>
                            
                        </thead>
                        <tbody id="table-body">
                            {
                                orders.map(o => (
                                    <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        {o.createdAt}
                                    </td>
                                    <td class="name-order">
                                        {o.name}
                                    </td>
                                    <td>
                                        {o.number}
                                    </td>
                                    <td>
                                        {o.address}
                                    </td>
                                    <td onClick={(e) => navigate(`/orderinfo/${o._id}`, { replace: true })}>
                                        <FontAwesomeIcon icon={faCircleInfo} className="admininfo" />
                                    </td>
                                    <td>
                                        {o.totals}$
                                    </td>
                                    <td>
                                        <div>
                                        <FontAwesomeIcon icon={faTrash} onClick={e => remove(o._id) } className="trash" />
                                        </div>
                                    </td>
                                </tr>
                                ))
                            }
                          
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;