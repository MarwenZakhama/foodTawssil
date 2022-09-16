import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import AdminOrders from './pages/AdminOrders';
import Orderinfo from './pages/Orderinfo';
import Addfoodadmin from './pages/Addfoodadmin';
import Adminusers from './pages/Adminusers';
import Foodlist from './pages/Foodlist';
import Adminfoodedit from './pages/Adminfoodedit';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import FoodDetails from './pages/FoodDetails';
import WishList from './pages/WishList';
import Register from './pages/Register';
import Login from './pages/Login';
import LastStepOrder from './pages/LastStepOrder';
import {Routes , Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Notification from './components/Notification';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.user)
console.log(user);
  return (
    <div>
      
      <Notification/>
      <Nav/>
      <Routes>
  
          <Route path="/adminorders" exact element={user.isAdmin ? <AdminOrders/> :<Home/>} />
          <Route path="/orderinfo/:id" exact element={user.isAdmin ? <Orderinfo/> :<Home/>} />
          <Route path="/addfoodadmin" exact element={user.isAdmin ? <Addfoodadmin/> :<Home/>} />
          <Route path="/foodlist" exact element={user.isAdmin ? <Foodlist/> :<Home/>} />
          <Route path="/adminfoodedit/:id" exact element={user.isAdmin ? <Adminfoodedit/> :<Home/>} />
          <Route path="/adminusers" exact element={user.isAdmin ? <Adminusers/> :<Home/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<WishList/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/login" element={user.email ? <Profile/>: <Login/>} /> 
        <Route path="/laststep" element={user.email ? <LastStepOrder/>: <Login/>} /> 
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/food/:id" element={<FoodDetails/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;
