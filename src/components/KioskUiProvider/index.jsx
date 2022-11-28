import { ThemeProvider } from "styled-components";
import defaultTheming from "../../../theme";

const KioskUiProvider = ({ theme, children }) => {
  const combineTheming = {
    ...defaultTheming,
    ...theme,
  };
  return <ThemeProvider theme={combineTheming}>{children}</ThemeProvider>;
};

export default KioskUiProvider;
