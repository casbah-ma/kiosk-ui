import { PropTypes } from "prop-types";
import { CategoriesContainer } from "./Categories.styles";

const Categories = function ({ bgColor, border }) {
  return (
    <CategoriesContainer bgColor={bgColor} border={border}>
      test
    </CategoriesContainer>
  );
};

Categories.propTypes = {
  image: PropTypes.string,
};

export default Categories;
