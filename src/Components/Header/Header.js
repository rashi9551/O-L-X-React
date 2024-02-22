import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useContext } from 'react';
import { AuthContext } from '../../store/Context';
function Header() {
  const auth = getAuth();
  const navigate=useNavigate()
  const {user,setUser}=useContext(AuthContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user?`Welcome ${user.displayName}`:<Link to='/login'>Login</Link>}</span>
          <hr />
        </div>
       { user && <span style={{cursor:'pointer'}} onClick={()=>{
        signOut(auth).then(() => {
          setUser(null);
          navigate('/login')
        }).catch((error) => {
          console.log(error);
        });
       }}>Logout</span>}


        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span><Link to='/create'>SELL</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
