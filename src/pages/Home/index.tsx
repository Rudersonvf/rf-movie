import CardFilter from "../../components/CardFilter";
import CardMovie from "../../components/CardMovie";
import "./styles.component.scss";

export default function Home() {
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
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </div>
      </section>
    </main>
  );
}
