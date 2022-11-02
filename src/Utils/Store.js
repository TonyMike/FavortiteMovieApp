import create from 'zustand'
import { movies } from './data'

const MovieStore = create(set => ({
  movies: [...movies],
  filter: '',
  addMovie: newMovie =>
    set(state => ({
      movies: [...state.movies, newMovie]
    })),
  filterValue: value =>
    set(() => ({
      filter: value
    }))
}))

export default MovieStore
