import React from 'react';
import css from './style.module.css'
import Toolbar  from '../../components/toolbar/index';
import Categories from '../Categore/index'
import { searchBox } from '../Categore/search-box';
function App(){
  return (
    <div className={css.app}>
        <searchBox/>
        <Toolbar/> 
      <main>
        <Categories/>
      </main>
    </div>
  );
};


export default App;
