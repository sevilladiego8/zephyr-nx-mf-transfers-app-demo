const config = {
  name: 'balances',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
