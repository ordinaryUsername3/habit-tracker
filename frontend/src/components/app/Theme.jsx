import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#3182ce" },
        },
      },
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
    recipes: {
      Button: {
        variants: {
          solid: {
            bg: "white",
            color: "brand.500",
            borderRadius: "md",
          },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, theme);
export default system;
