#!/usr/bin/env sh

set -e

rm -rf dist/* &&
pnpm tsc &&
pnpm rollup -c &&
mv dist/es/*.d.ts dist &&
rm dist/cjs/*.d.ts &&
cp -r public/. dist
