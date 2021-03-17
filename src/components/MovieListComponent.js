const MovieListComponent = ({ movies }) => {
    const showDetails = (movieId) => {
        
        let foundMovies = movies.find((movie) => movie.id === movieId);
    
        if(foundMovies) {
            alert(`${foundMovies.title}`);
            }else{
                alert(`Movie details are not found`);
            }
        };
    return (
        <table className= "box content-table table-dark text-center">
            <thead> 
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Genre</th>
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
                                <img 
                                    src={movie.movieImage} alt="movie">

                                </img>
                            </td>
                            <td>
                                <button className="btn btn-info btn-block" onClick={() => showDetails(movies.id)}>Info</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default MovieListComponent;