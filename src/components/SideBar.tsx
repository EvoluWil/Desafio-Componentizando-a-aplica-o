import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  onClick: (genreId: number) => void;
  selected: number;
}
export const SideBar: React.FC<SideBarProps> = ({
  genres,
  onClick,
  selected,
}) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
