import {
  BtnSection,
  CardContainer,
  CardImage,
  ContentCard,
  FirstBtn,
  SecondBtn,
  Title,
} from "./Card_v2.styles";
import { PropTypes } from "prop-types";
import Button from "../../Button";
import { Eye, Qrcode } from "../../Icons";

const Card_v2 = function ({
  image,
  title,
  titleColor,
  variant = "primary",
  btnlabel1,
  btnlabel2,
}) {
  return (
    <CardContainer variant={variant}>
      <CardImage variant={variant}>
        <img src={image} alt="test" />
      </CardImage>
      <ContentCard>
        <Title titleColor={titleColor} variant={variant}>
          {title}
        </Title>
        <BtnSection>
          <FirstBtn>
            <Eye width="5rem" />
            {btnlabel1}
          </FirstBtn>
          <SecondBtn>
            <Qrcode width="5rem" />
            {btnlabel2}
          </SecondBtn>
        </BtnSection>
      </ContentCard>
    </CardContainer>
  );
};

Card_v2.propTypes = {
  image: PropTypes.string,
};

export default Card_v2;
