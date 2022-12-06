import { useEffect, useState } from "react";
import CategoriesGrid from "../../components/CategoriesGrid";
import FeedBackCard from "../../components/FeedBackCard";
import Header from "../../components/Header";
import { Restaurant2, Shapes2, Shapes3 } from "../../components/Icons";
import Swiper_v1 from "../../components/Swiper";
import {
  fetchData,
  formatAMPM,
  formatDate,
  getLocation,
  getweather,
  mainCategories,
} from "../services";
import { CategoriesSection } from "./home.styles";
import useData from "@/hooks/useData";

const Home = ({ HeaderProps, SwiperProps, CategoriesProps, FeedBackProps }) => {
  const [categories, setCategories] = useState();
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [reformattedHeader, setReformattedHeader] = useState({});
  const { fetchedData, setFetchedData } = useData();
  let time = formatAMPM(new Date());
  const [cTime, setTime] = useState(time);

  //Fetch Data
  useEffect(() => {
    fetchData().then((result) => {
      setFetchedData(result);
    });
  }, []);

  //Get Categories And Location
  useEffect(() => {
    mainCategories(fetchedData).then(function (result) {
      setCategories(result);
      getLocation(fetchedData).then(function (res) {
        handleReformattedHeader(res);
        setLocation(res?.loc);
      });
    });
  }, [fetchedData, weather]);

  //Get Weather and WeatherIcon
  useEffect(() => {
    location &&
      getweather(location).then(function (result) {
        setWeather(Math.round(parseFloat(result.main.temp)));
        setWeatherIcon(result.weather[0].icon);
      });
  }, [location]);

  //Update Time
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time);
    }, 1000);
    return () => clearInterval(id);
  }, [cTime]);

  //Reformatte Categories
  const reformattedData = categories?.map((data) => {
    return {
      bgColor: data.bgColor ? data.bgColor : "#386F71",
      bgImage: data.media[0].location,
      title: data.name,
      Icon: data.iconName ? data.iconName : Restaurant2,
      onClick: () => console.log(data),
    };
  });

  //Reformatte Header
  const handleReformattedHeader = (data) => {
    setReformattedHeader({
      variant: "primary",
      time: cTime,
      day: formatDate(),
      logo: data?.logo,
      WeatherIcon: weatherIcon,
      weather: weather && weather + "  °C",
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
