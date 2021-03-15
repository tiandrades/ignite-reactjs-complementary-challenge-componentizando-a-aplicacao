import { useState, useEffect } from 'react';

import { api } from '../services/api';

import { MovieCard } from './MovieCard';

import '../styles/content.scss';

import { MovieProps, GenreResponseProps } from '../interfaces';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}