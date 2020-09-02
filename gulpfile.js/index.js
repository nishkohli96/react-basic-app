/* For smaller tasks, it is sufficient to create a gulpfile.js in root directory */
/* For bigger tasks, can split tasks into modules, and import all into index.js file
   with the main Folder named as gulpfile.js */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const pump = require('pump');
const clean = require('gulp-clean');
var pipeline = require('readable-stream').pipeline;

const minifyImages = () => {
    return gulp
        .src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/'));
};

const minifyCSS = () => {
    return gulp
        .src('src/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('dist/css'));
};

const cleanPrevBuild = () => {
    return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
};

const minJSBuild = () => {
    return pipeline(gulp.src('build/**/*.js'), uglify(), gulp.dest('dist/js'));
};

gulp.task('compress', function (cb) {
    //     return await  gulp.src(['src/**/*.js','!node_modules/**/*.js','!gulpfile.js'])
    //       .pipe(uglify())
    //       .pipe(gulp.dest('build/js')
    // );
    return pump(
        [
            gulp.src(['src/**/*.js', '!node_modules/**/*.js', '!gulpfile.js']),
            uglify(),
            gulp.dest('dist/js'),
        ],
        cb
    );
});

gulp.task('minImages', minifyImages);

/* Delete any Previous build folder and then start the minification */
exports.default = gulp.series(
    cleanPrevBuild,
    gulp.parallel(minifyCSS, 'minImages')
);
