import gulp, { parallel, series, watch } from 'gulp';

import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import del from 'del';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('js', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('css', () => 
    gulp.src('src/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
);

gulp.task('icons', () => 
    gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('dist/fonts/'))
);

gulp.task('images', () => 
    gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images'))
);

gulp.task('clean', () => {
    return del(['./dist/js', './dist/css', './dist/fonts', './dist/images']);
});

export const build = (done) => {
    series('clean', parallel('css', 'js', 'icons', 'images'))(done);
}

export const watchFiles = () => {
    watch(['./src/js/*.js', './src/scss/**/*.scss'], build);
}