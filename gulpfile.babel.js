import autoprefixer from 'gulp-autoprefixer';
import babili from 'gulp-babili';
import browserify from 'gulp-browserify';
import livereload from 'gulp-livereload';
import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import uglify from 'gulp-uglify';

// TASKS *************

// HTML
gulp.task('html', () => {
  return gulp.src('vendor/templates/**/*.html').pipe(livereload());
});

// SCRIPTS
gulp.task('scripts', () => {
  return gulp
    .src('_src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      browserify({
        transform: ['babelify'],
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('web/assets/scripts'))
    .pipe(livereload());
});

// SCRIPTS-MINIFIED
gulp.task('scripts-min', () => {
  return gulp
    .src('_src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      browserify({
        transform: ['babelify'],
      }),
    )
    .pipe(
      babili({
        mangle: {
          keepClassName: true,
        },
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('web/assets/scripts'));
});

// STYLES
gulp.task('styles', () => {
  return gulp
    .src('_src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('web/assets/styles'))
    .pipe(livereload());
});

// STYLES-MINIFIED
gulp.task('styles-min', () => {
  return gulp
    .src('_src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('web/assets/styles'));
});

// SVG's
gulp.task('svgstore', () => {
  return gulp
    .src('_src/svg/**/*.svg')
    .pipe(
      svgmin(file => {
        const prefix = path.basename(
          file.relative,
          path.extname(file.relative),
        );
        return {
          plugins: [
            {
              cleanupIDs: {
                prefix: prefix + '-',
                minify: true,
              },
            },
          ],
        };
      }),
    )
    .pipe(svgstore())
    .pipe(gulp.dest('web/assets/images/svg'));
});

// Watch Files For Changes & Reload
// Uncomment proxy and change to dev site local url
gulp.task('default', ['html', 'scripts', 'styles', 'svgstore'], () => {
  livereload.listen({
    start: true,
  });
  gulp.watch('vendor/templates/**/*.html', ['html']);
  gulp.watch('_src/js/**/*.js', ['scripts']);
  gulp.watch('_src/scss/**/*.scss', ['styles']);
  gulp.watch('_src/svg/**/*.svg', ['svgstore']);
});

// Watch Files For Changes & Reload
// Uncomment proxy and change to dev site local url
gulp.task('build', ['scripts-min', 'styles-min', 'svgstore'], () => {});
