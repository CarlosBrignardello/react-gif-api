import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'



export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs( category )


  return (
    <>
    <h3> {category} </h3>
    { loading && 'Cargando...' }
    <div className="card-grid">
      {
        data.map( img => (
          <GifGridItem 
            {...img}
            key={img.id}  
          />
        ))
      }
    </div>
    </>
  )
}
