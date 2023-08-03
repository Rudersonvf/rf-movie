import { useEffect, useState } from "react";
import CardFilter from "../../components/CardFilter";
import CardMovie from "../../components/CardMovie";
import * as movieService from "../../services/movie-service";
import style from "./styles.module.scss";
import { MovieDTO } from "../../models/movie";

export default function Home() {
  const [movies, setMovies] = useState<MovieDTO[]>([]);

  useEffect(() => {
    movieService.findAll().then((response) => {
      setMovies(response.data.content);
    });
  }, []);

  return (
    <main>
      <section className={style["container"]}>
        <CardFilter />
        <div className={style["result-count-container"]}>
          <p>Exibindo 2 resultados</p>
        </div>
      </section>
      <section className="container">
        <div className={style["movie-result-container"]}>
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              categories={movie.categories}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
