import { useEffect, useState } from "react";
import CardFilter from "../../components/CardFilter";
import CardMovie from "../../components/CardMovie";
import * as movieService from "../../services/movie-service";
import "./styles.component.scss";
import { MovieDTO } from "../../models/movie";

export default function Home() {
  const [data, setData] = useState<MovieDTO[]>([]);

  useEffect(() => {
    movieService.findAll().then((response) => {
      setData(response.data.content);
    });
  }),
    [];

  return (
    <main>
      <section className="container">
        <CardFilter />
        <div className="result-count-container">
          <p>Exibindo 2 resultados</p>
        </div>
      </section>
      <section className="container">
        <div className="movie-result-container">
          {data.map((movie) => (
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
