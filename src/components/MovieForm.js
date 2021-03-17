import { useState } from 'react';

const MovieFormComponent = ({ addNewMovie }) => {
  // initialize my variable and state hooks first
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movieGenre, setMovieGenre] = useState('');

    const handleSubmit = event => {
    event.preventDefault();
    debugger;
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
    return(
            <div className='row mb-5'>
                <div className='col-6 offset-3'>
                    <form action='submit' id='movie-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='movieTitle'>Title</label>
                            <input
                            type='text'
                            id='movieTitle'
                            className='form-control'
                            value='{movieTitle}'
                            onChange= {event => {setMovieTitle(event.target.value);}}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieGenre'>Genre</label>
                            <input
                            type='text'
                            id='movieGenre'
                            className='form-control'
                            value='{movieGenre}'
                            onChange= {event => {setMovieGenre(event.target.value);}}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieYear'>Year</label>
                            <input
                            type='text'
                            id='movieYea'
                            className='form-control'
                            value='{movieYear}'
                            onChange= {event => {setMovieYear(event.target.value);}}
                            />
                        </div>
                        <div className='row'>
                            <div className= 'col-6 mx-auto'>
                                <button className='btn btn-success btn-block
                                '>Save</button>
                            </div>
                            <div className='col-6 mx-auto'>
                                <button className='btn btn-danger btn-block'>Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default MovieFormComponent;





