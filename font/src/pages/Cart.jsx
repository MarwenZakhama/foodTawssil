import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { addQte,subQte,removeQte } from '../store/cartSlice'
import { show } from '../store/notificationSlice'


function Cart() {
  const cart = useSelector((state) => state.cart)
  
  const dispatch = useDispatch()
  function remove(e){
    dispatch(removeQte(e));
    dispatch(show({msg:"Item Removed",error :false}))
  }
  return (
    <div>
      <div id="container" className="containerCart">
        {/* Left Side Menu Order */}
        {/* <div id="fcontainer">
          <div className="info">
            <div id="fimg">
              <img src="/mlewi.png" alt="" />
            </div>

            <h1>Mlewi Mahfood</h1>
            <div className="sizes">
              <h3>Size</h3>
              <div className="groupcheck">
                <div className="group">
                  <input type="checkbox" id="medium" />
                  <label for="medium">Medium = 2 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="large" />
                  <label for="large">Large = 3 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="xl" />
                  <label for="xl">XL = 4 $</label>
                </div>
              </div>
            </div>
            <div className="supplements">
              <h3>Supplements</h3>
              <div className="groupcheck">
                <div className="group">
                  <input type="checkbox" id="thon" />
                  <label for="thon">Thon + 1 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="jben" />
                  <label for="jben">Jben + 0.5 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="atham" />
                  <label for="ahon">Atham + 0.5 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="kweka" />
                  <label for="kweka">Kweka + 1 $</label>
                </div>
                <div className="group">
                  <input type="checkbox" id="mergez" />
                  <label for="mergez">Mergez + 1 $</label>
                </div>
              </div>
            </div>
            <div className="total-of-item">
              <h2>Item Price :</h2>
              <h4> 8 $</h4>
            </div>
            <div id="space">
              <button className="btn">Order Now</button>
              <button className="btn-cancel">Cancel Now</button>
            </div>
          </div>
        </div> */} 
        {/* Left Side Menu Order

        {/* Middle  */}
        <div id="food-containerCart">
          <div id="cart-page" class="cart-toggle">
            <p id="cart-title">Cart Items</p>
            {/* <p id="m-total-amount">Total Amount : $ 100</p> */}
            <table>
              <thead>
                <td>Remove</td>
                <td>Item</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
              </thead>
              <tbody id="table-body">
              {
                cart.foods.map( (c,i) => (
                
              <tr>
                  <td>
                    <div   >
                      <FontAwesomeIcon icon={faTrash} className="trash" onClick={e => remove(i) }/>
                    </div>
                  </td>
                  <td>
                    <img src={c.food.img} alt="img" />
                  </td>
                  <td className="name-order">{c.food.name} <span> ( {c.foodDetails.size} )</span>
                  {
                    c.foodDetails.sup.map(d => (
                    <span> + {d}</span>
                    ))
                  }
                  </td>
                  <td>{c.foodDetails.totalPrice}</td>
                  <td className="QuantityFood">
                    <button class="decrease-item" onClick={e =>dispatch(subQte(i)) } >-</button>
                    <span>{c.foodDetails.qte}</span>
                    <button class="increase-item" onClick={e =>dispatch(addQte(i)) } >+</button>
                  </td>
                </tr>
                  ))
              }
              

                
              </tbody>

             
            </table>
          </div>
        </div>
        {/* Middle */}

        {/* Right */}
        <div id="cartCart">
          <div class="taste-header"></div>
          {/* <!-- Checkout place --> */}
          <div id="checkout" class="cart-toggle">
            <p id="total-item">Total Item : {cart.totalItem}</p>
            <p id="total-price">Total Price : {cart.totalPrice.toFixed(1)} $</p>
            <p id="delievery">Delivery Cost between 4 and 2 Dinars</p>
            <Link to={'/laststep'}>
            <button class="cart-btn">Checkout</button>
            </Link>
          </div>
        </div>
        {/* Right */}
      </div>
    </div>
  );
}

export default Cart;
