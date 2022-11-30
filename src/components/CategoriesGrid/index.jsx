import Categories from "../Categories";
import { CategoriesGridSection } from "./CategoriesGrid.styles";

const CategoriesGrid = ({ items }) => {
  return (
    <CategoriesGridSection>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Categories key={index} {...item} />;
        })}
    </CategoriesGridSection>
  );
};

export default CategoriesGrid;
