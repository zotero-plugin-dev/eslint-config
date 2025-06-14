import type { Config } from "../types.js";
import pluginIgnore from "eslint-config-flat-gitignore";
import { GLOB_EXCLUDE } from "../globs.js";

export const ignores: Config[] = [
  {
    name: "zotero-plugin/global-ignores",
    ignores: [
      // glob
      ...GLOB_EXCLUDE,

      // scaffold generated files
      "**/build/**",
      "**/.scaffold/**",

      // dts
      "**/prefs.d.ts",
      "**/i10n.d.ts",
    ],
  },
  {
    ...pluginIgnore({ strict: false }),
    name: "zotero-plugin/gitignore",
  },
];
