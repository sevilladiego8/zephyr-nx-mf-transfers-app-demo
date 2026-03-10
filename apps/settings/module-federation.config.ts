import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'settings',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
