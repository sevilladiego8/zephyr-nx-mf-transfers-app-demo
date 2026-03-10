<h1 align="center">
<br>
  <img src="./imgs/transfer-app-diagram.jpg" alt="Federated Transfers Zephyr NX App Diagram" >
<br>
<br>
Federated Transfers Demo App with Zaphyr, RsBuild and React  
</h1>
<h2 align="center" >Version 1.0</h2>

# Description

This repo features the usage of Zephyr, NxPack, NX and React in a project using module-federation for micro-frontends.

The example is basically a demo transfers app with different pages which can be independently deployed to zephyr cloud relying only on Zephyr’s default Cloud integration.

# Tools

- Zephyr Plugin 🚀 - 0.1.14
- NxPack ✈️ - 22.0.2
- React 🌐 - 19.0.0
- TypeScript 📘 - 5.9.3
- Bootstrap 💄 - 5.3.8


# Useful Commands

```bash
# create new shared library
npx nx g @nx/react:library libs/shared-ui --style=scss --bundler=none --js=false

npx nx g @nx/react:library libs/shared-styles --style=scss --bundler=none --js=false

# create new app
npx nx g @nx/react:app apps/ui-playground --bundler=rspack --style=scss --js=false

# create new remote
npx nx g @nx/react:remote apps/ui-playground --bundler=rspack --style=scss --js=false

#remove apps
npx nx g @nx/workspace:remove ui-playground


npx nx g @nx/react:host apps/consumer @nx/react:remote apps/transfers @nx/react:remote apps/reports --bundler=rspack --style=scss --js=false
```
