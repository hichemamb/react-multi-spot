import React from 'react';
import './WishList.scss';

import close from '../../assets/close.png';


const WishList = () => {
   return (
      <div className='wish-list'>
         <img  className='wish-list__icon' src={close} alt="Close Icon"/>
      </div>
   );
};

export default WishList;
