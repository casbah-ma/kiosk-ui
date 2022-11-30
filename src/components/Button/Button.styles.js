import tw, { styled } from "twin.macro";

//Object variants
export const buttonsVariant = {
  primary: tw`flex justify-center items-center rounded-full w-1/6  min-w-min whitespace-nowrap`,
  secondary: tw`flex justify-center items-center rounded-xl`,
  rounded: tw`flex justify-center items-center p-1 md:p-1.5 lg:p-3 rounded-full`,
};

export const StyledButton = styled.button(
  ({ disabled, color, bgColor, theme, borderWidth, border, borderColor, variant }) => [
    //variants
    ({ variant }) => buttonsVariant[variant],

    //base style
    `font-family: ${theme.fontFamily.secondary};`,
    variant != "rounded" && tw`px-3 py-3 lg:px-5 font-medium text-sm 
    md:text-base lg:text-xl`,
    variant === "secondary" && tw`font-normal text-[4rem] leading-[4.92rem]`,
    //Colors
    color ? `color: ${color};` : `color: ${theme.colors.text.secondary};`,
    bgColor
      ? `background-color: ${bgColor};`
      : `background-color: ${theme.colors.bg.primary};`,

    //Disable
    disabled && tw`bg-gray-100 text-black`,

    //Border Style
    border && `border-width:${borderWidth};`,
    borderColor
      ? `border-color: ${borderColor};`
      : `border-color: ${theme.colors.text.secondary};`,
  ]
);

export const StyledIcon = styled.span(({ label, color }) => [
  color && `color: ${color}`,
  label && tw`mr-3`
]);
