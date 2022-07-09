module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          hooks: './hooks',
          helpers: './helpers',
          navigation: './navigation',
          store: './store',
          components: './components',
          utils: './utils',
          screens: './screens',
          model: './model',
          static: './static',
          net: './net',
          UI: './UI',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
