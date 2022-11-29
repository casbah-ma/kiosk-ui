import Button from ".";
//decorator
import Centre from "@/components/Centre";
//theming
import { buttonsVariant } from "./Button.styles";
import { PlusIcon } from '@heroicons/react/24/solid'
import { ArrowRight } from "../Icons";

export default {
  title: "Common/Button",
  component: Button,
  decorators: [(story) => <Centre>{story()}</Centre>],
  argTypes: {
    variant: {
      options: Object.keys(buttonsVariant),
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  border: true,
  borderWidth: "3px",
  variant: "primary",
  label: "Give feedback",
  disabled: false,
  Icon: PlusIcon,
  t: (string) => string,
  handleClick: () => console.log("you clicked me"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
  color: "#000",
  bgColor: "#F3F3F3",
  borderColor:'#6A6969',
  borderWidth: "2px",
  Icon: '',
  label: "🇲🇦 Restaurant Marocain",
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Primary.args,
  variant: "rounded",
  border: false,
  label: "",
  bgColor: "#1D1D1D80",
  Icon: ArrowRight,
};

