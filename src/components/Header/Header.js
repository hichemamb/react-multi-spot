import React, {useState} from 'react';
import './Header.scss';

import WishList from '../WishList/WishList';
import icon from '../../assets/like.png';

const Header = () => {

   const [showWishList, setShowWishList] = useState(false);

   const showModal = () => {
      setShowWishList(true);
   };

   return (
      <div>
         {showWishList ? (<WishList/>) : null}
         <div className="header">
            <h1 className="header-title">My Anime Wish List</h1>
            <img className="header-icon" onClick={showModal} src={icon} alt="Heart Icon"/>
         </div>
      </div>
   );
};

export default Header;
