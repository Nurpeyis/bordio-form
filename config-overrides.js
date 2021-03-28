const {
  useEslintRc,
  addDecoratorsLegacy,
  addWebpackAlias,
  override,
} = require("customize-cra");
const path = require("path");

const resolve = (url) => path.resolve(__dirname, `src/${url}/`);

const aliases = {
  "@assets": resolve("assets"),
  "@elements": resolve("shared/elements"),
  "@interfaces": resolve("shared/interfaces"),
  "@shared": resolve("shared"),
};

module.exports = override(
  useEslintRc(),
  addDecoratorsLegacy(),
  addWebpackAlias(aliases)
);
