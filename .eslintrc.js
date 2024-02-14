module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "semi": [2, "always"],
        "@typescript-eslint/semi": [2, "always"],
        "quotes": [2, "single"],
        "@typescript-eslint/quotes": 2,
        "react/jsx-indent": [2, 2],
        "indent": [2, 2],
        "react/jsx-filename-extension": [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "react/require-default-props": 0,
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/prefer-nullish-coalescing": 0, 
        "@typescript-eslint/no-redeclare": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/naming-convention": 0,
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}
