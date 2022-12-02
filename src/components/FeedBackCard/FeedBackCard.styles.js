import tw, { styled } from "twin.macro";

export const StyledFeedBackCard = tw.div`h-[20.125rem] bg-white flex items-center justify-between 
py-[2.75rem] px-[6.25rem] rounded-2xl shadow-lg gap-[19.625rem] relative overflow-hidden mx-[2.75rem]`;

export const ShapesContainer = tw.div`h-full absolute top-0 left-0 flex items-start justify-items-start` 

export const StyledFeedBackCardText = styled.div(({ theme }) => [
  tw`flex items-center justify-center font-medium text-[4rem] z-10
    leading-[4.938rem] text-[#131730] text-center`,
  `font-family: ${theme.fontFamily.primary};`,
]);
