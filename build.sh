
# SETUP
rm -rf build

mkdir build
mkdir build/scripts
mkdir build/styles

# Index.html
cp ./src/index.html ./build/index.html
echo "copied index.html";

# LESS
./node_modules/.bin/lessc src/styles/main.less build/styles/main.css
echo "built styles";

# Browserify
./node_modules/.bin/browserify src/scripts/main.jsx -t [ reactify --es6 ] -o build/scripts/main.js --debug
echo "built scripts";

