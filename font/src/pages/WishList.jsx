import React, { useEffect ,useState} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function WishList() {
    const [foods, setFoods] = useState([])
    const cart = useSelector((state) => state.cart)
    
    return (
        <div>
        <div id="food-container">
          <div id="food-items" className="food-items">
          
            <div id="mlewi">
              
              <p id="category-name">Wish List</p>
              <div className="flex-menu">
              {
                cart.foods.map(c => (
                
                <div id="item-card">
                  <div id="card-top">
                    <div id="rating" >
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </div>
                    <div id="heart">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <img src={c.food.img} alt="ImageZa" />
                  <p id="item-name">{c.food.name}</p>
                  <p id="item-price">Price : $ {c.food.price}</p>
                  <button className="btn">Add To Card</button>
                </div>
                
                
            ))
          }
                </div>
            </div>

          </div>
        </div>
        </div>
    );
}

export default WishList;