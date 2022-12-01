import {
  City,
  HeaderDay,
  HeaderTime,
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderText,
  StyledHeaderWeather,
  WeatherWrapper,
} from "./Header.styles";

const Header = ({ time, day, logo, WeatherIcon, weather, city }) => {
  return (
    <StyledHeader>
      <StyledHeaderText>
        <HeaderTime>{time}</HeaderTime>
        <HeaderDay>{day}</HeaderDay>
      </StyledHeaderText>
      <StyledHeaderLogo>
        <img src={logo} alt='logo'/>
        </StyledHeaderLogo>
      <StyledHeaderWeather>
        {WeatherIcon && <WeatherIcon />}
        <WeatherWrapper>
          {weather}
          <City>{city}</City>
        </WeatherWrapper>
      </StyledHeaderWeather>
    </StyledHeader>
  );
};

export default Header;
