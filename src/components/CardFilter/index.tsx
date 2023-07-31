import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

export default function CardFilter() {
  return (
    <div className={styles["filter-card-container"]}>
      <input
        className={styles["input-filter"]}
        type="text"
        placeholder="Digite o nome do filme"
      />
      <Button className={styles["btn-search"]} variant="contained">
        <SearchIcon className={styles["btn-icon"]} />
      </Button>
    </div>
  );
}
