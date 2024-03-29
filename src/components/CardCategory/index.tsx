import { CategoryDTO } from "../../models/category";
import styles from "./styles.module.scss";

type Props = {
  category: CategoryDTO;
};

export default function CardCategory({ category }: Props) {
  return (
    <div className={styles["category-container"]}>
      <h3>{category.name}</h3>
    </div>
  );
}
