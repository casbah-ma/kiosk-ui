import Categories from ".";
import { Restaurant } from "../Icons";
export default {
  title: "Components/Categories",
  component: Categories,
  argTypes: {},
};

const Template = (args) => <Categories {...args} />;

export const Categorie = Template.bind({});
Categorie.args = {
  bgColor: "#6A66B5",
  bgImage:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Restaurants",
  Icon: Restaurant,
  onClick: () => console.log("clicked"),
};
