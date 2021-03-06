module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@typings': './src/types',
          '@assets': './assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@config': './src/config',
          '@context': './src/context',
        },
      },
    ],
  ],
};
