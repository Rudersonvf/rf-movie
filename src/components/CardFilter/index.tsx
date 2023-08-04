import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { useState } from "react";

type FormData = {
  inptName?: string;
};

type Props = {
  onFilter: (movieName: string) => Promise<void>; // Atualização na definição da prop onFilter
};

export default function CardFilter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setFormData(formData);
    console.log(formData);

    // Chame a função onFilter passando o valor de formData.inptName
    onFilter(formData.inptName || "");
  }

  return (
    <div className={styles["filter-card-container"]}>
      <form
        onSubmit={handleSubmit}
        className={styles["filter-search-container"]}
      >
        <input
          className={styles["input-filter"]}
          name="inptName"
          value={formData.inptName || ""}
          type="text"
          placeholder="Digite sua busca"
          onChange={handleChange}
        />
        <Button
          className={styles["btn-search"]}
          variant="contained"
          type="submit"
        >
          <SearchIcon className={styles["btn-icon"]} />
        </Button>
      </form>
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
