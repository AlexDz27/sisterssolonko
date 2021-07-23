const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const buildTailwind = () => {
  return src('./src/index.css')
    .pipe(postcss())
    .pipe(rename('tailwind.css'))
    .pipe(dest('./build'))
    .pipe(dest('../public/css/'))
  ;
};

exports.default = buildTailwind;