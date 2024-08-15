import type { Preview } from "@storybook/react";
// import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs", "autodocs"],
  // decorators: [
  //   StyleDecorator
  // ],
};

export default preview;


