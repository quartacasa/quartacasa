"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify")

sass.compiler = require("node-sass"); // It's necessary for gulp-sass works

gulp.task('css', () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" })) // Convert style to minified file
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  return gulp
    .src("src/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('svg', () => {
  return gulp
    .src("src/img/**/*.svg")
    .pipe(gulp.dest('dist/img'));
});

gulp.task('png', () => {
  return gulp
    .src("src/img/**/*.png")
    .pipe(gulp.dest('dist/img'));
});

gulp.task('jpg', () => {
  return gulp
    .src("src/img/**/*.jpg")
    .pipe(gulp.dest('dist/img'));
});

gulp.task('html', () => {
  return gulp
    .src("src/index.html")
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('css', 'js', 'jpg', 'png', 'svg', 'html'));

gulp.task('default', gulp.series('build'));
