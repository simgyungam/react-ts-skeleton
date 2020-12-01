module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    extraFileExtensions: ['.html'],
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    // 'react-app',
    "airbnb",
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ["@typescript-eslint", "react"],
  env: {
    browser: true,
    es6: true,
    // jest: true,
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }], // 在文件写jsx代码
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
    'no-implicit-dependencies': [true, ['src']],
    'no-submodule-imports': [true, 'src'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.tsx'],
  },
};
