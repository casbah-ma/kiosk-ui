import tw, { styled } from "twin.macro";

export const CategoriesContainer = styled.div(({border, bgColor}) => [
  tw`w-[30rem] h-[23.875rem]`,
  border &&  tw`border-8 rounded-tl-sm  rounded-tr-lg`,
  bgColor && `background-color: ${bgColor};`
]);
