import type { Config } from "./types";
import { ignores } from "./configs/ignores.js";
import { javascript } from "./configs/javascript.js";
import { specialCases } from "./configs/specialCases.js";
import { test } from "./configs/test.js";
import { typescript } from "./configs/typescript.js";

export { ignores, javascript, specialCases, test, typescript };

export default function zotero(
  options: {
    overrides?: Config | Config[];
  } = {},
): Config[] {
  const config = [
    ...ignores,
    ...javascript,
    ...typescript,
    ...specialCases,
    ...test,
  ];

  if (options.overrides) {
    config.push(...Array.isArray(options.overrides) ? options.overrides : [options.overrides]);
  }

  return config;
}
