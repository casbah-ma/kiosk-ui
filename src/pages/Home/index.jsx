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
import { fetchData, formatAMPM, formatDate, getweather } from "../services";
import { CategoriesSection } from "./home.styles";

const Home = ({ HeaderProps, SwiperProps, CategoriesProps, FeedBackProps }) => {
  const [categories, setCategories] = useState();
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const [reformattedHeader, setReformattedHeader] = useState({});

  useEffect(() => {
    fetchData().then(function (result) {
      setCategories(result.categories);
      setLocation(result.location.loc);
      handleReformattedHeader(result.location);
    });
  }, [weather]);

  useEffect(() => {
    location &&
      getweather(location).then(function (result) {
        console.log(Math.round(parseFloat(result.main.temp)));
        setWeather(Math.round(parseFloat(result.main.temp)));
      });
  }, [location]);

  const reformattedData = categories?.map((data) => {
    return {
      bgColor: data.bgColor ? data.bgColor : "#386F71",
      bgImage: data.media[0].location,
      title: data.name,
      Icon: data.iconName ? data.iconName : Restaurant2,
      onClick: () => console.log(data),
    };
  });

  const handleReformattedHeader = (data) => {
    setReformattedHeader({
      variant: "primary",
      time: formatAMPM(new Date()),
      day: formatDate(),
      logo: data?.logo,
      WeatherIcon: CloudSunny,
      weather: weather && weather + " °C",
      city: data?.city,
    });
  };

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
