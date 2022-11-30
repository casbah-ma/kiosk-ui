import tw, { styled } from "twin.macro";

export const CategoriesContainer = styled.div(({ bgColor, border, theme }) => [
  tw`min-w-[30rem] max-w-[30rem] max-h-[23.875rem] min-h-[23.875rem] 
    flex items-start justify-center pt-[6.25rem] relative cursor-pointer  overflow-hidden
    rounded-tl-xl rounded-tr-[4rem]`,
  ` background-color: ${bgColor};
    `,
]);

export const CategoriesCardImage = tw.img`absolute top-0 left-0 w-full h-full opacity-40 object-cover`;
export const CategoriesCardIcon = tw.div`w-[6.25rem] h-[6.25rem]  z-10`;

export const CategoriesCardTitle = styled.div(({ bgColor, theme }) => [
  tw`absolute bottom-0 left-0 w-full h-[6.938rem] rounded-t-[2.5rem] z-20
  flex items-center justify-center font-medium text-5xl text-white text-center`,
  `
    font-family: ${theme.fontFamily.primary};
    background-color: ${bgColor};`,
]);
