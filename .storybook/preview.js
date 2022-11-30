import "../src/index.css";
import GlobalStyles from "@/components/GlobalStyles";
import KioskUiProvider from "@/components/KioskUiProvider";

// .storybook/preview.js

import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Kiosk',
    styles: {
      width: '2160px',
      height: '3840px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
       ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};


export const decorators = [
  (Story) => (
    <KioskUiProvider>
      <GlobalStyles />
      <Story />
    </KioskUiProvider>
  ),
];
