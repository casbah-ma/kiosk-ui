import Modal from ".";
export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "How was your hotel experience so far?"
};
