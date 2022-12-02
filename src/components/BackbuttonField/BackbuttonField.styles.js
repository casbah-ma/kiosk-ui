import tw, { styled } from "twin.macro";

export const StyledBackbuttonField = styled.div(({ theme }) => [
  tw`w-full h-[32.125rem] flex items-center justify-between bg-[#0E1222]
  px-[9.875rem] font-normal text-white`,
  `font-family: ${theme.fontFamily.primary};`,
]);

export const StyledBtn = tw.button`w-[24rem] flex items-center justify-center text-[4.375rem] leading-[5.381rem] py-[2.125rem] border-[0.375rem] rounded-full gap-[2.313rem] bg-[#202434]` 
export const Text = tw.div`text-[6.25rem] leading-[7.688rem]` 
