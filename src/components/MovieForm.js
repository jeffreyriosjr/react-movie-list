const MovieFormComponent =() => {
    return(
            <div className='row mb-5'>
                <div className='col-6 offset-3'>
                    <form action='submit' id='movie-form'>
                        <div className='form-group'>
                            <label htmlFor='movieTitle'>Title</label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='movieGenre'>Genre</label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='movieYear'>Year</label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='movieImage'>Image</label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='imdbLink'>Imdb Link</label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''
                            />
                        </div>

                        <div className='form-group'>
                            <label></label>
                            <input
                            type=''
                            id=''
                            className='form-control'
                            value=''
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