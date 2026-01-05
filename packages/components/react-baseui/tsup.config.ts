import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components/**/*.tsx"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "framer-motion", "@uitripled/utils", "lucide-react", "@base-ui/react", "@uitripled/react-shadcn"],
});
