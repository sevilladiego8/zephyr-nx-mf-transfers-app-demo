<h1 align="center">
<br>
  <img src="./imgs/transnfers-app-nx-diagram.drawio.png" alt="Federated Transfers Zephyr NX App Diagram" >
<br>
<br>
Federated Transfers Demo App with Zaphyr, NX, Rspack and React  
</h1>
<h2 align="center" >Version 1.0</h2>

# Description

This repo features the usage of Zephyr, Rspack, NX and React in a project using module-federation for micro-frontends.

The example is basically a demo transfers app with different pages which can be independently deployed to zephyr cloud relying only on Zephyr’s default Cloud integration.

Check out zephyr with rsbuild version here [Zephyr Rsbuild and react App repo](https://github.com/sevilladiego8/zephyr-mf-transfers-app-demo)

# Tools

- Rspack Zephyr Plugin 🚀 - 0.1.14
- NX ✈️ - 22.0.2
- React 🌐 - 19.0.0
- TypeScript 📘 - 5.9.3
- Bootstrap 💄 - 5.3.8

# Development

> You will need to create a zephyr account to manage your deployed applications

1. Install the necessary dependencies using `pnpm install`(recommended) or `npm install`.
2. Install dependecies in `root` directory
3. run `npm run dev`

# Deployment

1. run `npm run build`

# Deployed Apps (Links)

- Consumer Shell - https://ds-dev-1141-consumer-zephyr-nx-mf-transfers-app-d-9cb842024-ze.zephyrcloud.app/
  - Transfers App - https://ds-dev-1140-transfers-zephyr-nx-mf-transfers-app--676bbb770-ze.zephyrcloud.app/
  - Balances App - https://ds-dev-1137-balances-zephyr-nx-mf-transfers-app-d-91b5a04ae-ze.zephyrcloud.app/
  - Reports App - https://ds-dev-1138-reportss-zephyr-nx-mf-transfers-app-d-e6dee4d62-ze.zephyrcloud.app/
  - Ledger App - https://ds-dev-1139-ledger-zephyr-nx-mf-transfers-app-dem-90885ff94-ze.zephyrcloud.app/
  - Settings App - https://ds-dev-1136-settings-zephyr-nx-mf-transfers-app-d-02ce4ef5d-ze.zephyrcloud.app

# Useful NX Commands

```bash
# create new shared library
npx nx g @nx/react:library libs/shared-ui --style=scss --bundler=none --js=false

# create new app
npx nx g @nx/react:app apps/ui-playground --bundler=rspack --style=scss --js=false

# create new host
npx nx g @nx/react:host apps/host-app --bundler=rspack --style=scss --js=false
# create new remote
npx nx g @nx/react:remote apps/remote-app --bundler=rspack --style=scss --js=false

#remove apps
npx nx g @nx/workspace:remove micro-app
```

# Issues

1. Imports from `shared-ui` don't work, dispite following nx & module-federation docs. I might need to dive deeper on the project configuration itself.

```
'rootDir' is expected to contain all source files.ts(6059)
```

2. Aliases could be added to `scss` files for shorter import paths
