import React from 'react'
import MovieStore from '../Utils/Store'

function Search () {
  const movieStore = MovieStore()

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        onChange={e => movieStore.filterValue(e.target.value)}
      />
    </section>
  )
}

export default Search
