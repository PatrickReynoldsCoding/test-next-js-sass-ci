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
