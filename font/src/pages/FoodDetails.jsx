import React,{useEffect,useState} from "react";
import "../App.css";
import axios from "axios"
import { useParams } from "react-router";
import { addFood } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { show } from '../store/notificationSlice'


function FoodDetails() {
    const [food, setFood] = useState({})
    const [foodDetails, setFoodDetails] = useState({sup:[],size:"simple",totalPrice:0})
    let { id } = useParams();
    const dispatch = useDispatch()
    function changesup(e) {
        console.log(e.target.name);
        if(e.target.checked){
            setFoodDetails({...foodDetails,sup:[...foodDetails.sup,e.target.name],totalPrice:foodDetails.totalPrice + parseFloat(food.sup[0][e.target.name])})
        }else{
            var l ={...foodDetails,totalPrice:foodDetails.totalPrice - parseFloat(food.sup[0][e.target.name])};
            l.sup = l.sup.filter(s => s != e.target.name)
            setFoodDetails(l)
        }
    }
    function addtocart(e) {
        var f = {food,foodDetails:{...foodDetails,qte:1}};
        console.log(f);
        dispatch(addFood(f))
        dispatch(show({msg:"Added To Cart",error :false}))
    }
    function changesize(e) {
      var f = {...foodDetails}
      f.totalPrice -= parseFloat(food.size[0][f.size])
      f.totalPrice +=parseFloat( food.size[0][e.target.value])
        setFoodDetails({...f,size:e.target.value})
       
    }
    useEffect(() => {
      axios.get(`http://localhost:5000/api/v1/food/find/${id}`)
        .then(response => {
          console.log(response.data)
          setFood(response.data)
          setFoodDetails({...foodDetails,totalPrice : response.data.price})
          console.log(food.size);
        })
        .catch(error => {
  
        })
    
    }, [])
  return (
             <div id="fcontainer">
          <div className="info">
            <div id="fimg">
              <img src={food.img} alt="" />
            </div>
            <div className="infotext">
            <h1>{food.name}</h1>
            <div className="sizes">
              <h3>Size</h3>
              <div className="groupcheck">
                {food.size && Object.keys(food.size[0]).map((k,i) =>(
                    <div className="group" key={k}>
                    <input type="radio" name={"sizes"} value={k}  defaultChecked={i==0?true:false} onChange={e => changesize(e)} />
                    <label for="thon"> {k} + {food.size[0][k]} $ </label>
                  </div>
                ) )
                
                }
              </div>
            </div>
            <div className="supplements">
              <h3>Supplements</h3>
              <div className="groupcheck">
              {food.sup && Object.keys(food.sup[0]).map(k =>(
                    <div className="group" key={k}>
                    <input type="checkbox" name={k} onChange={e => changesup(e)} />
                    <label for="thon">{k} + {food.sup[0][k]} $ </label>
                  </div>
                ) )
                
                }
              </div>
            </div>
            <div className="total-of-item">
              <h2>Item Price :</h2>
              <h4>  {foodDetails.totalPrice.toFixed(1)} $ </h4>
            </div>
            <div id="space">
              <button className="btn" onClick={e => addtocart(e) }>Order Now</button>
              {/* <button className="btn-cancel">Cancel Now</button> */}
            </div>
          </div>
          </div>
        </div> 
  )
}

export default FoodDetails;
