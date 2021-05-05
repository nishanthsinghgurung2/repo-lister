# Github Repo Search App With Pagination

This is a github repo search app that has pagination. It makes requests to the github graphQl api and fetch the results. This app was developed using the following tech stack:

* React
* Hooks
* React testing library
* GraphQl
* Styled components
* Material UI
* Docker for production.
* ESLint and prettier

## Available Scripts

In the project directory, you can run:

### `npm install`

to load all the dependencies

### `npm test`

to run the unit tests

### `npm run lint`

to run eslint on all the files

### `npm start`

to start the project on local. Open `localhost:3000` on the browser to see the app.

Steps to build the react app with docker has been given below: (Make sure to install docker on your machine before running these commands)
### `npm run build-docker-image`

to build the docker image and tag it with a name.

### `npm run test-docker-image`

to test our image. Next, open `http://localhost` to open our app.

### Note

* In the `src/util/constants.ts` file, I have listed my personal access token in `TOKEN` constant to access github api. In order to access GitHub GraphQL API please generate a Personal Access Token in GitHub and copy and paste it to this value.
* Images of various screens in the app is mentioned in the `src/images` directory
* Due to time restrictions, I haven't got chance to address all eslint warnings.
* If more time, I would love to add more test cases, extra validations and integration tests using cypress.