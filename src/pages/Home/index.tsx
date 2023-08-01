import CardFilter from "../../components/CardFilter";
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
    </main>
  );
}
