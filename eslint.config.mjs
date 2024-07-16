import standard from "@eslint/js";
import prettier from "eslint-config-prettier";
export default [
  standard.configs.recommended,
  prettier,
  {
    ignores: [
      'dist',
      'vendor',
      'node_modules'
    ],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"], // Enforce single quotes
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": ["warn"],
      // Add more custom rules as needed
    },
  },
];
