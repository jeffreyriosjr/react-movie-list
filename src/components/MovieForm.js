import { useState } from 'react';

const MovieFormComponent = ({ addNewMovie }) => {
  // initialize my variable and state hooks first
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  
  //   let heroName = '';
  //   const setHeroName = (value) => {
  //     //   updates heroName
  //     heroName += value;
  //   }

  // initialize my functions
  const handleSubmit = event => {
    event.preventDefault();
    // debugger;
    let newMovie = {
      title: movieTitle,
      year: movieYear,
      genre: movieGenre,
    };
    console.log(newMovie);
    addNewMovie(newMovie);
    clearForm();
  };

  const clearForm = () => {
    setMovieTitle('');
    setMovieYear('');
    setMovieGenre('');
    
  };
  return (
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
        <form action='submit' id='movie-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='movieTitle'>Movie Title</label>
            <input
              type='text'
              id='movieTitle'
              className='form-control'
              value={movieTitle}
              onChange={event => {
                setMovieTitle(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='movieYear'>Movie Year</label>
            <input
              type='text'
              className='form-control'
              id='movieYear'
              value={movieYear}
              onChange={event => {
                setMovieYear(event.target.value);
              }}
            />
          </div>
          <div className='row'>
            <div className='form-group col'>
              <label htmlFor='movieGenre'>Movie Genre</label>
              <input
                type='text'
                id='movieTitle'
                className='form-control'
                value={movieGenre}
                onChange={event => {
                  setMovieGenre(event.target.value);
                }}
              />
            </div>
          </div>
          <button className='btn btn-primary btn-block'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default MovieFormComponent;