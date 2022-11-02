import React from 'react'
import MovieStore from '../Utils/Store'

function Movieslist () {
  const movieStore = MovieStore()

  const filteredMovies = movieStore.movies.filter(item => {
    return item.name.toLowerCase().includes(movieStore.filter.toLowerCase())
  })
  return (
    <>
      {filteredMovies.map((movie, index) => {
        return (
          <section key={index}>
            <ul className='styled w-100 pl-0' data-testid='moviesList'>
              <li
                className='flex slide-up-fade-in justify-content-between'
                style={{ borderBottom: '2px solid var(--primary-color)' }}
              >
                <div className='layout-column w-40'>
                  {/* use this header for movie name */}
                  <h3 className='my-3'>{movie.name}</h3>
                  {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                  <p className='my-0'>{movie.rating}</p>
                </div>
                <div className='layout-row my-auto mr-20'>
                  {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                  <p className='justify-content-end'>
                    {(movie.duration / 60).toFixed(1)} Hrs
                  </p>
                </div>
              </li>
            </ul>
          </section>
        )
      })}
    </>
  )
}

export default Movieslist
