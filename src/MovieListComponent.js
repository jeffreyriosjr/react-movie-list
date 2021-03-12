
const MovieListComponent = ({ movies }) => {
    const showDetails = event => {
        event.preventDefault();
        console.log(event);

        let movieId = +event.target.title;
        //find a hero from our array
        let foundMovie = movies.find(movie => movieId);
        //alert details of that hero
        if(!foundMovie) {
            alert('Sorry Could not find your Movie!');
        }   else { 
                alert(`${foundMovie.name}: is in the ${foundMovie.genre} genre`);
            }
        };
    return (
    <div className='row'>
 
</div>
    );
    
};

export default MovieListComponent;