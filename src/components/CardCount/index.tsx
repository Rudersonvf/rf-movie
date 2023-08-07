import styles from "./styles.module.scss";

export default function CardCount() {
  return (
    <div className={styles["result-count-container"]}>
      <p>Exibindo N resultados</p>
    </div>
  );
}
