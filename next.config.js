const withTM = require("next-transpile-modules")([
  "three",
  "@react-three/drei",
  "react-three-fiber",
]);

module.exports = withTM();
