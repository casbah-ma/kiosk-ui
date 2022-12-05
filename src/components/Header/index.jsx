import Dropdown from "../Dropdown";
import {
  City,
  DropdownContainer,
  HeaderDay,
  HeaderTime,
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderText,
  StyledHeaderWeather,
  WeatherWrapper,
} from "./Header.styles";

const Header = ({
  time,
  day,
  logo,
  WeatherIcon,
  weather,
  city,
  variant,
  languages,
}) => {
  return (
    <StyledHeader>
      <StyledHeaderText variant={variant}>
        <HeaderTime>{time}</HeaderTime>
        <HeaderDay>{day}</HeaderDay>
      </StyledHeaderText>
      <StyledHeaderLogo>
        {logo && <img src={logo} alt="logo" />}
      </StyledHeaderLogo>
      <StyledHeaderWeather variant={variant}>
        {WeatherIcon && (
          <img
            width={190}
            height={190}
            src={`weatherIcons/${WeatherIcon}.svg`}
          />
        )}
        {/* {WeatherIcon && <WeatherIcon />} */}
        <WeatherWrapper>
          {weather}
          <City>{city}</City>
        </WeatherWrapper>
      </StyledHeaderWeather>
      <DropdownContainer variant={variant}>
        {variant == "secondary" && <Dropdown languages={languages} />}
      </DropdownContainer>
    </StyledHeader>
  );
};

export default Header;
