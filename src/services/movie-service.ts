import axios from "axios";

export function findAll(){
    return axios.get("https://raw.githubusercontent.com/Rudersonvf/assets/main/movies.json");
}