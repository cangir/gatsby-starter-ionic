<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://ionicframeworkcom.cdn.prismic.io/ionicframeworkcom/c7ef26d1ee42fbd72c4a44fd76db6234cc889dfd_ionic-vs-react-native.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter: Ionic
</h1>

A starter for Gatsby integrated with Ionic + Typescript and TDD-ready with Jest and Cypress.

Checkout other [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/).

_NOTE: This is a community-created starter and not officially affiliated with Gatsby, Ionic or any other of the included libraries._ 

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site with Ionic. 

    ```shell
    # create a new Gatsby site using the Ionic starter
    gatsby new gatsby-ionic-starter https://gitlab.com/studiobear/gatsby-starter-ionic.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-ionic-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-ionic-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1.  **Run and develop with tests**

    For running unit tests with Jest

    ```shell
    # Running Jest
    npm test

    # Watching Jest
    npm run test:watch
    ```

    For e2e tests with Cypress
    ```
    npm run test:e2e
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── __mocks__
    ├── cypress.json
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest-preprocess.js
    ├── jest.config.js
    ├── loadershim.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── tslint.json

1.  **`/__mocks__`**: Location for all your dummy module needs.

2.  **`/cypress.json`**: Configure Cypress e2e test.

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11.  **`jest-preprocess.js`**: Required to transform all js and jsx files.

12.  **`jest.config.js`**: Because Gatsby handles its own Babel configuration, Jest needs to be configured to use bable-jest. [Details](https://www.gatsbyjs.org/docs/unit-testing/#2-creating-a-configuration-file-for-jest) on Gatsby-specific setup for Jest.

13.  **`loadershim.js`**: The setupFiles array lets you list files that will be included before all tests are run and requires this global function.

14.  **`LICENSE`**: Gatsby Starter Ionic is licensed under the MIT license.

15. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

16. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

17. **`README.md`**: A text file containing useful reference information about your project.

18. **`tsconfig.json`**: Configuration for Typescript

19. **`tslint.json`**: Typescript linting options.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/studiobear/gatsby-starter-ionic.git)
