import React from 'react';
import '../App.css';
import axios from "axios"
// import { Link } from "react-router-dom";
import  { useEffect ,useState} from "react";
import { useNavigate ,useParams} from 'react-router-dom';

function Orderinfo() {
    const [order, setOrder] = useState([])
    let navigate = useNavigate();
    let {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/order/'+id)
          .then(response => {
            console.log(response.data)
            setOrder(response.data)
          })
          .catch(error => {
    
          })
      
      }, [])
    return (
        <div className='orderinfo'>
            
            <div>Time : {order.createdAt}</div>
            <div>Customer  : {order.name}</div>
            <div>Mobile : {order.number}</div>
            <div>Address : {order.address}</div>
            <div>----------------------</div>
            <div> Items : 
                {order?.foods?.map(f => (
                     <div>
                        <div>Item Name : {f.name} </div>
                        <div>Size : {f.size}</div>
                        <div>Supplements :
                            {f.sup?.map(s => (
                                <span> + {s}  </span> 
                            ))}
                        </div>
                        <div>Item Price : {f.totalPrice} $</div>
                        <div>Quantity : {f.qte}</div>
                        -----------
                    </div>
                ) )}
                   
                    
            </div>
            
            <div>Total Price = {order.totals} $</div>
            <div>Delived : {order.delivered?'yes':"no"}</div>
        </div>
    );
}

export default Orderinfo;