import tw, { styled } from "twin.macro";

export const StyledDropdown = styled.div(({ theme }) => [
  tw``,
  `font-family: ${theme.fontFamily.primary};`,
]);

export const List = styled.ul(({}) => [
  tw`    w-full flex flex-col gap-2 py-4 absolute justify-center items-center sm:left-[0.5px] mt-2 origin-top-right 
  divide-y divide-gray-100 rounded-lg ring-black shadow-2xl ring-opacity-5 focus:outline-none bg-[#161928] `,
]);

export const ListItem = styled.li(({ active }) => [
  tw`flex justify-center items-center cursor-pointer w-full px-4 py-1 first:pt-0 last:pb-0
  font-normal text-[4rem] leading-[4.92rem] tracking-tighter text-white uppercase gap-[1rem]
  `,
  active && tw`bg-blue-300`,
]);

export const Label = styled.span(({}) => [tw``]);
export const Flag = styled.img(({}) => [tw``]);

export const ToggleButton = styled.div(({ open }) => [
  !open && tw`transform transition-transform duration-500 `,
  open && tw`transform transition-transform duration-500 rotate-180`,
]);
