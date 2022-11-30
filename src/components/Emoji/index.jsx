import { PropTypes } from "prop-types";
import { EmojiContainer, IconContainer, Title } from "./Emoji.styles";

const Emoji = function ({ bgColor, Icon, title }) {
  return (
    <EmojiContainer>
      <IconContainer bgColor={bgColor}>{Icon && <Icon />}</IconContainer>
      <Title>{title}</Title>
    </EmojiContainer>
  );
};

Emoji.propTypes = {};

export default Emoji;
