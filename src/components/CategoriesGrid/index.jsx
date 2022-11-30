import Categories from "../Categories";
import { CategoriesGridSection } from "./CategoriesGrid.styles";

const Services = ({ items }) => {
  return (
    <CategoriesGridSection>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Categories key={index} {...item} />;
        })}
    </CategoriesGridSection>
  );
};

export default Services;
