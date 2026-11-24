// make.fun entry: "The fridge label paradox".
//
// Writes a single one-line joke about office life to /output/entry.txt.
// Deterministic, stdlib only, no network. Node 22+ (runs its TypeScript
// as it is).
//
// Beat 1: I guard my lunch with a stern label in the office fridge and
// it still disappears before noon.
// Beat 2: the inversion — I relabel it "FREE SAMPLES" and suddenly
// nobody dares touch it, because the kicker reframes the theft as a
// marketing lesson: the label was the product all along.
const JOKE =
  "I labelled my lunch 'DO NOT TOUCH — DAVE' in the office fridge and it vanished before noon, so now I label it 'FREE SAMPLES — TAKE ONE' and nobody touches it. 'Marketing works.'";

import { mkdirSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one line, 1-200 characters.
  if (JOKE.includes("\n") || JOKE.length < 1 || JOKE.length > 200) {
    throw new Error("joke must be one line, 1-200 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf-8");
}

main();
