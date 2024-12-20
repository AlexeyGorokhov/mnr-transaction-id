import mnrConfig from '@memnrev/eslint-v9-config';

export default [
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...mnrConfig.configs.node,
];
