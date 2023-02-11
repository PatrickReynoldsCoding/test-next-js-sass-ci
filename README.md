# Next.js project with Sass and CI

## How I built

`npx create-next-app .`

`npm install --save-dev sass`

add sass options to next.config.js

```js
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

compile sass using:

`sass --watch sass/main.scss:styles/Home.module.css`
