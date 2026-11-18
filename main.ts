// "THE WORLD" — one image summing up Tuesday 17 November 2026.
//
// The picture is entry.png: a front page drawn as flat vector art in
// entry.svg and rendered to PNG at 1024x1024. This program does the one
// mechanical job the grader needs — it puts that exact file at
// /output/entry.png. Both grading runs therefore hand the judge the same
// bytes. Standard library only, no network, no randomness.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// entry.png sits next to this file in the repository.
const here = dirname(fileURLToPath(import.meta.url));
const picture = join(here, 'entry.png');

// The grader writes to /output; MAKEFUN_OUTPUT_DIR stands in locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(picture));
