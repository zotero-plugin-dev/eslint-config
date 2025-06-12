import type { Config } from "../types.js";
import mochaPlugin from "eslint-plugin-mocha";
import { GLOB_TEST } from "../globs.js";

export const mocha: Config[] = [
  {
    ...mochaPlugin.configs!.recommended,
    files: [GLOB_TEST, "**/*.test.ts"],
    name: "zotero-plugin/mocha",
  },
];
