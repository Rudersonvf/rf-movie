import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { useState } from "react";
import { CategoryDTO } from "../../models/category";

type FormData = {
  inptName?: string;
};

type Props = {
  onFilter: Function;
  categories: CategoryDTO[];
};

export default function CardFilter({ onFilter, categories }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formData.inptName);
  }

  return (
    <div className={styles["filter-card-container"]}>
      <form
        onSubmit={handleSubmit}
        className={styles["filter-search-container"]}
      >
        <input
          className={styles["input-filter"]}
          value={formData?.inptName || ""}
          name="inptName"
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
          <span>Categorias</span>
        </Button>

        <select required className={styles["filter-btn"]}>
          <option value="" disabled selected hidden>
            Ordernar
          </option>
          <option>
            <FilterAltIcon /> Male
          </option>
          <option>Female</option>
        </select>
      </div>
    </div>
  );
}
