import Modal from ".";
export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  title: "How was your hotel experience so far?",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  text: "Feedback sent! Thank you for your time",
};
