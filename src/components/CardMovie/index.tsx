import style from "./styles.module.scss";
import CardCategory from "../CardCategory";
import { MovieDTO } from "../../models/movie";

type Props = {
  movie: MovieDTO;
};

export default function CardMovie({ movie }: Props) {
  console.log(movie);

  return (
    <div className={style["card-movie-container"]}>
      <div className={style["card-img-container"]}>
        <img src={movie.img_url} alt={movie.title} />
      </div>
      <div className={style["card-content-container"]}>
        <h2>{movie.title}</h2>
        <p>Ano: {movie.release}</p>
        <p>Direção: {movie.director}</p>
        <div className={style["card-categories-container"]}>
          {movie.categories.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
