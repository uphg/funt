rm -rf dist/*

if [ ! -d "dist/umd" ]; then
  mkdir ddist/umd
fi

if [ ! -d "dist/es" ]; then
  mkdir ddist/es
fi

npx tsc src/*.ts --module umd --outDir dist/umd &&
npx tsc src/*.ts --module es2015 --outDir dist/es
