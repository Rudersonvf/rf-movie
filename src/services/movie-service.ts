import axios from "axios";
import { MovieDTO } from "../models/movie";

const moviesUrl =
  "https://raw.githubusercontent.com/Rudersonvf/assets/main/movies.json";

export function findByName(movieName: string): Promise<MovieDTO[]> {
  return axios
    .get(moviesUrl)
    .then((response) => {
      const movies = response.data.content;

      // Certifique-se de que movies é um array antes de filtrar
      const moviesArray = Array.isArray(movies) ? movies : [];

      const filteredMovies = moviesArray
        .sort((a, b) => a - b)
        .filter((movie: MovieDTO) =>
          movie.title.toLowerCase().includes(movieName.toLowerCase())
        );
      return filteredMovies;
    })
    .catch((error) => {
      console.log("Erro:", error);
      return Promise.reject(error);
    });
}
