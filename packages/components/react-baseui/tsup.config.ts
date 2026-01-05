import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components/**/*.tsx"],
  format: ["esm"],
  dts: false,
  clean: true,
  sourcemap: false,
  external: ["react", "react-dom", "framer-motion", "@uitripled/utils", "lucide-react", "@base-ui/react", "@uitripled/react-shadcn"],
});
