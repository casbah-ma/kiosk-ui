import Emoji from ".";
import Good from "../Icons/Good";
export default {
  title: "Components/Emoji",
  component: Emoji,
  argTypes: {},
};

const Template = (args) => <Emoji {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Icon: Good,
    bgColor: '#52ACB5',
    title: "Very good"
};
