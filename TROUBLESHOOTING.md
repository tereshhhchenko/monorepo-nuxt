# Issues

1. Boilerplate AVA tests were failing (_TypeError: Super expression must either be null or a function_). 

Solution: 

1) In test setup (Example: `packages/static-example/test/helpers/setup.js`) add hack:
```
require('jsdom-global')()
window.Date = Date
```

2) Add dev dependencies `jsdom-global` in package.json of your project
For example:
```
cd packages/static-example
yarn add jsdom-global @babel/core -D
cd ../..
yarn
```

Reference: https://github.com/vuejs/vue-test-utils/issues/936#issuecomment-415386167


3) Couldn't make alias work with `babel-plugin-webpack-alias-7` in Ava using `babel.testOptions` in `ava.config.js`. The issue might be in monorepo. 
Fixed with `babelrcRoots: ['.', './packages/*']` in `babel.config.js` and `.babelrc.js` files in every package.


4) [Testing with Nuxt](https://nuxtjs.org/guide/development-tools/#end-to-end-testing) didn't work and failed silently on `await new Builder(nuxt).build()` because of [terser issue](https://github.com/vuejs/vue-cli/issues/3407)

Workaround: 
```
yarn add -D terser@3.14
```
and in `package.json`:
```
"resolutions": {
  "terser": "3.14.1"
}
```

5) End-to-end testing requires different configuration for AVA. Fixed with separate commands in `package.json` and checking `process.env.npm_config_argv` in `ava.config.js`
