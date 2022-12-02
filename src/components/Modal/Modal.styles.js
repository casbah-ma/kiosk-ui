import tw, { styled } from "twin.macro";
//Object variants
export const ModalVariant = {
  primary: tw``,
  secondary: tw``,
};

export const ModalContainer = styled.div(({}) => [
  tw`w-[115.25rem] h-[87.625rem] rounded-[4.25rem] p-[7.313rem]`,
  `box-shadow: 8px 12px 32px rgba(0, 0, 0, 0.55);`
]);

export const Title = styled.div(({ theme,variant }) => [
  variant == "secondary"
  ? tw`hidden`
  :tw`font-semibold text-[6.25rem] leading-[7.688rem]`,
  `font-family: ${theme.fontFamily.secondary};`,
  `color: ${theme.colors.text.primary};`,
]);

export const TitleContainer = styled.div(({ theme ,variant}) => [
  variant == "secondary"
  ? tw`flex justify-end`
  :tw`flex justify-between items-center`,
]);
export const EmojiSection = styled.div(({ theme, variant }) => [
  variant == "secondary"
  ? tw`hidden`
  :tw`flex justify-between items-center mt-[14rem]`,
]);

export const SecondarySection = styled.div(({ theme, variant }) => [
  variant == "primary"
  ? tw`hidden`
  :tw`relative flex justify-between items-center flex-col mt-[7.132rem] gap-[10.188rem]`,
]);

export const Text = styled.div(({ theme }) => [
  tw`font-semibold text-[6.25rem] leading-[7.688rem] text-center`,
  `font-family: ${theme.fontFamily.secondary};`,
  `color: ${theme.colors.text.primary};`,
]);
