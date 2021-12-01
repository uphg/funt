if [ ! -d "dist/modules" ]; then
  mkdir dist/modules
fi

# npx tsc src/*.ts --module umd --outDir dist/modules
npx tsc src/*.ts --module es2020 --outDir dist/modules
