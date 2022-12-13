const gulp = require('gulp');//gulp本体
//scss
const sass = require('gulp-dart-sass');//Dart Sass はSass公式が推奨 @use構文などが使える
const plumber = require("gulp-plumber"); // エラーが発生しても強制終了させない
const notify = require("gulp-notify"); // エラー発生時のアラート出力
const browserSync = require("browser-sync"); //ブラウザリロード

// 入出力するフォルダを指定
const paths = {
  'scss': 'common/scss/**/*.scss',
  'css': 'common/css/',
  'html': '**/*.html',
  'js': '**/*.js',
};

/**
 * sass
 *
 */
const cssSass = () => {
  return gulp.src(paths.scss, {
    sourcemaps: true
  })
    .pipe(
      //エラーが出ても処理を止めない
      plumber({
        errorHandler: notify.onError('Error:<%= error.message %>')
      }))
    .pipe(sass({ outputStyle: 'expanded' })) //指定できるキー expanded compressed
    .pipe(gulp.dest(paths.css, { sourcemaps: './' })) //コンパイル先
    .pipe(browserSync.stream())
    .pipe(notify({
      message: 'Sassをコンパイルしました！',
      onLast: true
    }))
}

/**
 * ローカルサーバー立ち上げ
 */
const browserSyncOption = {
  // fatの位置から立ち上げる
  server: "../../../../",
}
const browserSyncFunc = () => {
  browserSync.init(browserSyncOption);
}

/**
 * リロード
 */
const browserSyncReload = (done) => {
  browserSync.reload();
  done();
}

/**
 *
 * ファイル監視 ファイルの変更を検知したら、browserSyncReloadでreloadメソッドを呼び出す
 * series 順番に実行
 * watch('監視するファイル',処理)
 */
const watchFiles = () => {
  gulp.watch([paths.scss, paths.html, paths.js], gulp.series(cssSass, browserSyncReload))
}

/**
 * seriesは「順番」に実行
 * parallelは並列で実行
 */
exports.default = gulp.series(
  gulp.parallel(cssSass),
  gulp.parallel(watchFiles, browserSyncFunc)
);