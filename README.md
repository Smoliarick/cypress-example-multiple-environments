# cypress-example-multiple-environments

This project contains information about how to run autotests for different environments.

## Installation

1. `npm install` - install dependencies
2. Run commands in Examples section

## How to set up in your project

1. Add config part into your project. See [cypress.config.js](cypress.config.js) file for example:

```js
// -----config part-------
// dynamic path to settings
const settings = require(`./settings/${config.env.envName.toLowerCase()}.settings.json`);

if (settings.baseUrl) {
  config.baseUrl = settings.baseUrl;
}

if (settings.specPattern) {
  config.specPattern = settings.specPattern;
}

if (settings.env) {
  config.env = {
    ...config.env,
    ...settings.env,
  };

  config.env.login = process.env[`${settings.env.login}`];
  config.env.password = process.env[`${settings.env.password}`];
}
// -----config part-------
```

2. Create [settings](settings) folder in your project.
3. Create settings file with this pattern: `env_name.settings.json`, where `env_name` is name for your environment. Example: [local.settings.json](settings/local.settings.json)
4. Add necessary settings into the settings file, example:

```json
{
  "baseUrl": "https://www.google.com/",
  "specPattern": "cypress/e2e/tests/google/**/*.spec.{js, jsx, ts, tsx}",
  "env": {
    "login": "GOOGLE_LOCAL_LOGIN",
    "password": "GOOGLE_LOCAL_PASSWORD"
  }
}
```

where GOOGLE_LOCAL_LOGIN and GOOGLE_LOCAL_PASSWORD are names for parameters in `.env` file.

5. Create [`.env`](.env) file with private data (!!!Add this file into .gitignore file!!!). This file is used for example and doesn't contain private data:

```
GOOGLE_LOCAL_LOGIN=google_local_login
GOOGLE_LOCAL_PASSWORD=google_local_password
GOOGLE_PROD_LOGIN=google_prod_login
GOOGLE_PROD_PASSWORD=google_prod_password
BING_LOGIN=bing_login
BING_PASSWORD=bing_password
```

6. Set up is completed!

## How to run test for different projects or environments

**Open Cypress in UI mode:**

```
npx cypress open --env envName=local
npx cypress open --env envName=newApp
npx cypress open --env envName=prod
```

**Run all tests with default browser:**

```
npx cypress run --env envName=local
npx cypress run --env envName=newApp
npx cypress run --env envName=prod
```

**Run specific test with default browser:**

```
npx cypress run --spec path_to_test --env envName=local
npx cypress run --spec path_to_test --env envName=newApp
npx cypress run --spec path_to_test --env envName=prod
```

The same for other Cypress commands in command line.

## Examples

`envName` - environment name in your file name. Example: local.settings.json -> envName=local

Run [google autotest](cypress/e2e/tests/google) for [local environment](settings/local.settings.json):

```
npx cypress run --env envName=local
```


https://github.com/Smoliarick/cypress-example-multiple-environments/assets/104084410/05440eae-b92f-4876-987d-f92d19373903


Run [google autotest](cypress/e2e/tests/google) for [prod environment](settings/prod.settings.json):

```
npx cypress run --env envName=prod
```


https://github.com/Smoliarick/cypress-example-multiple-environments/assets/104084410/b4c590e5-55f4-41b2-8423-dbe7d8f3dba9


Run [bing autotest](cypress/e2e/tests/google) for [newApp environment](settings/newApp.settings.json):

```
npx cypress run --env envName=newApp
```

https://github.com/Smoliarick/cypress-example-multiple-environments/assets/104084410/3d835c09-ecb4-4ed3-8405-d738502814ef



