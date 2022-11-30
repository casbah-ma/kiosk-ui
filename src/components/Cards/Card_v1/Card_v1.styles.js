import tw, { styled } from "twin.macro";

export const CardContainer = styled.div(({ theme }) => [
  tw`w-[115.25rem] max-h-[116.813rem] bg-white rounded-xl border shadow-lg`,
  //base style
  `font-family: ${theme.fontFamily.secondary};`,
]);

export const CardImage = styled.div(({}) => [
  tw`flex [&>*]:w-full [&>*]:min-h-[40.125rem] [&>*]:rounded-t-lg [&>*]:object-cover`,
]);

export const ContentCard = styled.div(tw`max-h-[76.688rem] p-8`);
export const Header = styled.div(tw`w-full flex justify-between`);

export const Title = styled.span(({ theme, titleColor }) => [
  tw`font-medium text-[4.875rem] leading-[4.92rem]`,
  //Colors
  titleColor ? `color: ${titleColor};` : `color: ${theme.colors.text.primary};`,
]);

export const Status = styled.span(({ open }) => [
  tw`flex justify-center items-center font-normal text-[4rem] uppercase`,
  //Colors
  open ? tw`text-[#4A995C]` : tw`text-[#E55675]`,
]);

export const Body = styled.div(({ theme }) => [
  tw`font-light text-[4rem] leading-[4.92rem] py-8`,
  `color: ${theme.colors.text.primary};`,
]);

export const Time = styled.div(({ theme }) => [
  tw`flex font-normal text-[3rem] leading-[4.92rem] text-[#5B5B5B] py-8`,
]);

export const Line = styled.div(({ theme }) => [
  tw`w-full border border-[#7E7E7E]`,
]);

export const LinkSection = styled.div(({ theme }) => [
  tw`flex justify-center items-center  pt-8 text-[#0E1222]`,
]);
export const LinkLabel = styled.span(({ theme }) => [
  tw`font-medium text-[4rem] leading-[4.92rem] uppercase underline ml-[2.379rem]`,
]);
