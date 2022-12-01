import Dropdown from ".";
import Usa  from "../../assets/usa.svg";
import France  from "../../assets/France.svg";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  languages: [
    { language: "en", flag: Usa },
    { language: "fr", flag: France },
  ],
};
