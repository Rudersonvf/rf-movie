import { MovieDTO } from "../models/movie";
import movies from "../data/movies-data.json";

export function findAll(): MovieDTO[] {
  return movies.slice().sort((a, b) => a.title.localeCompare(b.title));
}

export function findByName(name: string): MovieDTO[] {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(name.toLowerCase())
  );
}
