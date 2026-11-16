import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const artwork = new URL('./entry.png', import.meta.url);
const destination = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(destination, { recursive: true });
copyFileSync(artwork, resolve(destination, 'entry.png'));
