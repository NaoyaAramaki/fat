// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
// ブラウザ同期
const browserSync = require("browser-sync").create();

// style.scssをタスクを作成する
gulp.task("scss", () => {
  // style.scssファイルを取得
  return (
    gulp
      .src("/site/common/scss/style.scss")
      // Sassのコンパイルを実行
      .pipe(sass())
      // cssフォルダー以下に保存
      .pipe(gulp.dest("/site/common/"))
  );
});
//リロードの監視用
gulp.task('bs-reload', function(done) {
  browserSync.reload();
  done();
});
//ファイルの変更を監視
gulp.task('watch',(done) => {
  gulp.watch('/site/common/**/*.scss',gulp.series('scss','bs-reload'));
  gulp.watch('/site/common/**/*.html',gulp.series('bs-reload'));
  gulp.watch('/site/common/**/*.js',gulp.series('bs-reload'));
  done();
});
//ブラウザシンク設定
gulp.task('browser-sync',()=>{
  browserSync.init({
    server: {
      baseDir:'./',
      directory: true,
      port:3002
    },
    browser: "chrome"
  });
});
//gulp立ち上げ時の実行
gulp.task('default',gulp.series('watch','browser-sync'));