import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from 'eslint-plugin-import';
import js from "@eslint/js";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {
            react,
            jest,
            'react-hooks': reactHooks,
            '@typescript-eslint': tsPlugin,
            import: importPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 2021,
            sourceType: "module",

            parserOptions: {
                project: "./tsconfig.eslint.json",
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            "react/function-component-definition": ["error", {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function"
            }],
            "no-restricted-exports": 0,
            "linebreak-style": 0,
            "react/require-default-props": 0
        }
    },
];
