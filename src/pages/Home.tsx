import { useEffect, useState } from 'react';

import { SideBar } from '../components/SideBar';
import { Content } from '../components/Content';

import { GenreResponseProps } from '../interfaces/GenreResponseProps';
import { MovieProps } from '../interfaces/MovieProps';

import data from '../../server.json'

import '../styles/global.scss';

export function Home() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
      setGenres(data.genres);
  }, []);

  useEffect(() => {
    const selectedMovies = data.movies.filter(movie => movie.Genre_id == selectedGenreId ?? movie);
    setMovies(selectedMovies);

    const selectedGenres = genres.filter(genre => genre.id == selectedGenreId ?? genre);
    setSelectedGenre(selectedGenres[0]);
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <SideBar
          genres={genres}
          handleClickButton={handleClickButton}
          selectedGenreId={selectedGenreId}
        />
      </nav>
        <Content
          movies={movies}
          selectedGenreId={selectedGenreId}
          selectedGenre={selectedGenre}
       />
    </div>
  )
}
