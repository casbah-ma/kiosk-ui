import Gategory from ".";
import * as HeaderStories from '@/components/Header/Header.stories'
import * as BackbuttonStories from '@/components/BackbuttonField/BackbuttonField.stories'
import * as Card_v1MapStories from '@/components/Card_v1Map/Card_v1Map.stories'

export default {
    title: "Pages/Gategory",
    component: Gategory,
}

const Template = (args) => <Gategory {...args} />

export const Default =  Template.bind({})
Default.args = {
    HeaderProps: { ...HeaderStories.Secondary.args },
    BackbuttonProps: { ...BackbuttonStories.Default.args },
    Card_v1MapProps: { ...Card_v1MapStories.Default.args },
}