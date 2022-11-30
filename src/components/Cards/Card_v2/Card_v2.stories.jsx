import Card_v2 from ".";
//decorator

export default {
  title: "Components/Cards/Card_v2",
  component: Card_v2,
  argTypes: {},
};

const Template = (args) => <Card_v2 {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  variant: "md",
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Title of the document should be here",
  btnlabel1: "Preview",
  btnlabel2: "Get document",
};

export const Small = Template.bind({});
Small.args = {
  variant: "sm",
  image:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  title: "Title of the document should be here",
  btnlabel1: "Preview",
  btnlabel2: "Get document",
};

