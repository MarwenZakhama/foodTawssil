import React,{useState} from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { show } from '../store/notificationSlice'


function Foodlist() {

    const [foods, setFoods] = useState([])
    const [food, setFood] = useState()
    let navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/food')
          .then(response => {
            console.log(response.data)
            setFoods(response.data)
          })
          .catch(error => {
    
          })
      
      }, [])



      
      function remove(e){
        
        if(window.confirm("Are you sure about deleting this?") == true){

            console.log(e)
                axios.delete('http://localhost:5000/api/v1/food/'+e)
                  .then(response => {
                    console.log(response.data)
    
                    dispatch(show({msg:"Item Removed",error :false}))
                    setFoods(foods.filter(f => f._id != e))
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
                    
                    <div id='add-food'>
                    <p id="food-list-title">Food List</p>
                        <span id="add-food-btn" onClick={e=> navigate(`/addfoodadmin`)}>Add food</span>
                    </div>
                    
                    <table>
                        <thead>
                            <td>Category</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Modify</td>
                            <td>Remove</td>
                            
                        </thead>
                        <tbody id="table-body">
                        {
                            foods.map((food) => (
                                <tr>
                                    <td>
                                        {food.category}
                                    </td>
                                    <td class="name-order">
                                        {food.name}
                                    </td>
                                    <td>
                                        {food.price} $
                                    </td>
                                    <td >
                                        <FontAwesomeIcon icon={faCircleInfo} onClick={(e) => navigate(`/adminfoodedit/${food._id}`, { replace: true })} className="admininfo" />
                                    </td>
                                    <td>
                                        <div>
                                        <FontAwesomeIcon icon={faTrash} onClick={e => remove(food._id) } className="trash" />
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

export default Foodlist;