import Categories from ".";
//decorator
import Centre from "@/components/Centre";

export default {
  title: "Components/Categories",
  decorators: [(story) => <Centre>{story()}</Centre>],
  component: Categories,
  argTypes: {},
};

const Template = (args) => <Categories {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  bgColor: "#397346",
  border: true,
};
