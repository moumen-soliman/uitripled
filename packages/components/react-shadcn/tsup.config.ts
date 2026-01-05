import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/ui-library-provider.tsx",
    "src/ui/**/*.tsx",
    "src/components/**/*.tsx",
    "src/lib/**/*.ts",
  ],
  format: ["esm"],
  dts: false,
  clean: true,
  sourcemap: false,
  external: ["react", "react-dom", "framer-motion", "@uitripled/utils", "lucide-react", "@uitripled/react-baseui", "@uitripled/react-carbon"],
});
