import tw, { styled } from "twin.macro";

export const EmojiContainer = styled.div(({}) => [tw`w-[25rem]`]);

export const IconContainer = styled.div(({ bgColor }) => [
  tw`flex justify-center items-center w-[25rem] h-[25rem] rounded-full`,
  bgColor && `background-color: ${bgColor}24;`,
]);

export const Title = styled.div(({ theme }) => [
  tw`flex justify-center items-center font-medium	text-[4.625rem] leading-[5.689rem] mt-[3.063rem]`,
  `font-family: ${theme.fontFamily.secondary};`,
  `color: ${theme.colors.text.primary};`,
]);
