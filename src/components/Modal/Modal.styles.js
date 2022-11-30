import tw, { styled } from "twin.macro";

export const ModalContainer = styled.div(({}) => [
  tw`w-[115.25rem] h-[87.625rem] rounded-[4.25rem] p-[7.313rem]`,
  `box-shadow: 8px 12px 32px rgba(0, 0, 0, 0.55);`
]);

export const Title = styled.div(({ theme }) => [
  tw`font-semibold text-[6.25rem] leading-[7.688rem]`,
  `font-family: ${theme.fontFamily.secondary};`,
  `color: ${theme.colors.text.primary};`,
]);

export const TitleContainer = styled.div(({ theme }) => [
  tw`flex justify-between items-center`,
]);
export const EmojiSection = styled.div(({ theme }) => [
  tw`flex justify-between items-center mt-[14rem]`,
]);
