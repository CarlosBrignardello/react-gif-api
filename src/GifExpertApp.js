import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(["Howl's Moving Castle"])



  return ( 
    <>
      <h2>React Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />


      <ol>
        { 
          categories.map( ( cat ) => (
          <GifGrid 
            category={ cat } 
            key={ cat }  
          /> 
          ))
        }
      </ol>
    </>
   );
}
 
export default GifExpertApp;