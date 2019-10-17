import React, {useState, useEffect} from 'react';
import './CardList.scss';
import Card from '../Card/Card.js';
import {getAnime} from '../../utils/api';

const CardList = () => {

   const [inputValue, setInputValue] = useState({name: ''});
   const [list, setList] = useState([]);

   useEffect(() => {
   }, []);

   const handleChange = (content) => event => {
      setInputValue({...inputValue, [content]: event.target.value});
   };

   const lookForAnime = () => {
      getAnime(inputValue.name)
         .then((data) => setList(data.results));
   };

   return (
      <div className='card-list'>
         <div className="action-box">
            <input className='search-anime' type="text" placeholder="Anime - ex. Naruto"
                   onChange={handleChange('name')}/>
            <button className='button-anime' onClick={lookForAnime}>Ajouter</button>
         </div>
         <div className='anime-list'>
            {list.map((element, index) =>
               <Card
                  key={index}
                  image={element.image_url}
                  title={element.title}
                  episodes={element.episodes}
                  score={element.score}
               />
            )}
         </div>
      </div>
   );
};

export default CardList;
