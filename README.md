<p align="center">
  <img width="281" alt="image" src="https://user-images.githubusercontent.com/62320484/231023702-7e9327fc-909d-4498-b155-0f80c083ae98.png">
</p>  

## Docs 📄

- [Figma](https://www.figma.com/file/4yDelrBXMqqdBQaIGmgEvV/Design-Process?node-id=0-1&t=HrGj2hXGYcIaDeDG-0)
  

## Requirements ⚙️

- [Yarn](https://yarnpkg.com/)

- [Node.js](https://nodejs.org/en/)

- Check out how to set up the environment to run on the [documentation](https://reactnative.dev/docs/getting-started)

## Installation ⬇️

```bash
# Install dependencies

$ yarn


# Install husky

$ yarn husky install

```

  

## Running the app 🏃


```bash
# Run on android

$ yarn android


# Run on ios

$ yarn ios


# Run on web

$ yarn web

# Run Metro Bundler

yarn start

```

  

  

## Test 🧪
```bash
# unit tests

$ yarn test
```

## Contribute 🤝
### Branches

Pull requests should be composed of type, number of task and branch name.\
Branch name must be spaced by "-".\
The types might be:
- feature - For new features
- fix - For adjustments (both bugfixes and hotfixes)
- release - For release branches

Example: feature/14-navbar-mobile

### Commits
Commits should be structured as `<branch-type>(<branch-name>): <commit description> <task-code>`

Example: `git commit -m "feature(navbar-mobile): adding smooth scroll" -m "#14"`

### Default Branches
- master - Most stable code
- develop - Most recently developed

### Pull requests
Pull requests must have good descriptions.\
The three main topics of the description are:
- What I did
- How I did
- How to test

Of course it's not mandatory, sometimes it won't make sense to add some of these.\
But add descriptive PRs with pictures and referencing code when needed.


## Scripts 

Create a new component:
```bash
  yarn generate component
```

Create a new page:
```bash 
  yarn generate page
```
