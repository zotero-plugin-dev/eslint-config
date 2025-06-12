import type { Config } from "../types";
import eslintJs from "@eslint/js";

export const javascript: Config[] = [
  {
    ...eslintJs.configs.recommended,
    name: "zotero-plugin/javascript",
  },
];
