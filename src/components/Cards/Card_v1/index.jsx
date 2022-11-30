import {
  Body,
  CardContainer,
  CardImage,
  ContentCard,
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
import { Check, Clock, Closed } from "../../Icons";
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
}) {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt="test" />
      </CardImage>
      <ContentCard>
        <Header>
          <Title titleColor={titleColor}>{title}</Title>
          <Status open={open}>
            {open ? <Check width="4.167rem" /> : <Closed width="4.167rem" />}
            {status}
          </Status>
        </Header>
        <Body>{article}</Body>
        <Button
          variant="secondary"
          color="#000"
          bgColor="#F3F3F3"
          border="true"
          borderColor="#6A6969"
          borderWidth="2px"
          label="🇲🇦 Restaurant Marocain"
        ></Button>
        <Time>
          <Clock width="5.209rem" />
          {time}
        </Time>
        <Line></Line>
        <LinkSection>
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
