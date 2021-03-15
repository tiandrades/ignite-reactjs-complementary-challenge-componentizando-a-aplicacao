import React from 'react';
import { api } from '../services/api';

import { Button } from './Button';

import '../styles/sidebar.scss';

import { GenreResponseProps } from '../interfaces';

interface SideBarProps {
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
  genres: GenreResponseProps[];
  selectedGenreId: number
}

export function SideBar({ setSelectedGenreId, genres, selectedGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}