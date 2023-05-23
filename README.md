# Leif 💥

Built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and our [Delivery API](https://www.npmjs.com/package/contensis-delivery-api)

Leif is our demo project, built with [Contensis](https://contensis.com).

## What is Contensis? 🤔

[Contensis](contensis.com) provides a single place to create, maintain and deliver your content. Its content modelling, authoring, and governance features help your teams to create and keep on top of well-structured content. A flexible set of APIs make it easy to use your content in any way you like.

## Requirements 🪛

- Node
- Git

## Getting started 🏁

**Your CMS environment has already been defined to use our public Leif cms, to update this please edit the `.env` file.**

- Develop your components inside the `/src/app/components/` folder, create a new folder for each new component
- Create pages in the `/src/app/pages/` folder to set your page layouts and load your components
- Define routes in your application, there are 'Static routes' and 'Content type mappings' which tell the application what pages are to be loaded and when certain routes / content type entries are loaded
- Import components using the import aliases e.g. `~/myComponent/MyComponent` avoid importing components like `/src/app/myComponent/MyComponent` or `../../../myComponent/MyComponent`

### Common setup 👉

```bash
git clone git@github.com:contensis/leif.git
cd leif
yarn
yarn start
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

### Key scripts 🚦 📃

**This project uses [`yarn`](https://yarnpkg.com/)**

- `yarn` - install dependencies so we can use the application
- `yarn start` - start the application in development mode
- `yarn storybook` - start storybook in development mode
- `yarn build` - build the application into production-ready client and server-side bundles
- `yarn server` - start the application server same as we would as if it were deployed in production
- `yarn build:server` - build the application and start the server-side application from source code (allowing us to connect a debugger and stop on code that is executed server-side)

## Contributions 🤝

**Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.**
