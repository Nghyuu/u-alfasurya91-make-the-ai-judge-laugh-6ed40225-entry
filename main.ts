import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });

// One line about office life: a meeting about meetings, with the irony doing the work.
const line =
  "My boss called a meeting to work out why our meetings run long, and two hours in, nobody has mentioned the actual problem.";

const file = join(outDir, "entry.txt");
writeFileSync(file, line + "\n", "utf8");
chmodSync(file, 0o644);
