#!/usr/bin/env sh

set -e

rm -rf dist/*

# if [ ! -d "dist/cjs" ]; then
#   mkdir dist/cjs
# fi

# if [ ! -d "dist/es" ]; then
#   mkdir dist/es
# fi

# 使用 rollup 打包

pnpm build &&
pnpm rollup -c ./build/rollup.config.cjs.ts --configPlugin typescript &&
pnpm rollup -c ./build/rollup.config.es.ts --configPlugin typescript &&

mv dist/es/*.d.ts dist &&
rm dist/es/*.js.map &&
cp -r public/. dist
# pnpm rollup -c ./build/rollup.config.umd.ts --configPlugin typescript

# 使用 babel 打包
# pnpm babel src -d dist/es --extensions .ts &&
# rm -rf dist/cjs/* &&
# pnpm babel --config-file ./babel.config.commonjs.js dist/es -d dist/cjs

# 使用 tsc 打包
# pnpm tsc src/*.ts --module umd --outDir dist/umd &&
# pnpm tsc src/*.ts --module es2015 --outDir dist/es

# 使用 tsc 生成类型声明文件
# pnpm tsc src/*.ts --module es2015 --outDir dist/es --declaration --emitDeclarationOnly
