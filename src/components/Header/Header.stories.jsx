import Header from ".";
import { CloudSunny } from "../Icons";
import Logo from "../../assets/logo.svg";
import Usa  from "../../assets/usa.svg";
import France  from "../../assets/France.svg";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  time: "20:48 pm",
  day: "23 Octobre, 2022",
  logo: Logo,
  WeatherIcon: '01d',
  weather: "23 °C",
  city: "Casablanca",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  logo: Logo,
  languages: [
    { language: "en", flag: Usa },
    { language: "fr", flag: France },
  ],
};
