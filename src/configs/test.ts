import type { Config } from "../types.js";
// @ts-expect-error no types
import pluginChaiFriendly from "eslint-plugin-chai-friendly";
import mochaPlugin from "eslint-plugin-mocha";
import { GLOB_TESTS } from "../globs.js";

export const mocha: Config[] = [
  {
    files: GLOB_TESTS,
    ...mochaPlugin.configs!.all,
    name: "zotero-plugin/mocha",
  },
];

export const chai: Config[] = [
  {
    files: GLOB_TESTS,
    ...pluginChaiFriendly.configs.recommendedFlat,
    name: "zotero-plugin/chai",
  },
];

export const test: Config[] = [
  ...mocha,
  ...chai,
];
