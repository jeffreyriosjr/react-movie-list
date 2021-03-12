import HeadingComponent from './Heading'
import MovieListComponent from './MovieListComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

  let movies = [
    {
      id: 1,
      title: 'Interstellar',
      year: '2014',
      genre: 'science fiction',
      movieImage: '../public/assets/images/Interstellar.png',
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
    },
    {
      id: 2,
      title: 'Padmaavat',
      year: '2018',
      genre: 'drama, history, romance',
      movieImage:'../public/assets/images/Padmaavat.png',
      imdbLink: 'https://www.imdb.com/title/tt5935704/?ref_=nv_sr_srsg_3',
    },
    {
      id: 3,
      title: 'Beauty and the Beast',
      year: '1991',
      genre: 'animation, family, fantasy',
      movieImage:'../public/assets/images/B&B.png',
      imdbLink: 'https://www.imdb.com/title/tt0101414/?ref_=fn_al_tt_2',
    },
    {
      id: 4,
      title: 'Casablanca',
      year: '1942',
      genre: 'drama, war, romance',
      movieImage:'..//public/assets/images/casablanca.jpeg',
      imdbLink: 'https://www.imdb.com/title/tt0034583/',
    },
    {
      id: 5,
      title: 'Wall E',
      year: '2008',
      genre: 'animation, adventure, family',
      movieImage:'../public/assets/images/walle.jpeg',
      imdbLink: 'https://www.imdb.com/title/tt0910970/?ref_=fn_al_tt_1',
    },
    {
      id:6,
      title: 'Vanilla Sky',
      year: '2001',
      genre: 'Fantasy, Mystery, Romance',
      movieImage:'../public/assets/images/vanillasky.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0259711/?ref_=fn_al_tt_1',
    },
    {
      id: 6,
      title: 'Pursuit of Happyness',
      year: '2006',
      genre: 'Biography, Drama',
      movieImage:'../public/assets/images/pursuitofhappyness.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0454921/?ref_=nv_sr_srsg_3',
    },
    {
      id: 7,
      title: 'The Fifth Element',
      year: '1997',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage:'../public/assets/images/fifthelement.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0119116/?ref_=nv_sr_srsg_0',
    },
    {
      id: 8,
      title: 'Toy Story',
      year: '1995',
      genre: 'Animation, Adventure, Comedy',
      movieImage:'../public/assets/images/toystory.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1',
    },
    {
      id: 9,
      title: 'Inception',
      year: '2010',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage:'../public/assets/images/inception.jpg',
      imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
    },
  ];

  let renderMovie = (movie, index) => {
    return(
      <tr>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td>{movie.genre}</td>
      </tr>
    )
  }

  const App = () => {
    let title = 'Our Movie List!'
  return (
    <div className="container">
      <HeadingComponent  title= {title}/>
      <MovieListComponent  movies={movies}/>
      <table class="table table-dark">
  <thead>
    <tr>
     
      <th scope="col">Movie</th>
      <th scope="col">Year</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
   {movies.map(renderMovie)}
  </tbody>
</table>
      
    </div>
  );
};

export default App;
