import React,{useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { show } from '../store/notificationSlice'

function Adminusers() {
    const [users, setUsers] = useState([])
    let navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/user')
          .then(response => {
            console.log(response.data)
            setUsers(response.data)
          })
          .catch(error => {
    
          })
      
      }, [])

      function remove(e){
        
        if(window.confirm("Are you sure about deleting this?") == true){

            console.log(e)
                axios.delete('http://localhost:5000/api/v1/user/'+e)
                  .then(response => {
                    console.log(response.data)
    
                    dispatch(show({msg:"Item Removed",error :false}))
                    setUsers(users.filter(f => f._id != e))
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
                    <p id="cart-title">Accounts</p>
                    {/* <p id="m-total-amount">Total Amount : $ 100</p> */}
                    <table>
                        <thead>
                            <td>ID</td>
                            <td>Created</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Mobile</td>
                            <td>Admin</td>
                            <td>Remove</td>
                            
                        </thead>
                        <tbody id="table-body">
                            {
                                users.map( u => (
                                    <tr>
                                    <td style={{fontSize:"1px"}}>
                                    {u._id}
                                    </td>
                                    <td>
                                    {u.createdAt}
                                    </td>
                                    <td class="name-order">
                                    {u.username}
                                    </td>
                                    <td>
                                    {u.email}
                                    </td>
                                    <td>
                                    {u.address}
                                    </td>
                                    <td >
                                    {u.number}
                                    </td>
                                    <td>
                                    {u.isAdmin? "yes":"no"}
                                    </td>
                                    <td>
                                        <div>
                                        <FontAwesomeIcon icon={faTrash} onClick={e => remove(u._id) }  className="trash" />
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

export default Adminusers;