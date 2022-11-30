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
  titleBgColor,
  Icon,
  onClick,
  border
}) {
  return (
    <CategoriesContainer border={border} bgColor={bgColor} bgImage={bgImage} onClick={onClick}>
      {bgImage && <CategoriesCardImage src={bgImage} alt="bgImage" />}
      <CategoriesCardIcon>
        <Icon color="#fff" />
      </CategoriesCardIcon>
      <CategoriesCardTitle bgColor={titleBgColor}>{title}</CategoriesCardTitle>
    </CategoriesContainer>
  );
};

Categories.propTypes = {
  image: PropTypes.string,
};

export default Categories;
