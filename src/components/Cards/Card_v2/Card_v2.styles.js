import tw, { styled } from "twin.macro";

//Object variants
export const CardsVariant = {
  md: tw`flex [&>*]:w-full [&>*]:h-[46.5rem] [&>*]:rounded-t-lg [&>*]:object-cover`,
  sm: tw`flex [&>*]:w-full [&>*]:h-[30.563rem] [&>*]:rounded-t-lg [&>*]:object-cover`,
};

export const CardContainer = styled.div(({ theme }) => [
  tw`w-[55.188rem] max-h-[98rem] bg-white rounded-xl border shadow-lg`,
  //base style
  `font-family: ${theme.fontFamily.secondary};`,
]);

export const CardImage = styled.div(({}) => [
  //variants
  ({ variant }) => CardsVariant[variant],
]);

export const ContentCard = styled.div(({}) => [tw`max-h-[51.5rem] p-12`]);

export const Title = styled.span(({ theme, titleColor }) => [
  tw`font-semibold text-[4rem] leading-[4.92rem]`,
  //Colors
  titleColor ? `color: ${titleColor};` : `color: ${theme.colors.text.primary};`,
]);

export const BtnSection = styled.div(({}) => [
  tw`flex items-center flex-col gap-8 mt-[8rem] mb-[4rem]`,
]);

export const FirstBtn = styled.button(({}) => [
  tw`flex justify-center items-center w-[40rem] font-semibold text-[3.25rem] leading-[4rem] py-4 border-8 bg-white border-[#0E1222] rounded-full gap-4`,
  `box-shadow: 2.6px 5.2px 31.2px rgba(0, 0, 0, 0.45);`,
]);

export const SecondBtn = styled.button(({}) => [
  tw`flex justify-center items-center w-[40rem] font-semibold text-[3.25rem] leading-[4rem] py-4 border-8 bg-[#0E1222] border-white text-white rounded-full gap-4`,
  `box-shadow: 2.6px 5.2px 31.2px rgba(0, 0, 0, 0.45);`,
]);
