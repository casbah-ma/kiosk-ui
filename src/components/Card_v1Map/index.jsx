import Card_v1 from "../Cards/Card_v1";
import { Card_v1MapSection } from "./Card_v1Map.styles";

const Card_v1Map = ({ items }) => {
  return (
    <Card_v1MapSection>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Card_v1 key={index} {...item} />;
        })}
    </Card_v1MapSection>
  );
};

export default Card_v1Map;
