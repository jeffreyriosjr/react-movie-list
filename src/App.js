import HeadingComponent from './Heading'
import MovieListComponent from './MovieListComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Inception from './Inception.png'
import Interstellar from './Interstellar.png'
import Padmaavat from './Padmaavat.png'
import BeautyandBeast from './B&B.png'
import Casablanca from './casablanca.jpeg'
import WallE from './download.jpeg'
import VanillaSky from './Vanilla-Sky.png'
import Pursuit from './Pursuit.png'
import ToyStory from './toyStory.png'
import FifthElement from  './5th-element.png'


import './App.css';

  

  let movies = [
    {
      id: 0,
      title: 'Interstellar',
      year: '2014',
      genre: 'science fiction',
      movieImage: Interstellar,
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
    },
    {
      id: 1,
      title: 'Padmaavat',
      year: '2018',
      genre: 'drama, history, romance',
      movieImage: Padmaavat,
      imdbLink: 'https://www.imdb.com/title/tt5935704/?ref_=nv_sr_srsg_3',
    },
    {
      id: 2,
      title: 'Beauty and the Beast',
      year: '1991',
      genre: 'animation, family, fantasy',
      movieImage: BeautyandBeast,
      imdbLink: 'https://www.imdb.com/title/tt0101414/?ref_=fn_al_tt_2',
    },
    {
      id: 3,
      title: 'Casablanca',
      year: '1942',
      genre: 'drama, war, romance',
      movieImage:Casablanca,
      imdbLink: 'https://www.imdb.com/title/tt0034583/',
    },
    {
      id: 4,
      title: 'Wall E',
      year: '2008',
      genre: 'animation, adventure, family',
      movieImage:WallE,
      imdbLink: 'https://www.imdb.com/title/tt0910970/?ref_=fn_al_tt_1',
    },
    {
      id:5,
      title: 'Vanilla Sky',
      year: '2001',
      genre: 'Fantasy, Mystery, Romance',
      movieImage: VanillaSky,
      imdbLink: 'https://www.imdb.com/title/tt0259711/?ref_=fn_al_tt_1',
    },
    {
      id: 6,
      title: 'Pursuit of Happyness',
      year: '2006',
      genre: 'Biography, Drama',
      movieImage:Pursuit,
      imdbLink: 'https://www.imdb.com/title/tt0454921/?ref_=nv_sr_srsg_3',
    },
    {
      id: 7,
      title: 'The Fifth Element',
      year: '1997',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage:FifthElement,
      imdbLink: 'https://www.imdb.com/title/tt0119116/?ref_=nv_sr_srsg_0',
    },
    {
      id: 8,
      title: 'Toy Story',
      year: '1995',
      genre: 'Animation, Adventure, Comedy',
      movieImage:ToyStory,
      imdbLink: 'https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1',
    },
    {
      id: 9,
      title: 'Inception',
      year: '2010',
      genre: 'Action, Adventure, Sci-Fi',
      movieImage: Inception,
      imdbLink: 'https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1',
    },
  ];

  const App = () => {
    let title = 'Anna & Jeffreys Movie List!'
  return (
    <div className="container">
      <HeadingComponent  title= {title}/>
      <MovieListComponent  movies={movies}/>
      
     

      
    </div>
  );
};

export default App;
