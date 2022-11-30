import { PropTypes } from "prop-types";
import Emoji from "../Emoji";
import { Close } from "../Icons";
import Good from "../Icons/Good";
import {
  EmojiSection,
  ModalContainer,
  Title,
  TitleContainer,
} from "./Modal.styles";

const Modal = function ({ title }) {
  return (
    <ModalContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Close />
      </TitleContainer>
      <EmojiSection>
        <Emoji Icon={Good} bgColor="#52ACB5" title="Very good" />
        <Emoji Icon={Good} bgColor="#52ACB5" title="Not bad" />
        <Emoji Icon={Good} bgColor="#52ACB5" title="Terrible" />
      </EmojiSection>
    </ModalContainer>
  );
};

Modal.propTypes = {};

export default Modal;
