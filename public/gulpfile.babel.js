'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', () => {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            outputStyle: 'expanded', // nested, expanded, compact, compressed
            precision: 5,
            includePaths: ['sass'],
            indentType: 'space',
            indentWidth: 2,
            linefeed: 'crlf',
            sourceComments: false,
        }).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('autoprefix', ()=> {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('js', () => {
    return gulp.src('js/index.js')
        .pipe(uglify({
            mangle: true,
            compress: true,
            output: {
                quote_style: 3,
            },
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('js', 'sass'));
