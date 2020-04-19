/*
 * @Description:
 * @Author: liyoucheng
 * @Date: 2020-04-10 09:24:59
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 09:25:08
 */
// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
