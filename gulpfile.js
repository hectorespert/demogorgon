/* 
 * The MIT License
 *
 * Copyright 2017 hector.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var sassdoc = require('sassdoc');
var del = require('del');

var srcPath = 'src/**/*.scss';
var testPath = 'test/**/*.scss';
var docStyles = 'docs/styles';
var distPath = 'dist/';

gulp.task('sass', function () {
  return gulp.src(testPath)
          .pipe(sass({outputStyle: 'compressed'})
          .on('error', sass.logError))
          .pipe(gulp.dest(docStyles));
});

gulp.task('sasslint', function () {
  return gulp.src(srcPath)
          .pipe(sassLint())
          .pipe(sassLint.format())
          .pipe(sassLint.failOnError());
});

gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs/sassdoc'
  };
  return gulp.src(srcPath)
          .pipe(sassdoc(options));
});

gulp.task('copy', function () {
  return gulp.src(srcPath)
          .pipe(gulp.dest(distPath));
});

gulp.task('clean', function () {
  return del([
    distPath
  ]);
});

gulp.task('lint', ['sasslint']);

gulp.task('build', ['lint', 'sass']);

gulp.task('doc', ['build', 'sassdoc']);

gulp.task('dist', ['clean', 'doc', 'copy']);



