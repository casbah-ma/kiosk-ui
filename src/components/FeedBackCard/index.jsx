import Button from "../Button";
import { Shapes } from "../Icons";
import {
  StyledFeedBackCard,
  StyledFeedBackCardText,
} from "./FeedBackCard.styles";

const FeedBackCard = ({title, onClick}) => {
  return (
    <StyledFeedBackCard>
      <Shapes className="absolute -left-[60rem] w-full h-[99rem]" />
      <StyledFeedBackCardText>
        {title}
      </StyledFeedBackCardText>
      <Button
        border
        borderWidth="3px"
        label="Give feedback"
        onClick={onClick}
        variant="primary"
      />
    </StyledFeedBackCard>
  );
};

export default FeedBackCard;
