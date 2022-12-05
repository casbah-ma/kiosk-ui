import { useEffect, useState } from "react";
import CategoriesGrid from "../../components/CategoriesGrid";
import FeedBackCard from "../../components/FeedBackCard";
import Header from "../../components/Header";
import {
  CloudSunny,
  Restaurant2,
  Shapes2,
  Shapes3,
} from "../../components/Icons";
import Swiper_v1 from "../../components/Swiper";
import { fetchData } from "../services";
import { CategoriesSection } from "./home.styles";

const Home = ({ HeaderProps, SwiperProps, CategoriesProps, FeedBackProps }) => {
  const [categories, setCategories] = useState();
  const [city, setCity] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    fetchData().then(function (result) {
      setCategories(result.categories);
      setCity(result.location.city);
      setLocation(result.location);
      console.log(HeaderProps);
    });
  }, []);

  const reformattedData = categories?.map((data) => {
    return {
      bgColor: data.bgColor ? data.bgColor : "#386F71",
      bgImage: data.media[0].location,
      title: data.name,
      Icon: data.iconName ? data.iconName : Restaurant2,
      onClick: () => console.log(data),
    };
  });

  const reformattedHeader = (data) => {
    return {
      variant: "primary",
      time: "20:48 pm",
      day: "23 Octobre, 2022",
      logo: data?.logo,
      WeatherIcon: CloudSunny,
      weather: "23 °C",
      city: data?.city,
    };
  };

  useEffect(() => {
    console.log(reformattedHeader(location));
  }, [reformattedHeader]);

  return (
    <>
      {/* <Header {...HeaderProps} /> */}
      {reformattedHeader && <Header {...reformattedHeader} />}
      <Swiper_v1 {...SwiperProps} />
      <CategoriesSection>
        <Shapes2 className="absolute right-0 h-full" />
        <Shapes3 className="absolute w-full h-[99rem] -left-[30.868rem] -top-[0.002rem]" />
        {/* <CategoriesGrid {...CategoriesProps} /> */}
        {reformattedData && <CategoriesGrid items={reformattedData} />}
        <FeedBackCard {...FeedBackProps} />
      </CategoriesSection>
    </>
  );
};

export default Home;
