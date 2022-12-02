import CategoriesGrid from "../../CategoriesGrid";
import FeedBackCard from "../../FeedBackCard";
import Header from "../../Header";
import { Shapes2, Shapes3 } from "../../Icons";
import Swiper_v1 from "../../Swiper";
import { CategoriesSection } from "./home.styles";

const Home = ({ HeaderProps, SwiperProps, CategoriesProps, FeedBackProps }) => {
  return (
    <>
      <Header {...HeaderProps} />
      <Swiper_v1 {...SwiperProps} />
      <CategoriesSection>
        <Shapes2 className="absolute right-0 h-full"/>
        <Shapes3 className="absolute w-full h-[99rem] -left-[30.868rem] -top-[0.002rem]"/>
        <CategoriesGrid {...CategoriesProps} />
        <FeedBackCard {...FeedBackProps} />
      </CategoriesSection>
    </>
  );
};

export default Home;
