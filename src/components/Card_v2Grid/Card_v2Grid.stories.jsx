import Card_v2Grid from ".";
import {
  Bar,
  Lodging,
  Map,
  Meeting,
  Music,
  Plan,
  Restaurant,
  Restaurant2,
  Spa,
} from "../Icons";

export default {
  title: "Components/Card_v2Grid",
  component: Card_v2Grid,
};

const Template = (args) => <Card_v2Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      variant: "md",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Title of the document should be here",
      btnlabel1: "Preview",
      btnlabel2: "Get document",
    },
    {
      variant: "sm",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Title of the document should be here",
      btnlabel1: "Preview",
      btnlabel2: "Get document",
    },
    {
      variant: "sm",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Title of the document should be here",
      btnlabel1: "Preview",
      btnlabel2: "Get document",
    },
    {
      variant: "md",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Title of the document should be here",
      btnlabel1: "Preview",
      btnlabel2: "Get document",
    },
  ],
};
