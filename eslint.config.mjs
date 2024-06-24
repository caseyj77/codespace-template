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
      curly: 'error',
      'no-console': 'warn', // Optional: only if you want to allow console.log statements
    }
  },
];
