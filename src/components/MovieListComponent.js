const MovieListComponent = ({ movies }) => {
    const showDetails = movieId => {
        
        let foundMovie = movies.find(movie => movie.id === movieId);
        alert(`${foundMovie.title}: this movie is about: ${foundMovie.genre}`);
        
    };
    return (
        <table className=" box content-table table-dark text-center">
  <thead> 
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
        
        {movies.map((movie, index) => {
        return (
            <tr>
            <th scope="col-6 offset-3">
                <a href={movie.imdbLink} rel='noreferrer' target='_blank'>
                    {movie.title}
                </a>
            </th>
            <td scope="row">{movie.year}</td>
            <td scope="row">{movie.genre}</td>
            
            <img src={movie.movieImage}></img>
            
            <td scope="col">
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