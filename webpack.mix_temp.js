const mix = require("laravel-mix")

mix
  .setPublicPath("./")
  .options({
    processCssUrls: false,
  })
  .copy("index.html", "dist/index.html")
  .sass("scss/main.scss", "dist/style.min.css")
  .js("js/main.js", "dist/main.min.js")
