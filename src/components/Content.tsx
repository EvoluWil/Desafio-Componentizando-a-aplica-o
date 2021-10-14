import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: MovieProps[];
}

export const Content: React.FC<ContentProps> = ({ movies }) => {
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie: MovieProps) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
};
