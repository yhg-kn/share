<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center"><b>Gulp Standard</b></p>
</p>

## 概要
簡易作業用のGulpパッケージ。
- **gulp-sass** - sassのコンパイルといえばこいつ。gulp-ruby-sassはsassのバージョンに大きく依存するので、今回は不採用。
- **gulp-cssnext** - CSSの先行実装をブラウザが解釈できるCSSに変換。要するにベンダープレフィクスを自動で記述してくれるスーパーパッケージ。
- **gulp-plumber** - エラーが出ても止まらない。セミコロンが抜けてただけで、いちいち再起動したくない人用。
- **gulp-sourcemaps** - ソースマップ書き出すマン。
- **gulp-combine-media-queries** - メディアクエリーが整理される。容量も減るので最高。インストール後、修正が必要→[http://viewpoint-nk.github.io/blog/javascript/gulp-combine-media-queries-error.html](http://viewpoint-nk.github.io/blog/javascript/gulp-combine-media-queries-error.html)

## 導入

```cmd
npm install
```
『gulp-combine-media-queries』にバグがあるので修正。

```node_modules/gulp-combine-media-queries/index.js:152
file.contents = new Buffer(cssJson);
```
node_modules/gulp-combine-media-queries/index.jsの152行目の上記記述をコメントアウト。

## 使い方

coming soon...