import Card_v1 from ".";
//decorator
import { PlusIcon } from '@heroicons/react/24/solid'

export default {
  title: "Components/Cards/Card_v1",
  component: Card_v1,
  argTypes: {},
};

const Template = (args) => <Card_v1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Restaurant name",
  status: "opened",
  open: true,
  article:
    "Enim lectus dignissim arcu pharetra. Amet non elit et pulvinar amet. Orci non tristique in sagittis urna amet quisque aenean lacus...",
  time: "Open at 9:00 AM - Close at 23:00 PM",
  linkLabel: "Check the menu",
  btnvariant: "secondary",
  btncolor: "#000",
  btnbgColor: "#F3F3F3",
  btnborderColor:'#6A6969',
  btnborderWidth: "2px",
  btnlabel: "🇲🇦 Restaurant Marocain",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Place name",
  article:
    "Magna mi ac sem fusce amet metus iaculis tellus. Ac vitae erat dui odio vel vehicula tempus scelerisque imperdiet.",
  direction:"DISTANCE: 120M",
  btnvariant: "primary",
  btncolor: "",
  btnbgColor: "",
  btnborderColor:'',
  btnIcon: PlusIcon,
  btnborderWidth: "2px",
  btnlabel: "Add",
};
