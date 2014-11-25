./node_modules/.bin/wr "./build.sh" src &
./node_modules/.bin/browser-sync start --files "build/*, build/**/*" --server build --port 8000;
