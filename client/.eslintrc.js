module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "quote-props": ["error", "as-needed"],
    semi: [2, "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "linebreak-style": 0,
    "object-curly-spacing": "off"
  }
};
