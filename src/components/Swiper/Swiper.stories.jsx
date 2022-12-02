import Swiper from ".";
import Usa  from "../../assets/usa.svg";
import France  from "../../assets/France.svg";

export default {
  title: "Components/Swiper",
  component: Swiper,
};

const Template = (args) => <Swiper {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
  ],
  languages: [
    { language: "en", flag: Usa },
    { language: "fr", flag: France },
  ],
};
