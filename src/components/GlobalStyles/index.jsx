import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`

.logo {
  font-size: 0
}

.full-width {
  width: 100%;
}

.animate-chevron-down {
  ${tw`rotate-180 transform transition-transform duration-500 focus:outline-none`}
}
.animate-chevron-up {
  ${tw`transition-transform duration-500 focus:outline-none`}
}
//images
.radius-lg {
  ${tw`rounded-lg`}
}
.radius-xl {
  ${tw`rounded-xl`}
}

// Swiper
.swiper {
  ${tw`w-full h-full`}
}


//BookingBar
.booking-wrapper {
  ${tw` w-full h-full`}
}

.booking-columns {
  ${tw`flex flex-col items-center justify-center w-full h-full [&>*]:ml-2 [&>span]:mt-3 gap-3.5`}
}

.booking-columns.v3{
  ${tw`cursor-pointer`}
}

.booking-columns-button {
  ${tw`flex gap-3 justify-center items-center [&>span]:text-gray-500 text-gray-500`}
}

.panel.v3 {
  ${tw`right-0 xs:bottom-[4.6rem] bottom-32 lg:bottom-36
 xs:top-[1.5rem] lg:top-auto xs:overflow-hidden lg:overflow-auto xs:z-10 xs:h-auto xs:ml-0 xs:rounded-b-none lg:rounded-xl xs:shadow-none lg:shadow-card
  `}
}

.panel {
  ${tw`p-10 w-full rounded-xl h-[26.25rem] absolute left-0 bottom-24 flex justify-center items-center shadow-card`}
  background:  ${({ theme }) => theme.colors.DatesCore.bg};
  color: ${({ theme }) => theme.colors.DatesCore.text};
}
.datesPanel{
  ${tw`xs:w-full sm:w-[22.438rem] md:w-[45.5rem] lg:w-[68.75rem] xs:h-[20rem] sm:h-[24.375rem] md:h-[26.25rem] 
  p-10 rounded-xl absolute left-0 bottom-36 md:bottom-24 lg:bottom-32 flex justify-center items-center shadow-card`}
  background-color:  ${({ theme }) => theme.colors.DatesCore.bg};
  color: ${({ theme }) => theme.colors.DatesCore.text};
}

.panel-mobile.v1{
  ${tw` xs:w-[18rem] sm:w-full xs:overflow-hidden lg:overflow-auto`}
}

.panel-mobile { 
  ${tw`p-3 rounded-xl  h-[20.375rem] w-full  mb-3 flex justify-center items-center shadow-card`}
  background:  ${({ theme }) => theme.colors.DatesCore.bg};
  color: ${({ theme }) => theme.colors.DatesCore.text};
}
.guest-panel {
  ${tw`p-3 rounded-xl h-[12.75rem] w-full mb-3 flex justify-center items-center shadow-card`}
  background:  ${({ theme }) => theme.colors.DatesCore.bg};
  color: ${({ theme }) => theme.colors.DatesCore.text};
}


 .desktop-action {
  ${tw`w-1/3 h-full flex justify-center items-center p-6`}
 }

//Hamburger menu
.dialog {
  ${tw`fixed bg-black/25 z-10 inset-0`}

  .dialog-panel {
    ${tw`w-3/4 h-screen max-w-md transform overflow-hidden bg-white p-6 text-left align-middle transition-all`}
  }
  //button animation
  .button-enter {
    ${tw`transform transition duration-[400ms]`}
 }
  .button-enter-from {
    ${tw`opacity-0 rotate-[-120deg] scale-50`}
 }
  .button-enter-to {
  ${tw`opacity-100 rotate-0 scale-100`}
 }
  .button-leave {
  ${tw`transform duration-200 transition ease-in-out`}
 } 
  .button-leave-from {
  ${tw`opacity-100 rotate-0 scale-100`}
 }
  .button-leave-to {
  ${tw`opacity-0 scale-95`}
 }

  //panel animation
  .enter {
     ${tw`transform transition duration-[700ms]`}
  }
  .enter-from {
     ${tw`opacity-0 -translate-x-80`}
  }
  .enter-to {
   ${tw`opacity-100 translate-x-0`}
  }
  .leave {
   ${tw`transform duration-200 transition ease-in-out`}
  } 
  .leave-from {
   ${tw`opacity-100 translate-x-0`}
  }
  .leave-to {
   ${tw`opacity-0 -translate-x-80`}
  }
}
  
//Dropdown
.menu {
     ${tw`relative inline-block text-left`}
     button {
      ${tw`inline-flex justify-center items-center gap-[1rem] bg-[#161928] 
      text-white w-[23.313rem] h-[7.938rem] rounded-full uppercase
      font-normal text-[4rem] leading-[4.92rem] tracking-tighter
      border border-8 border-[#243c5a80]`}
     }

     svg {
        ${tw`h-[4rem] w-[4rem] text-black`}
     }

     //animation
     .enter {
        ${tw`transition ease-out duration-100`}
     }
     .enter-from {
        ${tw`transform opacity-0 scale-95`}
     }
     .enter-to {
      ${tw`transform opacity-100 scale-100`}
     }
     .leave {
      ${tw`transition ease-in duration-75`}
     } 
     .leave-from {
      ${tw`transform opacity-100 scale-100`}
     }
     .leave-to {
      ${tw`transform opacity-0 scale-95`}
     }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } 
  .swiper-slide {
    width: fit-content;
    height: fit-content;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: 'next';
    font-size: 0.6rem !important;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    ${tw`invisible bg-white group-hover:visible rounded-full text-3xl after:text-black after:content-["next"] cursor-pointer`}
    &:after {
      color: white;
     }
  }
  .swiper-button-prev{
    ${tw`after:content-["prev"]`}
  }

  .mySwiper_v2 {
    ${tw`w-full h-full`}
  }
  .mySwiper_v2 .swiper-slide {
    width: fit-content;
    height: fit-content;
  }
  .mySwiper_v3 {
    ${tw`w-full h-[40rem] bg-transparent`}
  }
 

  .CalendarDay__default {
    border-radius: 50%;
  }
