// module.exports = {
//   arrowParens: 'avoid',
//   bracketSameLine: true,
//   bracketSpacing: false,
//   singleQuote: true,
//   trailingComma: 'all',
// };
module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins:[require.resolve('prettier-plugin-organize-imports')]
};

