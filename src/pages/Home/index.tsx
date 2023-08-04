import { useEffect, useState } from "react";
import CardFilter from "../../components/CardFilter";
import CardMovie from "../../components/CardMovie";
import * as movieService from "../../services/movie-service";
import style from "./styles.module.scss";
import { MovieDTO } from "../../models/movie";

type QueryParams = {
  movieName: string;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    movieName: "",
  });

  useEffect(() => {
    movieService
      .findByName(queryParams.movieName)
      .then((filteredMovies) => setMovies(filteredMovies))
      .catch((error) => {
        console.error("Erro ao buscar filmes:", error);
      });
  }, [queryParams]);

  async function handleFilter(nameValue: string): Promise<void> {
    setQueryParams({
      movieName: nameValue || "",
    });
  }

  return (
    <main>
      <section className={style["container"]}>
        <CardFilter onFilter={handleFilter} />
        <div className={style["result-count-container"]}>
          {!movies.length ? (
            <p>Sem resultados para a pesquisa</p>
          ) : (
            <p>Exibindo {movies.length} resultados</p>
          )}
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
