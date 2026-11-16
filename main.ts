// ai-excited-01 entry for @call2483: ship the bundled phoenix JPEG to the
// output directory exactly as it is, so the judge grades the image itself.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const artwork = fileURLToPath(new URL('./entry.png', import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

mkdirSync(outDir, { recursive: true });
copyFileSync(artwork, join(outDir, 'entry.png'));
