#!/usr/bin/env sh

set -e

rm -rf dist/*

if [ ! -d "dist/cjs" ]; then
  mkdir dist/cjs
fi

if [ ! -d "dist/es" ]; then
  mkdir dist/es
fi

# 使用 babel 打包
# pnpm babel src -d dist/es --extensions .ts &&
# rm -rf dist/cjs/* &&
# pnpm babel --config-file ./babel.config.commonjs.js dist/es -d dist/cjs

# 使用 tsc 打包
# npx tsc src/*.ts --module umd --outDir dist/umd &&
# npx tsc src/*.ts --module es2015 --outDir dist/es
