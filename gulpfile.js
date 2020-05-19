const { series, watch, start, dest, src, parallel } = require('gulp');
const browserSync = require('browser-sync');
const rigger = require('gulp-rigger');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const newer = require('gulp-newer');

const path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/images/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/main.sass',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.sass',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

let clean = (cb) => {
    rimraf(path.clean, cb);
}

let webserver = (cb) => {
    browserSync({
        server: {
            baseDir: "./build"
        },
        host: 'localhost',
        port: 9000,
    });

    cb();
}

let html_build = (cb) => {
    var stream = src(path.src.html)
        .pipe(rigger())
        .pipe(dest(path.build.html));
    
    stream.on('finish', () => {
        src(path.src.html)
            .pipe(browserSync.reload({
                stream: true
            }));
    });
    
    cb();
}

let style_build = (cb) => {
    src(path.src.style) 
        .pipe(sass({
            outputStyle: 'expanded',}).on('error', sass.logError))
        .pipe(prefixer(['last 30 versions'], {
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

let js_build = (cb) => {
    src(path.src.js) 
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

let image_build = (cb) => {
    src(path.src.img) 
        .pipe(newer(path.build.img))
        .pipe(dest(path.build.img))
        // .pipe(browserSync.reload({
        //     stream: true
        // }));

    cb();
}

let fonts_build = (cb) => {
    src(path.src.fonts)
        .pipe(dest(path.build.fonts));

    cb();
}

let watch_files = (cb) => {
    watch([path.watch.html], html_build);
    watch([path.watch.style], style_build);
    watch([path.watch.js], js_build);
    watch([path.watch.img], image_build);
    watch([path.watch.fonts], fonts_build);
    cb();
}

exports.default = series(
    clean,
    parallel(
        html_build,
        style_build,
        js_build,
        image_build,
        fonts_build
    ),
    parallel(
        watch_files,
        webserver
    )
);