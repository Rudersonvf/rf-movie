import { useContext, useEffect, useState } from "react";
import CardCount from "../../components/CardCount";
import CardFilter from "../../components/CardFilter";
import * as movieService from "../../services/movie-service";
import style from "./styles.module.scss";
import { MovieDTO } from "../../models/movie";
import CardMovie from "../../components/CardMovie";
import { ContextCardCount } from "../../utils/count-context";

type QueryParams = {
  name: string;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    name: "",
  });
  const { setContextCardCount } = useContext(ContextCardCount);

  useEffect(() => {
    const filter = movieService.findAll();
    setMovies(filter);
  }, []);

  useEffect(() => {
    const onFilter = movieService.findByName(queryParams.name);
    setMovies(onFilter);
    setContextCardCount(onFilter.length);
  }, [queryParams]);

  function handleFilter(nameValue: string) {
    setQueryParams({
      name: nameValue || "",
    });
  }

  return (
    <main>
      <section className={style["container"]}>
        <CardFilter onFilter={handleFilter} />
        <CardCount />
      </section>
      <section className="container">
        <div className={style["movie-result-container"]}>
          {movies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
