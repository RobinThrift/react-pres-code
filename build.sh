
# SETUP
rm -rf build

mkdir build
mkdir build/scripts
mkdir build/styles

# Index.html
cp ./src/index.html ./build/index.html
echo "copied index.html";

# Images
cp -R ./src/img ./build/img
echo "copied images";

# LESS
./node_modules/.bin/lessc src/styles/main.less build/styles/main.css
echo "built styles";

# Browserify
./node_modules/.bin/browserify src/scripts/main.jsx -t [ babelify ] -o build/scripts/main.js --debug
echo "built scripts";

