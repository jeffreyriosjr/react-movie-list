import { useState } from 'react';

const MovieFormComponent = ({ movie, setMovie, addNewMovie, }) => {
    const handleSubmit = event => {
    event.preventDefault();
    //console.log('submit runs!, event);
    //debugger;
     addNewMovie();   
    };

    return(
            <div className='row mb-5'>
                <div className='col-6 offset-3'>
                    <form action='submit' id='movie-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='movieTitle'>Movie Title</label>
                            <input
                            type='text'
                            id='movieTitle'
                            className='form-control'
                            value={movie.title}
                            onChange= {event => {setMovie({ ...movie, title: event.target.value });}}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieGenre'>Genre</label>
                            <input
                            type='text'
                            id='movieGenre'
                            className='form-control'
                            value={movie.genre}
                            onChange= {event => setMovie({ ...movie, genre: event.target.value})}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieYear'>Year</label>
                            <input
                            type='text'
                            id='movieYear'
                            className='form-control'
                            value={movie.year}
                            onChange= {event => {setMovie({ ...movie, year: event.target.value })
                        }}
                            />
                        </div>
                        
                         <button className='btn btn-success btn-block'>Save</button>
    
                    </form>
                </div>
            </div>
    );
};

export default MovieFormComponent;