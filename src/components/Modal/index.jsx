import { PropTypes } from "prop-types";
import Emoji from "../Emoji";
import { Close, Success, Vector } from "../Icons";
import Good from "../Icons/Good";
import {
  EmojiSection,
  ModalContainer,
  SecondarySection,
  Text,
  Title,
  TitleContainer,
} from "./Modal.styles";

const Modal = function ({ title, variant = "secondary", text }) {
  return (
    <ModalContainer>
      <TitleContainer variant={variant}>
        <Title variant={variant}>{title}</Title>
        <Close />
      </TitleContainer>
      <EmojiSection variant={variant}>
        <Emoji Icon={Good} bgColor="#52ACB5" title="Very good" />
        <Emoji Icon={Good} bgColor="#52ACB5" title="Not bad" />
        <Emoji Icon={Good} bgColor="#52ACB5" title="Terrible" />
      </EmojiSection>
      <SecondarySection variant={variant}>
        <Success />
        <Vector className="absolute -top-[12.88rem] right-[19.963rem] "/>
        <Vector className="absolute -top-[6.088rem] left-[13.25rem]" width="236" height="236"/>
        <Vector className="absolute top-[16.088rem] left-[10.25rem]" width="136" height="136"/>
        <Vector className="absolute top-[9.088rem] right-[13.25rem]" width="226" height="226" />
        <Text>{text}</Text>
      </SecondarySection>
    </ModalContainer>
  );
};

Modal.propTypes = {};

export default Modal;
