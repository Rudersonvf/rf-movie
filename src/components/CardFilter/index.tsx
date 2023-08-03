import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

export default function CardFilter() {
  return (
    <div className={styles["filter-card-container"]}>
      <div className={styles["filter-search-container"]}>
        <input
          className={styles["input-filter"]}
          type="text"
          placeholder="Digite o nome do filme"
        />
        <Button className={styles["btn-search"]} variant="contained">
          <SearchIcon className={styles["btn-icon"]} />
        </Button>
      </div>
      <div className={styles["filter-btn-container"]}>
        <Button className={styles["filter-btn"]}>
          <FilterAltIcon />
          <span>Filtro</span>
        </Button>
        <Button className={styles["filter-btn"]}>
          <SortByAlphaIcon />
          <span>Ordenar</span>
        </Button>
      </div>
    </div>
  );
}
