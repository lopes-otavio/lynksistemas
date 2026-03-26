import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);
gulp.task("scss", scssCompile);
gulp.task("watch", watch);
function scssCompile() {
	return gulp
		.src("src/components/**/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest("src/styles"));
}
function watch() {
	gulp.watch("src/components/**/*.scss", scssCompile);
}
