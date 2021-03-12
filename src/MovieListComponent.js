

const MovieListComponent = ({ movies }) => {
    const showDetails = moviesId => {
        
        let foundMovies = movies.find(movies => movies.title);
      
        if(foundMovies) {
           alert(`${foundMovies.title}`);
            }
        };
    return (
        <table class="content-table table-dark text-center">
  <thead> 
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
        
        {movies.map((movie) => {
        return (
            <tr>
            <th scope="col-6 offset-3 title">
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