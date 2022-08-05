# GITHUB SEARCH USERS
A front end application built with Create React App and deployed with Vercel. The goal of this project is to create and deploy an app with these specs:

- [x] Can search for users and see paginated list of results
- [x] Can navigate through next and previous pages
- [x] Can see total count of search results
- [x] Can see notable information for each search result: profile pic, bio, star/follower/repo count.
- [x] Can select a search result and be taken to applicaple github page.

<br />

TODO with more time:

- [ ] Add better filters. For instance, I would like to change the `repos/followers greater than x` filters so that a user could choose greater than or less than. I would also like to allow for sort ordering by asc/desc.
- [ ] Add more unit and integration testing.
- [ ] Better apollo query error handling. The UserList component receives the error as a prop. I would like to add UI to display an error message to the user.
- [ ] Currently, the API key is exposed when making calls via Apollo to the V4 GraphQL Github API from the client. I would set up a small REST API server with express and have the client make search requests to the API (maybe set up a POST `/search` route). The API would then make GraphQL requests to the Github API, obscuring the key on the backend.
<br />

## Table of Contents  

### &#128193; [File Structure](#file-structure)

### &#128421; [React App](#react-app)
 - #### [About](#description)
 
 - #### [Tooling](#tooling-app)

 - #### [Installation](#install-app)
 
 - #### [Testing](#test-app)
 
 - #### [Deploy](#deploy-app)


### &#128206; [Resources](#resources)
<br />

<a name="file-structure"/>

## &#128193; File Structure
```sh
src
|
+-- __mocks__         # global mocks for testing
|
+-- assets            # static assets, png, img, lottie, fonts, etc
|
+-- components        # components used across the application
|
+-- config            # global configs, for example, github base url
|
+-- features          # feature based modules
|
+-- hooks             # global hooks
|
+-- lib               # different libraries preconfigured for the application
|
+-- providers         # all application providers
|
+-- routes            # routing configuration
|
+-- test              # global test setup files
```

<br />

<a name="react-app"/>

## &#128421; React App


<a name="description"/>

### About
This application is built with [ReactJS](https://reactjs.org/) and utilizes the [Chakra UI](https://chakra-ui.com/) library for overall UI. Queries to the [V4 Github GraphQL API](https://docs.github.com/en/graphql) are made using [Apollo](https://www.apollographql.com/docs/react/). 

Some other notable packages include:
- [react-router-dom](https://reactrouter.com/) for routing
- [react-hook-form](https://react-hook-form.com/) for easy to use forms/input control
- [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) to render a fallback view in case of errors
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for unit & integration testing


<a name="tooling-app"/>

### Tooling
The tooling for the development of the app consists of:
- Eslint - To enforce code rules
- Prettier - For code formatting
- Husky - For pre-commit linting/testing
- Craco - To enable absolute imports

In the package.json there is a validate command which runs the test suite and lints staged files in parallel. This command is run in the husky pre-commit hook.


<a name="install-app"/>

### Installation

1. Clone the repo from github.

2. Open the project folder in a code editor and in the root directory run:
```
yarn install
```
3. To launch the app make sure port 3000 is clear and run:
```
yarn start
```

To view the fallback provided by the ErrorBoundary in development, navigate to:
```
/error
```

<a name="test-app"/>

### Testing

To run the Jest testing suite:
```
yarn test
```

To run the Jest testing suite with code coverage analysis:
```
yarn test:coverage
```

<a name="deploy-app"/>

### Deploy

This app is deployed with Vercel. When PRs are merged to the main branch, Vercel detects this and redeploys.

More information can be found on the vercel deployment instruction page https://vercel.com/guides/deploying-react-with-vercel

<a name="resources"/>

## &#128206; Resources
Extra section for more resource links!
