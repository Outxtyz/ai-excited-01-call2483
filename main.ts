import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
