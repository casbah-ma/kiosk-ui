import tw, {styled} from "twin.macro";

export const StyledModalBlur = styled.div(({theme}) => [
    `background: ${theme.colors.gradient.primary};`,
    tw`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50  backdrop-blur-[14.063rem]`,
])