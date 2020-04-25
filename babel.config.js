const isTestEnvironment = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: isTestEnvironment ? 'commonjs' : false,
        targets: isTestEnvironment
          ? { node: 'current' }
          : { browsers: 'defaults' },
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-optional-chaining',
  ],
  env: {
    production: {
      presets: ['react-optimize'],
    },
  },
};
