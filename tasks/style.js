import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import rename from "gulp-rename";
import postcss from "gulp-postcss";

// Define tasks after requiring dependencies
function style() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
    gulp
      .src("src/**/*.scss")
      .pipe(sass())
      .on('error', function (err) {
        console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
      })
      .pipe(
            postcss([
              // ...
              require('tailwindcss'),
              require('postcss-nesting'),
              require('autoprefixer')
              // ...
            ])
          )
      .pipe(
        rename({
          dirname: ""
        })
      )
    //   .pipe(concat())
      // What is the destination for the compiled file?
      .pipe(gulp.dest("public"))
      .on('error', function (err) {
        console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
      })
  );
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
