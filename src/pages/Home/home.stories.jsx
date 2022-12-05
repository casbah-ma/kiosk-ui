import Home from ".";
import * as HeaderStories from '@/components/Header/Header.stories'
import * as SwiperStories from '@/components/Swiper/Swiper.stories'
import * as CategoriesStories from '@/components/CategoriesGrid/CategoriesGrid.stories'
import * as FeedBackStories from '@/components/FeedBackCard/FeedBackCard.stories'

export default {
    title: "Pages/Home",
    component: Home,
}

const Template = (args) => <Home {...args} />

export const Default =  Template.bind({})
Default.args = {
    HeaderProps: { ...HeaderStories.Primary.args },
    SwiperProps: { ...SwiperStories.Default.args },
    CategoriesProps: { ...CategoriesStories.Default.args },
    FeedBackProps: { ...FeedBackStories.Default.args },
}