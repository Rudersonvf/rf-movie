import { useContext } from "react";
import styles from "./styles.module.scss";
import { ContextCardCount } from "../../utils/count-context";

export default function CardCount() {
  const { contextCardCount } = useContext(ContextCardCount);

  return (
    <div className={styles["result-count-container"]}>
      {contextCardCount < 1 ? (
        <p>Sem resultado</p>
      ) : contextCardCount < 2 ? (
        <p>Exibindo {contextCardCount} resultado</p>
      ) : (
        <p>Exibindo {contextCardCount} resultados</p>
      )}
    </div>
  );
}
