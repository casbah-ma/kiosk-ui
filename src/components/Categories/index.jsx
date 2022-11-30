import { PropTypes } from "prop-types";
import Menu from "../Icons/menu";
import {
  CategoriesContainer,
  CategoriesCardIcon,
  CategoriesCardImage,
  CategoriesCardTitle,
} from "./Categories.styles";

const Categories = function ({
  bgColor,
  bgImage,
  title,
  Icon,
  onClick,
}) {
  return (
    <CategoriesContainer bgColor={bgColor} bgImage={bgImage} onClick={onClick}>
      {bgImage && <CategoriesCardImage src={bgImage} alt="bgImage" />}
      <CategoriesCardIcon>
        <Icon color="#fff" />
      </CategoriesCardIcon>
      <CategoriesCardTitle bgColor={bgColor}>{title}</CategoriesCardTitle>
    </CategoriesContainer>
  );
};

Categories.propTypes = {
  image: PropTypes.string,
};

export default Categories;
