import Card_v2 from "../Cards/Card_v2";
import { Card_v2GridSection } from "./Card_v2Grid.styles";

const Card_v2Grid = ({ items }) => {
  return (
    <Card_v2GridSection>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Card_v2 key={index} {...item} />;
        })}
    </Card_v2GridSection>
  );
};

export default Card_v2Grid;
