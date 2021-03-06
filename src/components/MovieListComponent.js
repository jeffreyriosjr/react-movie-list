const MovieListComponent = ({ movies, removeMovie, setMovie }) => {
    const showDetails = movieId => {
        let foundMovie = movies.find(movie => movie.id === movieId);
        alert(`${foundMovie.title}: ${foundMovie.genre}`);
      
        };
        const updateMovie = movieFromList => {
            console.log(movieFromList);
            setMovie(movieFromList);
          };
        

    return (
        <table className= "table content-table table-dark text-center">
            <thead> 
                <tr>
                    <th className="col">Title</th>
                    <th className= "col">Year</th>
                    <th className = "col">Genre</th>
                    <th className="col">Pic</th>
                    <th className="col">Info</th>
                    
                </tr>
            </thead>
            
            <tbody >
                {movies.map((movie, index) => {
                    return (
                        <tr key={index}>
                            <th scope="col-6 offset-3" >
                                <a 
                                href={movie.imdbLink} 
                                rel='noreferrer' 
                                target='_blank'>
                                    {movie.title}
                                </a>
                            </th>
                            <td>{movie.year}</td>
                            <td>{movie.genre}</td>
                            <td>
                                <img src={movie.movieImage} alt=''></img>
                            </td>
                            <td>
                            
                                <button className="btn btn-info btn-block mb-2" onClick={() => showDetails(movie.id)}>Info</button>
                                <button
                                className='btn btn-danger mb-2'
                                onClick={() => removeMovie(movie.id)}>Remove
                                </button>
                                <button
                                className='btn btn-outline-warning'
                                onClick={() => updateMovie(movie)}>Update</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default MovieListComponent;