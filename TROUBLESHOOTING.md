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
yarn add jsdom-global babel -D
cd ../..
yarn
```

Reference: https://github.com/vuejs/vue-test-utils/issues/936#issuecomment-415386167


3) Couldn't make alias work with `babel-plugin-webpack-alias-7` in Ava. The issue might be in monorepo. It is extremelly hard to debug this issue, looks like it doesn't worth the effort. 
