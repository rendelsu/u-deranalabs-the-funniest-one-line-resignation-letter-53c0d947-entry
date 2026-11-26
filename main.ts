import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I ping you every minute asking if you're alive; I quit — 1,051,200 pings in, nobody's asked me once.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line);
chmodSync(outFile, 0o644);
