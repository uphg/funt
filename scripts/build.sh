#!/usr/bin/env sh

set -e

rm -rf dist/* &&
pnpm tsc &&
# pnpm build:vite &&
pnpm rollup -c --environment ESM &&
pnpm rollup -c --environment CJS &&
pnpm rollup -c &&
mkdir dist/internal
mv dist/es/*.d.ts dist && 
mv dist/es/internal/*.d.ts dist/internal && 
cp -r public/. dist &&
cp README.md dist
