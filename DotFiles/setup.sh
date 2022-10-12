rm -rf .vscode
ln -s -f DotFiles/.vscode
rm .eslintrc*
ln -s -f DotFiles/.eslintrc.json
rm .prettierrc*
ln -s -f DotFiles/.prettierrc.json

npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier 	\
 eslint-plugin-node eslint-config-node @typescript-eslint/eslint-plugin \
 @typescript-eslint/parser eslint-plugin-react
