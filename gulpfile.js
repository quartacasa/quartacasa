"use strict";

const os = require('os');
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify")
const open = require('gulp-open');
const sync = require('browser-sync').create();

sass.compiler = require("node-sass"); // It's necessary for gulp-sass works

gulp.task('css', () => {
  return gulp
    .src("src/site/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" })) // Convert style to minified file
    .pipe(gulp.dest('dist/site'));
});

gulp.task('js', () => {
  return gulp
    .src("src/site/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('dist/site'));
});

gulp.task('svg', () => {
  return gulp
    .src("src/site/img/**/*.svg")
    .pipe(gulp.dest('dist/site/img'));
});

gulp.task('png', () => {
  return gulp
    .src("src/site/img/**/*.png")
    .pipe(gulp.dest('dist/site/img'));
});

gulp.task('jpg', () => {
  return gulp
    .src("src/site/img/**/*.jpg")
    .pipe(gulp.dest('dist/site/img'));
});

gulp.task('html', () => {
  return gulp
    .src("src/site/index.html")
    .pipe(gulp.dest('dist/site'));
});

gulp.task('build', gulp.series('css', 'js', 'jpg', 'png', 'svg', 'html'));

gulp.task('build:watch', () => {
  sync.init({ server: 'dist/site' });

  gulp.watch("src/site/**/*.scss", gulp.series('css')).on("change", sync.reload);
  gulp.watch("src/site/**/*.js", gulp.series('js')).on("change", sync.reload);
  gulp.watch("src/site/index.html", gulp.series('html')).on("change", sync.reload);
});

gulp.task('serve', gulp.series('build', 'build:watch'));

gulp.task('default', gulp.series('build'));
