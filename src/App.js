import HeadingComponent from './components/Heading';
import MovieListComponent from './components/MovieListComponent';
import MovieFormComponent from './components/MovieForm'

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



import './App.css';

  

  let moviesData = [
    {
      id: 1,
      title: 'Interstellar',
      year: '2014',
      genre: 'science fiction',
      movieImage: 'https://www.imdb.com/title/tt0816692/mediaviewer/rm4043724800/',
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
    },
    {
      id: 2,
      title: 'Padmaavat',
      year: '2018',
      genre: 'drama, history, romance',
      movieImage: 'https://www.imdb.com/title/tt5935704/mediaviewer/rm2907263744/',
      imdbLink: 'https://www.imdb.com/title/tt5935704/?ref_=nv_sr_srsg_3',
    },
    {
      id: 3,
      title: 'Beauty and the Beast',
      year: '1991',
      genre: 'animation, family, fantasy',
      movieImage: 'https://www.imdb.com/title/tt0101414/mediaviewer/rm3497069824/',
      imdbLink: 'https://www.imdb.com/title/tt0101414/?ref_=fn_al_tt_2',
    },
    {
      id: 4,
      title: 'Casablanca',
      year: '1942',
      genre: 'drama, war, romance',
      movieImage: 'https://www.imdb.com/title/tt0034583/mediaviewer/rm1220089088/',
      imdbLink: 'https://www.imdb.com/title/tt0034583/',
    },
    {
      id: 5,
      title: 'Wall E',
      year: '2008',
      genre: 'animation, adventure, family',
      movieImage: 'https://www.imdb.com/title/tt0910970/mediaviewer/rm1659211008/',
      imdbLink: 'https://www.imdb.com/title/tt0910970/?ref_=fn_al_tt_1',
    },
    {
      id:6,
      title: 'Vanilla Sky',
      year: '2001',
      genre: 'Fantasy, Mystery, Romance',
      movieImage: 'https://www.imdb.com/title/tt0259711/mediaviewer/rm1681143808/',
      imdbLink: 'https://www.imdb.com/title/tt0259711/?ref_=fn_al_tt_1',
    },
    {
      id: 7,
      title: 'Pursuit of Happyness',
      year: '2006',
      genre: 'Biography, Drama',
      movieImage:'https://www.imdb.com/title/tt0454921/mediaviewer/rm2553318400/',
      imdbLink: 'https://www.imdb.com/title/tt0454921/?ref_=nv_sr_srsg_3',
    },
    {
      id: 8,
      title: 'The Fifth Element',
      year: '1997',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage: 'https://www.imdb.com/title/tt0119116/mediaviewer/rm2436240384/',
      imdbLink: 'https://www.imdb.com/title/tt0119116/?ref_=nv_sr_srsg_0',
    },
    {
      id: 9,
      title: 'Toy Story',
      year: '1995',
      genre: 'Animation, Adventure, Comedy',
      movieImage: 'https://www.imdb.com/title/tt0114709/mediaviewer/rm3813007616/',
      imdbLink: 'https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1',
    },
    {
      id: 10,
      title: 'Inception',
      year: '2010',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage: 'https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/',
      imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
    },
  ];

    const App = () => {
      const [movies, setMovies] = useState(moviesData);
      let title = 'Anna & Jeffreys Movie List!';
      

    const addNewMovie = movie => {
      setMovies([...movies, movie])
    };
  return (
    <div className="container">
      <HeadingComponent  title={title}/>
      <MovieListComponent  movies={movies}/>
      <MovieFormComponent addNewMovie={addNewMovie} />
      
      
    </div>
    
  );
  
};

export default App;