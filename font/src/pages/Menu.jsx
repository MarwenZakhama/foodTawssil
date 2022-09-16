import React, { useEffect ,useState} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import { Link } from "react-router-dom";

function Menu() {
  const [foods, setFoods] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/food')
      .then(response => {
        console.log(response.data)
        setFoods(response.data)
      })
      .catch(error => {

      })
  
  }, [])


  return (
    <div>
      <div id="container" className="containerMenu">
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
        {/* Left Side Menu Order */}

        {/* Middle  */}

        <div id="food-container">
          <div id="food-items" className="food-items">
          
            <div id="mlewi">
              
              <p id="category-name">Food Menu</p>
              <div className="flex-menu">
              {
                foods.map(food => (
                  
                  
                <div id="item-card">
                  <div id="card-top">
                    <div id="rating">
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </div>
                    <div id="heart" onClick={e =>console.log("hello")}>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <Link to={`/food/${food._id}`} key={food._id}>
                  <img src={food.img} alt="ImageZa" />
                  <p id="item-name">{food.name}</p>
                  </Link>
                  <p id="item-price">Price : $ {food.price}</p>
                  <Link to={`/food/${food._id}`} key={food._id}>
                  <button className="btn">Add To Card</button>
                  </Link>
                </div>
                
                
            ))
          }
                </div>
            </div>

          </div>
        </div>
        {/* Middle */}

        {/* Right */}
        {/* <div id="cart">
          <div id="category-list">
            <p class="item-menu">Go For Hunt</p>
            <div class="border"></div>
            <div class="list-card">
              <img src="/mlewi.png" alt="list" />
              <div class="list-name">Mlewi</div>
            </div>
            <div class="list-card">
              <img src="/Djej_hoch.png" alt="list" />
              <div class="list-name">Djej</div>
            </div>
            <div class="list-card">
              <img src="/makloub.png" alt="list" />
              <div class="list-name">Makloub</div>
            </div>
            <div class="list-card">
              <img src="/pizza.png" alt="list" />
              <div class="list-name">Pizza</div>
            </div>
            <div class="list-card">
              <img src="/kaskrout.png" alt="list" />
              <div class="list-name">Kaskrout</div>
            </div>
            <div class="list-card">
              <img src="/tacos.png" alt="list" />
              <div class="list-name">Tacos</div>
            </div>
          </div>
        </div> */}
        {/* Right */}
      </div>
    </div>
  );
}

export default Menu;
