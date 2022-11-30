import tw, { styled } from "twin.macro";

//Object variants
export const CardsVariant = {
  primary: tw`w-[115.25rem] max-h-[116.813rem] bg-white rounded-xl border shadow-lg`,
  secondary: tw`w-[97.375rem] max-h-[74rem] bg-white rounded-xl border shadow-lg`,
};

export const CardContainer = styled.div(({ theme }) => [
  //variants
  ({ variant }) => CardsVariant[variant],
  //base style
  `font-family: ${theme.fontFamily.secondary};`,
]);

export const CardImage = styled.div(({}) => [
  tw`flex [&>*]:w-full [&>*]:min-h-[40.125rem] [&>*]:rounded-t-lg [&>*]:object-cover`,
]);

export const ContentCard = styled.div(({ variant }) => [
  tw`max-h-[76.688rem] p-8`,
  variant === "secondary" && tw`max-h-[40.313rem] p-8`,
]);

export const Header = styled.div(tw`w-full flex justify-between`);

export const Title = styled.span(({ theme, titleColor, variant }) => [
  tw`font-medium`,
  variant == "primary"
    ? tw`text-[4.875rem] leading-[4.92rem]`
    : tw`text-[4.375rem] leading-[5.381rem]`,
  //Colors
  titleColor ? `color: ${titleColor};` : `color: ${theme.colors.text.primary};`,
]);

export const Status = styled.span(({ open, variant }) => [
  variant == "secondary"
    ? tw`hidden`
    : tw`flex justify-center items-center font-normal text-[4rem] uppercase`,
  //Colors
  open ? tw`text-[#4A995C]` : tw`text-[#E55675]`,
]);

export const Body = styled.div(({ theme, variant }) => [
  tw`font-light py-8`,
  variant == "primary"
    ? tw`text-[4rem] leading-[4.92rem] `
    : tw`text-[3rem] leading-[3.69rem]`,
  `color: ${theme.colors.text.primary};`,
]);

export const Time = styled.div(({ theme, variant }) => [
  variant == "secondary"
    ? tw`hidden`
    : tw`flex font-normal text-[3rem] leading-[4.92rem] text-[#5B5B5B] py-8`,
]);

export const Line = styled.div(({ theme, variant }) => [
  variant == "primary" && tw`w-full border border-[#7E7E7E]`,
]);

export const LinkSection = styled.div(({ theme, variant }) => [
  variant == "secondary"
    ? tw`hidden`
    : tw`flex justify-center items-center  pt-8 text-[#0E1222]`,
]);
export const LinkLabel = styled.span(({ theme }) => [
  tw`font-medium text-[4rem] leading-[4.92rem] uppercase underline ml-[2.379rem]`,
]);
export const BtnSection = styled.div(({ theme }) => [
  tw`flex items-center justify-between`,
]);
export const Direction = styled.span(({ theme, variant }) => [
  variant == "primary"
    ? tw`hidden`
    : tw`flex items-center font-light text-[3.625rem] leading-[4.459rem] uppercase text-[#0E1222] ml-[2.379rem] gap-4`,
]);
