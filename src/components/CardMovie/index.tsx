import "./styles.component.scss";
import img from "../../assets/lotr 1.png";
import CardCategory from "../CardCategory";

export default function CardMovie() {
  return (
    <div className="card-movie-container">
      <div className="card-img-container">
        <img src={img} alt="movie" />
      </div>
      <div className="card-content-container">
        <h2>Titulo</h2>
        <p>data-data-data</p>
        <p>Direção: dirertor</p>
        <div className="card-categories-container">
          <CardCategory
            category={{
              id: 1,
              name: "Ação",
            }}
          />
          <CardCategory
            category={{
              id: 2,
              name: "Aventura",
            }}
          />
          <CardCategory
            category={{
              id: 3,
              name: "Fantasia",
            }}
          />
        </div>
      </div>
    </div>
  );
}
