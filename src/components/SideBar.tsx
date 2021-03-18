import { Button } from './Button';

import { GenreResponseProps } from '../interfaces/GenreResponseProps';

import '../styles/sidebar.scss';

interface Props {
  genres: GenreResponseProps[];
  handleClickButton: (genreId: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: Props) {

  return (
    <nav className="sidebar">

      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}