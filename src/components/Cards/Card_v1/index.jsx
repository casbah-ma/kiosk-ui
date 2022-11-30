import {
  Body,
  BtnSection,
  CardContainer,
  CardImage,
  ContentCard,
  Direction,
  Header,
  Line,
  LinkLabel,
  LinkSection,
  Status,
  Time,
  Title,
} from "./Card_v1.styles";
import { PropTypes } from "prop-types";
import Button from "../../Button";
import { Check, Clock, Closed, Location } from "../../Icons";
import Menu from "../../Icons/menu";

const Card_v1 = function ({
  image,
  title,
  status,
  titleColor,
  open,
  article,
  time,
  linkLabel,
  direction,
  variant = "primary",
  btnlabel,
  btnvariant,
  btnbgColor,
  btncolor,
  btnborderColor,
  btnborderWidth,
  btnIcon,
}) {
  return (
    <CardContainer variant={variant}>
      <CardImage>
        <img src={image} alt="test" />
      </CardImage>
      <ContentCard>
        <Header>
          <Title titleColor={titleColor} variant={variant}>
            {title}
          </Title>
          <Status open={open} variant={variant}>
            {open ? <Check width="4.167rem" /> : <Closed width="4.167rem" />}
            {status}
          </Status>
        </Header>
        <Body variant={variant}>{article}</Body>
        <BtnSection>
          <Direction variant={variant}>
            <Location width="5rem" />
            {direction}
          </Direction>
          <Button
            variant={btnvariant}
            color={btncolor}
            bgColor={btnbgColor}
            border="true"
            Icon={btnIcon}
            borderColor={btnborderColor}
            borderWidth={btnborderWidth}
            label={btnlabel}
          ></Button>
        </BtnSection>
        <Time variant={variant}>
          <Clock width="5.209rem" />
          {time}
        </Time>
        <Line variant={variant}></Line>
        <LinkSection variant={variant}>
          <Menu width="4.493rem" />
          <LinkLabel>{linkLabel}</LinkLabel>
        </LinkSection>
      </ContentCard>
    </CardContainer>
  );
};

Card_v1.propTypes = {
  image: PropTypes.string,
  open: PropTypes.bool,
};

export default Card_v1;
