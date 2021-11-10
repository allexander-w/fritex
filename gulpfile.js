const { src, watch, dest, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const del = require('del')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const clean = async ( ) => {
    del.sync( "./dist" )
}

const html = cb => {
    src("./app/*.html")
        .pipe( browserSync.reload({ stream: true }) )

    cb()
}

const scss = cb => {

    src('./app/scss/**/*.scss')
        .pipe(sass({
			includePaths: ['./app/scss'],
			outputStyle: 'compressed'
		}))
        .pipe(autoprefixer({
                cascade: false
		}))
        .pipe(concat("index.min.css"))
        .pipe(dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }))
    
    cb()

}

const js = cb => {
    src('./app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
   
    cb()
}

const build = async cb => {
    await clean()

    src('./app/css/*.css')
        .pipe( dest("./dist/css") )
    
    src('./app/*.html')
        .pipe( htmlmin({ collapseWhitespace: true }) )
        .pipe( dest("./dist/") )

    src('./app/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest("./dist/js"))

	src('./app/img/**/*.*')
		.pipe(dest('./dist/img'))

	src('./app/vendor/**/*.*')
		.pipe(dest('./dist/vendor'))

	src('./app/fonts/*.*')
		.pipe(dest('./dist/fonts'))

    cb()
}

const browserWatch = cb => {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    })

    cb()
}

const watchSync = cb => {

    watch('./app/scss/**/*.scss', parallel( scss ))
    watch('./app/*.html', parallel( html ))
    watch('./app/js/*.js', parallel( js ))
    
    cb()

}
exports.build = parallel( build ) 
exports.default = parallel( js, scss, browserWatch, watchSync )