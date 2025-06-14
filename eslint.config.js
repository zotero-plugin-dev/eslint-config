// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
  javascript: true,
  typescript: true,
  stylistic: false,
  // stylistic: {
  //   semi: true,
  //   quotes: "double",
  // },
  // formatters: true,
  ignores: ["src/typegen.ts", "playground/**/*"],
});

// import zotero from "@zotero-plugin/eslint-config";
// export default zotero();
