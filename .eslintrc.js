module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"], // 세미콜론을 항상 사용하도록 설정
    "comma-dangle": ["error", "always-multiline"], // 마지막 콤마를 항상 허용
  },
  extends: ["airbnb-base", "prettier"], //충돌방지
};
