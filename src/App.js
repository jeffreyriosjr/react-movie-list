import { useState } from 'react';

import MovieListComponent from './components/MovieListComponent';
import MovieFormComponent from './components/MovieForm'

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

  

  let moviesData = [
    {
      id: 1,
      title: 'Interstellar',
      year: '2014',
      genre: 'science fiction',
      movieImage: 'https://tse2.mm.bing.net/th?id=OIP.qeawQLqsPajZg1Y3PHs5IAHaKi&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
    },
    {
      id: 2,
      title: 'Padmaavat',
      year: '2018',
      genre: 'drama, history, romance',
      movieImage: 'https://tse3.mm.bing.net/th?id=OIP.C9ZUrcXbjGdkaSbxLZiO7wHaD_&pid=Api&P=0&w=311&h=168',
      imdbLink: 'https://www.imdb.com/title/tt5935704/?ref_=nv_sr_srsg_3',
    },
    {
      id: 3,
      title: 'Beauty and the Beast',
      year: '1991',
      genre: 'animation, family, fantasy',
      movieImage: 'https://tse2.mm.bing.net/th?id=OIP.6YvUB1dEUkJylDJxKMxOeQHaLH&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0101414/?ref_=fn_al_tt_2',
    },
    {
      id: 4,
      title: 'Casablanca',
      year: '1942',
      genre: 'drama, war, romance',
      movieImage: 'https://tse2.mm.bing.net/th?id=OIP.R0gvJC57kJIwKLPANRtx2gHaLH&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0034583/',
    },
    {
      id: 5,
      title: 'Wall E',
      year: '2008',
      genre: 'animation, adventure, family',
      movieImage: 'https://tse3.mm.bing.net/th?id=OIP.L56ak7SnPQjuzLimKRVFwgHaKj&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0910970/?ref_=fn_al_tt_1',
    },
    {
      id:6,
      title: 'Vanilla Sky',
      year: '2001',
      genre: 'Fantasy, Mystery, Romance',
      movieImage: 'https://tse3.mm.bing.net/th?id=OIP.E5ffZPDI6cuS7-GZoBl7gAHaLH&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0259711/?ref_=fn_al_tt_1',
    },
    {
      id: 7,
      title: 'Pursuit of Happyness',
      year: '2006',
      genre: 'Biography, Drama',
      movieImage:'https://tse2.mm.bing.net/th?id=OIP.cOgm_b77wNnbQny92iWy2gHaLA&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0454921/?ref_=nv_sr_srsg_3',
    },
    {
      id: 8,
      title: 'The Fifth Element',
      year: '1997',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage: 'https://tse4.mm.bing.net/th?id=OIP.NW84kFhoNUqe9EcbLobt3QHaLH&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0119116/?ref_=nv_sr_srsg_0',
    },
    {
      id: 9,
      title: 'Toy Story',
      year: '1995',
      genre: 'Animation, Adventure, Comedy',
      movieImage: 'https://tse3.mm.bing.net/th?id=OIP.2HSG8btI9jKB3pl0vO-d8gHaJP&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1',
    },
    {
      id: 10,
      title: 'Inception',
      year: '2010',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage: 'https://tse1.mm.bing.net/th?id=OIP.6WES5nhdyXVDPrxHG0vCvgHaKz&pid=Api&P=0&w=300&h=300',
      imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
    },
  ];

    const App = () => {
      const [movies, setMovies] = useState(moviesData);
      const [movie, setMovie] = useState({
      id: '',
      title: '',
      year: '',
      genre: '',
      movieImage: '',
      imdbLink: '',

      });
      
    const addNewMovie = () => {
      if (movie.id) {
        console.log(`this movie has an id, the name is ${movie.title}`);
        let updatedMovies = movies.filter(m => m.id !== movie.id);
        updatedMovies.push(movie);
        setMovies(updatedMovies);
      } else {
        movie.id = Date.now();
        setMovies([...movies, movie]);
      }
      setMovie({
        id: '',
        name: '',
        year: '',
        genre: '',
        description: '',
        imdbRating: '',
        imageLink: '',
        imdbLink: '',
      });
      
    };
    const removeMovie = movieId => {
      if (window.confirm('Are you sure you want to remove this movie?')) {
        let newMovies = movies.filter(m => m.id !== movieId);
        console.log(newMovies);
        setMovies(newMovies);
      }
    };
    

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1>Anna and Jeffreys Movie List!</h1>
        </div>
      </div>
      
      <MovieListComponent  movies={movies} removeMovie={removeMovie} setMovie={setMovie}/>
      <MovieFormComponent addNewMovie={addNewMovie} movie={movie} setMovie={setMovie} />
      
      
    </div>
    
  );
  
};

export default App;