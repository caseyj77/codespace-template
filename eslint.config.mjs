import standard from "@eslint/js";

export default [
  standard.configs.recommended,
  {
    ignores: [
      'dist',
      'vendor',
      'node_modules'
    ],
    rules: {
      curly: 'error',
      'no-console': 'on', // Optional: only if you want to allow console.log statements
    }
  },
];
