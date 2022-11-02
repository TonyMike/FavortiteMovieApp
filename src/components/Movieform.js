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
            {errors.name?.message && (
              <div className='alert error ' data-testid='alert'>
                {errors.name?.message}
              </div>
            )}
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
            {errors.rating?.message && (
              <div className='alert error ' data-testid='alert'>
                {errors.rating?.message}
              </div>
            )}
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>
              Duration
            </label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration only in minutes'
              data-testid='durationInput'
              {...register('duration')}
            />
            {errors.duration?.message && (
              <div className='alert error ' data-testid='alert'>
                {errors.duration?.message}
              </div>
            )}
          </div>

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
