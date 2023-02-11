# Next.js project with Sass and CI

## How I built

`npx create-next-app .`

### Styling (Sass)

`npm install --save-dev sass`

add sass options to next.config.js

```javascript
/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
```

[Setup sass directories based on 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

[Download from here for easy setup](https://github.com/PatrickReynoldsCoding/sass-boilerplate-with-emotion-version)

compile sass using:

`sass --watch sass/main.scss:styles/Home.module.css`

bring in class names using:

```javascript

  {`${styles['class-name']}`}

```

### Testing (Jest & Cypress)

#### Jest

Install Jest with `npm add jest`

add `"test": "jest"` to scripts in package.json

create spec folder in root for any unit and integration tests

#### Cypress

Install Cypress with `npm install cypress --save-dev`

Run to open wizard and setup directory `npx cypress open`

Set baseUrl in cypress.config.js

``` JSON
module.exports = defineConfig({
  e2e: {
  baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
```
