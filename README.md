# monorepo-nuxt

Example of using monorepo ([Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) + [Lerna](https://lernajs.io/)) with [Nuxt.js](https://nuxtjs.org/).

Inspired by [Semantic Release with Lerna](https://michaljanaszek.com/blog/lerna-conventional-commits) this project has [lerna version](https://github.com/lerna/lerna/tree/master/commands/version) command to generate `CHANGELOG`s based on commit history, create git tags and push to origin.

There is a [convention](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) to achieve consistency in commit messages. [Commitlint](http://marionebl.github.io/commitlint/) linter configured with [husky](https://github.com/typicode/husky) checks if commit messages follow the convention.



## Project structure

In *monorepo* (monolithic repository) code for many projects is stored in the same repository.

Each package in `/packages` is a project that can be released and deployed independently. A project can be basically anything: a component library, utility library, static website or SPA. One project can have another project (in `/packages`) as a dependecy.



### Why monorepo?

* Share code between projects / applications (For example: share a component library between static website and SPA) while keeping the structure lightweight and modular.
* Share styleguide, test configuration, pull request templates etc.
* Share dependencies across packages (avoid duplication of `node_modules`)
* Keep codebase tidy, lightweight and modular by splitting it into multiple projects
* Release and deploy projects independently
* Work on 2+ projects simultaniously (even if some of those projects are dependencies).


## Installation

1. Make sure you have [Yarn](https://yarnpkg.com/lang/en/) installed globally.
2. Run `yarn` from repo's root. It will install all dependencies and bootstrap the project with lerna.



## Development

You can either work on one package at a time or hack multiple packages in parallel.


### Working on individual package

For example, you want to enhance a component in components library. You don't need any app package running in the background.

So you run npm scripts directly from package's folder:

```
cd packages/ui-library
```

```
yarn dev
```


### Working on multiple packages at the same time

Now you are building SPA. You want to have components library and running in addition to your app's dev server. 

Simply run from repo's root:

```
yarn dev
```

It will run 'dev' scripts concurrently from every package that has `dev` script in it's `package.json`.



### Adding new dependencies

Do it by running `yarn add PackageName` from your *package root* (For example, `cd packages/ui-library && yarn add ./packages/independent`). Lerna will place the depency to the `node_modules` and symlink it for you. 

*Troubleshooting:* if something goes wrong after adding new dependencies, it might be helpful to bootstrap the project with lerna again. To do that run `yarn bootstrap` from repo's root. 



### Commiting changes

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) along with [commitlint](http://marionebl.github.io/commitlint/) helps us think less about configuration and more about generating value for end users. 

A template for commit messages:

```
<type>[optional scope]: <description>
```
`type` must be one of the following:

* `build`: Changes that affect the build system or external dependencies (example scopes: * `gulp`, broccoli, npm)
* `ci`: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* `docs`: Documentation only changes
* `feat`: A new feature
* `fix`: A bug fix
* `perf`: A code change that improves performance
* `refactor`: A code change that neither fixes a bug nor adds a feature
* `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* `test`: Adding missing tests or correcting existing tests

(Credits: [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines))


For example:

```
git commit -m "fix: typo in README"
```

or 

```
git commit -m "feat: Header component"
```


## Releasing & versioning

To publish new version run:

```
yarn l:version
```

If you want more control over version number, you should pass `semver` parameter. It can be one of `[major | minor | patch | premajor | preminor | prepatch | prerelease]` 
[See docs for details](https://github.com/lerna/lerna/tree/master/commands/version#semver-bump) 

Example:

```
yarn l:version -- preminor
```


## Creating new package

1. Create new app in `/packages` directory
```
cd packages
yarn create nuxt-app <MY_APP_NAME>
```

2. Modify `package.json` in *<MY_APP_NAME>* package

* Change version to 0.0.1
* Add port for `dev` script. For example: `"dev": "nuxt --port 3013"`

* If you want to have another package as a dependency for *<MY_APP_NAME>*, list it in dependencies section of *<MY_APP_NAME>*'s `package.json`. For example: `"dependencies": { "ui-library": "^0.0.1" }`

3. Bootstrap app from repo's *root*

```
cd ..
```
```
yarn bootstrap
```

4. Remove useless styleguide configurations or extend them from shared configuration (`.editorconfig`, `.eslint.js`, `.prettierrc`, .nycrc, ava.config.js etc)

5. Fix AVA tests (see [`TROUBLESHOOTING.md` issue #1](./TROUBLESHOOTING.md)) and add nyc as a dependency

```
cd packages/static-example
yarn add jsdom-global babel @babel/register require-extension-hooks require-extension-hooks-babel require-extension-hooks-vue nyc -D
cd ../..
yarn
```


## TODO

* Vue component names styleguide
* Tests (semantics, a11y, snapshots)
* Script to generate components and tests files
* CSS lint
* Eslint configuration
* PR template
