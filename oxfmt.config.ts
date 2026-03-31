import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: {
    newlinesBetween: false,
    internalPattern: ["~/", "@/", "#"],
    groups: [
      "type",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "style",
      "unknown",
    ],
  },
  sortPackageJson: true,
});
