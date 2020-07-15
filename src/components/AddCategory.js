import React, { useState } from 'react';

const AddCategory = ({ setCategories, categories }) => {

  const [ inputValue, setInputValue ] = useState('Ingresa una categoria')

  const handleInputChange = e => {
    setInputValue( e.target.value )
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCategories( categ => [ inputValue, ...categ  ] )
  }

  return ( 
    <>
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
    </>
   );
}
 
export default AddCategory;