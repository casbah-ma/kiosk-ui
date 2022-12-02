import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowLeft } from "../Icons";
import { StyledBackbuttonField, StyledBtn, Text } from "./BackbuttonField.styles";

const BackbuttonField = ({ label ,text}) => {
  return (
    <StyledBackbuttonField>
      <StyledBtn>
        <ArrowLeft/>
        {label}
      </StyledBtn>
      <Text>{text}</Text>
    </StyledBackbuttonField>
  );
};

export default BackbuttonField;