.DayPicker,
.CalendarMonthGrid,
.CalendarMonth,
.CalendarMonth_caption,
.CalendarDay__default,
.DayPickerNavigation_button__default,
.DayPickerNavigation_svg__horizontal,
.DayPickerKeyboardShortcuts_panel,
.DayPickerNavigation_button__verticalDefault,
.DayPicker_weekHeader__verticalScrollable,
.DayPicker_weekHeader_li,
.DayPicker__horizontal {
  ${tw`outline-none rounded-full`}
  background: ${({ theme }) => theme.colors.DatesCore.bg} !important;
  color: ${({ theme }) => theme.colors.DatesCore.text} !important;
  fill: ${({ theme }) => theme.colors.DatesCore.text} !important;
 }
.CalendarDay__selected_span {
  background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
  color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  &:hover, &:active {
    background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
    color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  }
}
.CalendarDay__highlighted_calendar {
  background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
  color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  &:hover, &:active {
    background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
    color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  }
}
.CalendarDay__selected {
  background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
  color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  &:hover, &:active {
    background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
    color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  }
}
.CalendarDay__hovered_span {
  &:hover{
    background: ${({ theme }) => theme.colors.DatesCore.bgSelected} !important;
    color: ${({ theme }) => theme.colors.DatesCore.textSelected} !important;
  }
}

.swiper{
  ${tw`!flex !justify-center !items-center  !h-[102.938rem]`}
}

.swiper-pagination {
  ${tw`!flex !justify-center !items-center !w-[14.625rem] !h-[5.625rem]`}
  opacity: 1;
  border: 3px solid #8C8C8C !important;
  background-color: white !important;
  box-shadow: 6px 12px 48px rgba(0, 0, 0, 0.16) !important;
  border-radius: 300px !important;
  left: unset !important;
}

.swiper-pagination-bullet-active {
  background-color: #000 !important;
  ${tw`!w-[2.625rem] !h-[2.625rem]`}
}
.swiper-pagination-bullet {
  ${tw`w-[1.875rem] h-[1.875rem]`}
}

`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
export default GlobalStyles
