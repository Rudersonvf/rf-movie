import "./styles.component.scss";
import CardCategory from "../CardCategory";
import { MovieDTO } from "../../models/movie";
import { CategoryDTO } from "../../models/category";

type Props = {
  movie: MovieDTO;
  categories: CategoryDTO[];
};

export default function CardMovie({ movie, categories }: Props) {
  console.log(movie);

  return (
    <div className="card-movie-container">
      <div className="card-img-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-content-container">
        <h2>{movie.title}</h2>
        <p>Ano: {movie.release}</p>
        <p>Direção: {movie.director}</p>
        <div className="card-categories-container">
          {categories.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
