module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  "plugins": [
    [
      "babel-plugin-webpack-alias-7",
      {
        "config": "../../config/alias.js"
      }
    ]
  ]
}
