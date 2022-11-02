import React from 'react'
import MovieStore from '../Utils/Store'
function Search() {

  const MovieStore = MovieStore()
  console.log(MovieStore)

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
      />
    </section>
  )
}

export default Search
