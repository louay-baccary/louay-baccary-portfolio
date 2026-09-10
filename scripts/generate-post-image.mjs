#!/usr/bin/env node
/**
 * One-off generator for a single writing post's explicit article image.
 * Run with `node scripts/generate-post-image.mjs`.
 */
import { writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { createElement as h } from 'react';

const { ImageResponse } = createRequire(import.meta.url)('next/og');

const OUTPUT = join(
  process.cwd(),
  'public',
  'images',
  'writing',
  'evoke-payments-card.png',
);
const SIZE = { width: 1200, height: 630 };

const image = new ImageResponse(
  h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#7c2d12',
        fontFamily: 'system-ui, sans-serif',
      },
    },
    h(
      'span',
      { style: { fontSize: 64, fontWeight: 700, color: 'white' } },
      'Event-Driven Payments',
    ),
    h(
      'span',
      { style: { fontSize: 32, color: 'white', marginTop: 16 } },
      'on Polygon',
    ),
  ),
  SIZE,
);

const buffer = Buffer.from(await image.arrayBuffer());
await writeFile(OUTPUT, buffer);
console.log(`Wrote ${OUTPUT} (${buffer.length} bytes)`);
