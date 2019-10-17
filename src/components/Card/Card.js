import React from 'react';
import './Card.scss';
import {saveAnimeToDB} from '../../utils/api';


const Card = ({image, title, episodes, score}) => {

   const saveAnime = () => {
      saveAnimeToDB([{title, image, episodes, score}]);
   };

   return (
      <div className="card">
         <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>
         <h3 className="card-title">{title}</h3>
         <span className="card-episodes">Episodes: {episodes}</span>
         <span className="card-score">Score: {score}</span>
         <button className="card-button" onClick={saveAnime}>Ajouter</button>
      </div>
   );
};

export default Card;