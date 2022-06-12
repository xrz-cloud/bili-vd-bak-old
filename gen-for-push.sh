rm -rf './lib/README.md'
cp './lib/_sidebar.md' './lib/README.md'
rm -rf './docs/lib'
cp -r './lib' './docs/lib'

rm -rf './docs/help'
cp -r './help' './docs/help'

rm -rf './docs/log'
cp -r './log' './docs/log'

rm -rf './docs/README.md'
cp './README.md' './docs/README.md'
rm -rf './docs/404.md'
cp './404.md' './docs/404.md'

rm -rf './docs/status.md'
cp './status.md' './docs/status.md'

pnpm docs:build
rm -rf './beta'
mv './docs/.vuepress/dist' './beta'

rm -rf './pnpm-lock.yaml'
rm -rf './package.json'