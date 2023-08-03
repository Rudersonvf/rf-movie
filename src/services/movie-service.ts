import axios from "axios";

const movies = axios.get(
  "https://raw.githubusercontent.com/Rudersonvf/assets/main/movies.json"
);

export function findAll() {
  return movies;
}
