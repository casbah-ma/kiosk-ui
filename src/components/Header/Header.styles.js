import tw, { styled } from "twin.macro";

export const StyledHeader = styled.div(({ theme }) => [
  tw`w-full h-[23.875rem] flex flex-row p-[6rem]`,
  `font-family: ${theme.fontFamily.primary};`,
]);

export const StyledHeaderText = styled.div(({variant}) => [
  variant == "secondary"
  ? tw`basis-1/3 [&>*]:hidden`
  :tw`basis-1/3 flex justify-center flex-col`,
]);
export const HeaderTime = styled.span(({ theme }) => [
  tw`font-semibold text-[4.75rem] leading-[5.843rem] tracking-tighter`,
  `color: ${theme.colors.text.primary};`,
]);
export const HeaderDay = styled.span(({ theme }) => [
  tw`font-normal text-[4rem] leading-[4.92rem] tracking-tighter`,
  `color: ${theme.colors.text.primary};`,
]);
export const StyledHeaderLogo = styled.div(({}) => [
  tw`basis-1/3 flex justify-center items-center`,
]);
export const StyledHeaderWeather = styled.div(({ variant }) => [
  variant == "secondary"
    ? tw`hidden`
    : tw`basis-1/3 flex justify-end items-center`,
]);
export const WeatherWrapper = styled.div(({}) => [
  tw`font-semibold text-[4.75rem] leading-[5.843rem] tracking-tighter text-[
        #f7b23b]`,
]);
export const City = styled.div(({ theme }) => [
  tw`font-normal text-[4rem] leading-[4.92rem] tracking-tighter`,
  `color: ${theme.colors.text.primary};`,
]);

export const DropdownContainer = styled.div(({ variant }) => [
  variant == "primary"
  ? tw`hidden`
  :tw`basis-1/3 flex justify-end items-center`,
]);
