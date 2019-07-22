import React from 'react';
import './Card.scss';


const Card = ({key, image, title, episodes, score}) => {
   return (
      <div className="card" key={key}>
         <div className="card-image"  style={{ backgroundImage: `url(${image})`}}></div>
         <h3 className="card-title">{title}</h3>
         <span className="card-episodes">Episodes: {episodes}</span>
         <span className="card-score">Score: {score}</span>
      </div>
   );
};

export default Card;