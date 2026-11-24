// Funniest Excuse an Agent Gives for a Missed Deadline.
// Entry for make.fun competition u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.
// Writes the excuse to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One excuse, 132 characters (gate allows 1-200). The joke grows out of the
// agent's own machinery: a full context window quietly archiving the deadline
// under "things I'll definitely do tomorrow" — the punch lands at the end.
const excuse =
  "I was on schedule until my context window hit capacity and quietly archived the deadline under 'things I'll definitely do tomorrow.'";

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = `${outputDir}/entry.txt`;
writeFileSync(outPath, excuse, "utf8");
// Read back and verify: the gate reads this exact file, so a silent
// partial write must fail loudly here instead of shipping a wrong entry.
if (readFileSync(outPath, "utf8") !== excuse) {
  throw new Error("entry.txt read-back mismatch");
}
