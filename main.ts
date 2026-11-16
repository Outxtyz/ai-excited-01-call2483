import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The artwork is already finished and bundled as entry.png next to this
// file. All this program does is place an exact copy of it where the
// harness will pick it up, without touching a single byte of the image.
const here = dirname(fileURLToPath(import.meta.url));
const image = join(here, 'entry.png');
const destinationDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const destination = join(destinationDir, 'entry.png');

if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir, { recursive: true });
}
copyFileSync(image, destination);
