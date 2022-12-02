import tw, { styled } from "twin.macro";

export const Slide = styled.img(({ theme }) => [
  tw`!w-[135rem] !h-[102.938rem] object-cover	`,
  `font-family: ${theme.fontFamily.primary};`,
]);

export const DropdownContainer = styled.div(({ theme }) => [
  tw`absolute z-10 top-[28.688rem] left-[104.125rem]`,
]);
