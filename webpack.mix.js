// Based on https://medium.com/@AndrewDelPrete/using-purifycss-to-remove-unused-tailwind-css-classes-173b3ee8ee01

const mix = require("laravel-mix")
const tailwindcss = require("tailwindcss")
const glob = require("glob-all")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const path = require("path")

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

// mix.postCss("./src/styles.css", "public/css", [tailwindcss("./tailwind.js")])

mix
  .setPublicPath("./")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.js")],
  })
  .copy("index.html", "dist/index.html")
  .copyDirectory("data", "dist/word_lists")
  .sass("scss/_entry.scss", "dist/style.min.css")
  .js("js/main.js", "dist/main.min.js")

// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new PurgecssPlugin({
        // Specify the locations of any files you want to scan for class names.
        paths: glob.sync([path.join(__dirname, "js/**/*.vue")]),
        extractors: [
          {
            extractor: TailwindExtractor,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ["html", "vue"],
          },
        ],
      }),
    ],
  })
}
