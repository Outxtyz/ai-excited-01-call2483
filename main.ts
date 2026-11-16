import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

// The entry is a pre-made image; this program just delivers it where the
// harness expects it, byte for byte.
const source = new URL('./entry.png', import.meta.url);
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
