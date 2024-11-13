import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      "**/*.config.js",
      "**/*.validation.ts",
      "**/.cache",
      "**/package-lock.json",
      "**/*.js",
      "**/*.d.ts",
      "**/node_modules",
      "**/.eslintcache",
      "**/cdk.out",
      "**/.cdk.staging",
      "**/.DS_Store",
      "**/npm-debug.log*",
      "**/yarn-debug.log*",
      "**/yarn-error.log*",
      "**/.vscode",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
