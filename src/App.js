import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import CardList from './components/CardList/CardList.js';

const App = () => {
   return (
      <div>
         <Header/>
         <CardList/>
      </div>
   );
};

export default App;
