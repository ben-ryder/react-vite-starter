import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../.storybook/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: ["../public"],
};
export default config;
