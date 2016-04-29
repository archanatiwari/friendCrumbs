// ============================================================
// ** Required
// ============================================================ 
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    // sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    // connect = require('gulp-connect'),
    rename = require('gulp-rename');


var paths = {
    scripts: 'www/js/**/*.js',
    styles: 'www/scss/**/*.scss',
    images: 'www/img/**/*.*',
    templates: 'www/partials/**/*.html',
    index: 'www/index.html',
    // bower_fonts: 'src/components/**/*.{ttf,woff,eof,svg}',
};
// ============================================================
// ** Scripts Task
// ============================================================
gulp.task('scripts', function() {
    gulp.src(['www/js/**/*.js', '!www/js/**/*.min.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});


// // ============================================================
// // ** Sass Task
// // ============================================================ 
// gulp.task('sass', function() {
//     gulp.src('app/scss/style.scss')
//         .pipe(plumber())
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(gulp.dest('app/css'))
// });
// ============================================================
// ** Html Task
// ============================================================
gulp.task('html', function() {
    gulp.src('www/**/*.html')
});


// ============================================================
// ** Build Task
// ============================================================ 
//Clear oul All files and folders from build folder
// gulp.task('build:cleanfolder', function(cb) {
//     del([
//         'build/**'
//     ], cb);
// });

// // Task for creating build directory for all files
// gulp.task('build:copy', ['build:cleanfolder'], function() {
//     return gulp.src('app/**/*/')
//         .pipe(gulp.dest('build/'))
// });

// //Task to remove unwanted build files 
// //list all files and directories here that you don't want to include in build

// gulp.task('build:remove', ['build:copy'], function(cb) {
//     del([
//         'build/scss/',
//         'build/js/!(*.min.js)'
//     ], cb);
// });

// gulp.task('build', ['build:copy', 'build:remove']);


// // ============================================================
// // ** Webserver Connect Livereload Task
// // ============================================================ 

// gulp.task('webserver', function() {
//     connect.server({
//         root: 'app',
//         livereload: true,
//         port: 8888
//     });
// });

// gulp.task('livereload', function() {
//     gulp.src(['app/**/*.*'])
//         .pipe(watch(['app/**/*.*']))
//         .pipe(connect.reload());
// });

// ============================================================
// ** Watch Task
// ============================================================
gulp.task('watch', function() {
    gulp.watch(['www/js/**/*.js', '!www/js/**/*.min.js'], ['scripts']);
    // gulp.watch([paths.scripts], ['scripts']);
    gulp.watch([paths.styles], ['sass']);
    gulp.watch([paths.templates], ['html']);
});

// ============================================================
// ** Default Task
// ============================================================
gulp.task('default', ['scripts', 'html','watch']);
