module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "standard-with-typescript",
    ignorePatterns: [".eslintrc.js", "dist/*"],
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
    rules: {
        '@typescript-eslint/semi': ['error', 'always'], // or 'never' if you prefer no semicolons
        '@typescript-eslint/space-before-function-paren': ['error', 'never']
    },
};
