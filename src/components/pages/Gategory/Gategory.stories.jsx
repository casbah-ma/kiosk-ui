import Gategory from ".";
import * as HeaderStories from '@/components/Header/Header.stories'
import * as SwiperStories from '@/components/Swiper/Swiper.stories'
import * as CategoriesStories from '@/components/CategoriesGrid/CategoriesGrid.stories'
import * as FeedBackStories from '@/components/FeedBackCard/FeedBackCard.stories'

export default {
    title: "Pages/Gategory",
    component: Gategory,
}

const Template = (args) => <Gategory {...args} />

export const Default =  Template.bind({})
Default.args = {
    HeaderProps: { ...HeaderStories.Primary.args },
    SwiperProps: { ...SwiperStories.Default.args },
    CategoriesProps: { ...CategoriesStories.Default.args },
    FeedBackProps: { ...FeedBackStories.Default.args },
}