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
                    <button className='btn btn-warning btn-block'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default MovieFormComponent;