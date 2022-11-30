import CategoriesGrid from ".";
import { Bar, Lodging, Map, Meeting, Music, Plan, Restaurant, Restaurant2, Spa } from "../Icons";

export default {
  title: "Components/CategoriesGrid",
  component: CategoriesGrid,
};

const Template = (args) => <CategoriesGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      bgColor: "#4A4787",
      bgImage:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Restaurants",
      Icon: Restaurant2,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#8C3D4E",
      bgImage:
        "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      title: "Bars",
      Icon: Bar,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#386F71",
      bgImage:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Night clubs",
      Icon: Music,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#3C5C43",
      bgImage:
        "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Plan your day",
      Icon: Plan,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#2B6A9B",
      bgImage:
        "https://images.unsplash.com/photo-1595368062392-a189a24c0cf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Lodging",
      Icon: Lodging,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#743C77",
      bgImage:
        "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Meeting Space",
      Icon: Meeting,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#B17B41",
      bgImage:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "SPA",
      Icon: Spa,
      onClick: () => console.log("clicked"),
    },
    {
      bgColor: "#494588",
      bgImage:
        "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      title: "Map and Documentation",
      Icon: Map,
      onClick: () => console.log("clicked"),
    },
  ],
};
