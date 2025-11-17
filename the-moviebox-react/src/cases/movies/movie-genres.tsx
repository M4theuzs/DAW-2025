import { useEffect, useState, type ReactNode } from "react";
import type { MovieDTO } from "./services/movie.service";


type MovieGenresProps = {
  movie: MovieDTO;
  children?: ReactNode;
};

export function MovieGenres({ movie, children }: MovieGenresProps) {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    if (movie?.genres) {
      setGenres(movie.genres.split("|"));
    } else {
      setGenres([]);
    }
  }, [movie]);

  return (
    <div className="flex text-sm my-2 gap-2 items-center">
      {genres.map((g, i) => (
        <span key={i} className="bg-white/20 rounded-2xl px-3 py-1">
          {g}
        </span>
      ))}
      {children}
    </div>
  );
}
