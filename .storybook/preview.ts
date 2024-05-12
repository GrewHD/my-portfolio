import type { Preview } from "@storybook/react";

import '../src/index.css'; // Import your existing stylesheets if any

// Import Google Fonts stylesheet
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
