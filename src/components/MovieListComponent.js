

const MovieListComponent = ({ movies }) => {
    const showDetails = moviesId => {
        
        let foundMovies = movies.find(movies => movies.id === moviesId);
    
        if(foundMovies) {
            alert(`${foundMovies.title}`);
            }
        };
    return (
        <table className= "box content-table table-dark text-center">
            <thead key='theading'> 
                <tr key='titlesrow'>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Genre</th>
                </tr>
            </thead>
            
            <tbody key='moviebody'>
                {movies.map((movie) => {
                    return (
                        <tr key='movierow'>
                            <th scope="col-6 offset-3" key='moviehead'>
                                <a href={movie.imdbLink} rel='noreferrer' target='_blank'>
                                    {movie.title}
                                </a>
                            </th>
                            <td>{movie.year}</td>
                            <td>{movie.genre}</td>
                            <td><img src={movie.movieImage} alt="movie"></img>
                            </td>
                            <td>
                                <button className="btn btn-info btn-block" onClick={() => showDetails(movies.title)}>Info</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default MovieListComponent;