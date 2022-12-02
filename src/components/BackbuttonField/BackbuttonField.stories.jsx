import BackbuttonField from ".";

export default {
  title: "Components/BackbuttonField",
  component: BackbuttonField,
};

const Template = (args) => <BackbuttonField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Back",
  text: "Restaurants (3)",
};
