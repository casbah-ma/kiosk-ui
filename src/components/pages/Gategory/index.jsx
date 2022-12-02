import BackbuttonField from "../../BackbuttonField";
import Card_v1Map from "../../Card_v1Map";
import Header from "../../Header";
import { CardSection } from "./Gategory.styles";

const Home = ({ HeaderProps, BackbuttonProps, Card_v1MapProps }) => {
  return (
    <>
      <Header {...HeaderProps} />
      <BackbuttonField {...BackbuttonProps}/>
      <CardSection>
      <Card_v1Map {...Card_v1MapProps}/>
      </CardSection>
    </>
  );
};

export default Home;
