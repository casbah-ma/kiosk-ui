import Card_v1 from ".";
//decorator
import Centre from "@/components/Centre";

export default {
  title: "Components/Cards/Card_v1",
  decorators: [(story) => <Centre>{story()}</Centre>],
  component: Card_v1,
  argTypes: {},
};

const Template = (args) => <Card_v1 {...args} />;

export const small = Template.bind({});
small.args = {
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Restaurant name",
  status: "opened",
  open: true,
  article:
    "Enim lectus dignissim arcu pharetra. Amet non elit et pulvinar amet. Orci non tristique in sagittis urna amet quisque aenean lacus...",
  time: "Open at 9:00 AM - Close at 23:00 PM",
  linkLabel: "Check the menu",
};
