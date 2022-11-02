import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MovieFormSchema } from '../Utils/schema'
import MovieStore from '../Utils/Store'

function Movieform () {
  const movieStore = MovieStore()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(MovieFormSchema)
  })

  const submitMovie = data => {
    // console.log(data)
    movieStore.addMovie(data)
  }
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit(submitMovie)}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>
              Movie Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              {...register('name')}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>
              Ratings
            </label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              {...register('rating')}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>
              Duration
            </label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              {...register('duration')}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button type='submit' className='mx-0' data-testid='addButton'>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Movieform
