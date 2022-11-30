import FeedBackCard from ".";

export default {
    title: "Components/FeedBackCard",
    component: FeedBackCard,
}

const Template = (args) => <FeedBackCard {...args} />

export const Default =  Template.bind({})
Default.args = {
    title: "How was your hotel experience?",
    onClick: () => {}
}