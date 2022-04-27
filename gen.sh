rm ./lib/README.md
cp ./lib/_sidebar.md ./lib/README.md
rm -rf ./docs/lib
cp -r ./lib ./docs/lib

rm -rf ./docs/help
cp -r ./help ./docs/help

rm -rf ./docs/log
cp -r ./log ./docs/log

rm ./docs/README.md
cp ./README.md ./docs/README.md
rm ./docs/404.md
cp ./404.md ./docs/404.md

yarn docs:build
rm -rf ./beta
mv ./docs/.vuepress/dist ./beta