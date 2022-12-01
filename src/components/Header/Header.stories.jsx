import Header from ".";
import { CloudSunny } from "../Icons";
import Logo  from "../../assets/logo.svg";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    time: "20:48 pm",
    day: "23 Octobre, 2022",
    logo: Logo,
    WeatherIcon: CloudSunny,
    weather: "23 °C",
    city: "Casablanca",
};
