import tw, { styled } from "twin.macro";

export const Slide = styled.img(({ theme }) => [
  tw`!w-[135rem] !h-[102.938rem] object-cover	`,
  `font-family: ${theme.fontFamily.primary};`,
]);
