import Categories from ".";
import { Restaurant } from "../Icons";
export default {
  title: "Components/Categories",
  component: Categories,
  argTypes: {},
};

const Template = (args) => <Categories {...args} />;

export const Colored = Template.bind({});
Colored.args = {
  border: true,
  bgColor: "#6A66B5",
  title: "Restaurants",
  titleBgColor: "#4A4787",
  Icon: Restaurant,
  onClick: () => console.log("clicked"),
};

export const Image = Template.bind({});
Image.args = {
  border: false,
  bgColor: "#6A66B5",
  bgImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Restaurants",
  titleBgColor: "#4A4787",
  Icon: Restaurant,
  onClick: () => console.log("clicked"),
};
