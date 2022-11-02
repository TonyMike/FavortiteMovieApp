import create from 'zustand'

const MovieStore = create(set => ({
  movies: [],
  filter:'',
  addMovie: (newMovie)=> set((state)=>({
    movies: [...state.movies, newMovie]
  })),
  filterValue: (value)=> set((state)=>{
    filter:value
  })
}))

export default MovieStore