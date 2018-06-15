import gulp from 'gulp';
import gulpif from 'gulp-if';

import concat from 'gulp-concat';
import webpack from 'webpack';

import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
//热更新
import livereload from 'gulp-livereload';
//管道拼接
import plumber from 'gulp-plumber';
// 重命名
import rename from 'gulp-rename';
// 资源压缩
import uglify from 'gulp-uglify';
// 输出，颜色处理
import {log,colors} from 'gulp-util';
// 命令行处理
import args from './util/args';

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler:function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished'${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})
