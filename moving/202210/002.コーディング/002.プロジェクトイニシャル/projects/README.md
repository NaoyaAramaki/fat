# モック開発者向けスタイルガイド

Web サイトにおいて、情報発信を行う関係者が、コンテンツ制作やサイト運営にあたり、遵守すべきルールを規定します。  
このガイドラインに規定されるサイトの設計方針をサイト運営に関わる全員が理解し、ルールに則ったサイト運用を継続することが求められます。
## 基本情報	

### HTML設計  

#### 文書型  

`<!DOCTYPE html>`

#### HTMLバージョン/拡張子  

`HTML 5/.html`  

#### 文字コード  

`UTF-8`  

#### 改行コード
`CR+LF`

#### パス表記規則  

- 同一ドメイン上にあるページはルート相対パス
  - 例）`/bar/`
- 同一ドメイン外へのリンクはURL  
  - 例）`https://foo〜`



### 推奨環境  

#### 対象ブラウザ
- WIN10
  - IE11
  - firefox最新
  - chrome最新
  - Edge
- Mac OS X
  - Safari最新
- Android 9系
  - Chrome
- iOS13 系
  - safari


#### レスポンシブウェブデザインにおける制作ポリシー
2020年10月現在、多種多様のデバイスや解像度で閲覧されている環境を踏まえ、 本ガイドラインで設定した検証環境以外での閲覧についてはプログレッシブエンハンスメントをポリシーとして、等価の情報は担保しますが、等価の演出については努力目標とします。   
等価であるか否かの判断基準は「情報が等価であるか否か」とします。

#### 「情報が等価であるか否か」の判断基準
- 表示が消えていて文章を読むことが出来ない → NG
- 通常の閲覧時と表示が異なるが情報は取得できる → OK
- 画像が消えている → NG
- 要素の上に要素が重なり読むことが出来ない → NG
- 意図した動作ができない　→　NG


## 開発環境	
### 基本情報

- cssはsassでの開発を行い、共通CSSは style.cssにまとめます
- タスクランナーはGulpを使用します
- 開発時はGulp上でローカルにサーバーをたてて確認します
- 対象Node.jsのバージョンはv8.9.4とします

### 開発ディレクトリ構造

```
└─ root/　　　　　
　　│　　　　　　　　　　
　　│　　　　　　　　　　　　　　　
　　├─ _htdocs_dev/ ... 開発用ディレクトリ　　　　　　　　
　　│　├─ _assets/　　　　　　
　　│　│　├─ css/ ... コンパイル前のSCSSファイルを格納
　　│　│　└─ js/　　　　
　　│　│　　　├─ libs/ ... JSのライブラリー群を格納　　
　　│　│　　　├─ src/ ... common.jsで使われる共通コンポーネントを格納　
　　│　│　　　├─ src_mp/ ... MPの個別ページ用のJSを格納
　　│　│　　　├─ common.js ... MP・TOJA共通のJS（ES6に対応のためコンパイル後は不可逆）
　　│　│　　　├─ run_toja.js ... MP・TOJA共通のJS
　　│　│　　　└─ run_mp.js ... MP・TOJA共通のJS
　　│　├─ _common_parts/　　　　　　
　　│　├─ _mp/ ... MP用のejs管理用のディレクトリ　　　　　　
　　│　└─ _toja/ ... TOJA用のejs管理用のディレクトリ　　　　　　
　　│　　　　　　　　　　
　　│　　　　　　　　　　
　　├─ _deploy/ ... デプロイ用ディレクトリ
　　│　├─ _mp/　　　　　　
　　│　│　├─ css/ ... MP用のcssのコンパイル先ディレクトリ
　　│　│　└─ js/ ... MP用のJSのコンパイル先ディレクトリ
　　│　├─ _toja/　　　　　　
　　│　│　├─ css/ ... TOJA用のcssのコンパイル先ディレクトリ　　　　
　　│　│　└─ js/ ... TOJA用のJSのコンパイル先ディレクトリ
　　│　└─ _styleguide/ ... スタイルガイドのコンパイル先ディレクトリ
　　│　　　　　　　　　　
　　│　　　　　　　　　　
　　└─ _styleguide/ ... スタイルガイドの編集用ディレクトリ
```

### 制作環境の統一（editorconfig）
`.editorconfig`の使用  
本制作環境では、制作環境の統一化を図るため、`.editorconfig`ファイルを導入し、下記ルールを適用しています。
制作担当者は各環境で`.editorconfig`の設定を有効にしてください。  
- インデントはspace2つ
- 文字コードはUTF-8
- 改行コードはCR+LF
- 行の最後に空白は残さない（.mdファイルは別）
- 最終行に空白行を挿入

### 制作環境の統一（タスクランナー）
タスクランナーの使用  
タスクランナー（Gulp）を用いて開発を行います。
#### gulp推奨条件
`Gulp v4系`  
#### 利用中のパッケージ
`package.json`を参照

#### 開発環境の構築方法
ルートディレクトリで以下を実行  
`npm insatll --save-dev `

#### 実行コマンド
`npx gulp` or `gulp`  

#### タスク
- `default` ... `gulp`実行時のデフォルトタスク
- `html:toja` ... TOJA用のejsファイルをhtmlにコンパイルする
- `html:mp` ... MP用のejsファイルをhtmlにコンパイルする
- `sass:common` ... TOJA,MP共用のScssファイルをcssファイルにコンパイルする
- `webpack` ... ES6を用いるJSファイルをコンパイルする
- `js:babel` ... ES6の構文をES5に対応させる
- `js:libs` ... JSライブラリーを結合して出力
- `js:js:ediors_mp` ... ES5で編集するJSファイルを_deployに生成（MP用） 
- `js:ediors_toja` ... ES5で編集するJSファイルを_deployに生成（TOJA用）
- `js:mp_page_unique` ... MPの個別ページ用のJSファイルを_deployに生成
- `serve:toja` ... TOJA用のローカルサーバ
- `serve:mp` ... MP用のローカルサーバ
- `serve:sg` ... スタイルガイド用のローカルサーバ
- `bs-reload` ... 全てのローカルサーバをリフレッシュする 
- `styleguide:build` ... スタイルガイドを再構築
- `styleguide:sass` ... スタイルガイド用のSASSファイルをコンパイル
- `watch` ... 開発ディレクトリのファイル変更を監視


## HTML-CSS設計	

### 命名規則
以下に記載の内容は2020年10月移行に作成のコンテンツに適応されます  
（リニューアルリリース以前のコンテンツを活用するものはこの規則の適応外です）

####  基本原則
- 半角英数字（ a-z 0-9 ）のみを使用
- 記号は「-」（ハイフン）、「_」（アンダースコア）のみ使用
- 機種依存文字は使用しない
- 全角スペース、半角スペース(Space)は使用しない
- 必ずアルファベットから開始する（数字から開始しない）
- 原則として英単語を採用

#### HTMLファイル
命名規則は以下に準拠します  
- HTMLのファイル名は、全て`index.html`に統一します。
- 各ページは以下のようにディレクトリで独立する形とします。

```
bene/ index.html
  └ insurance/ index.html
  └ xxxxx/ index.html
```

- フォームについては「入力」「確認」「完了」を同一ディレクトリに設置します

```
form/xxxx/ index.html ... 入力
        └ confirm.html ... 確認
        └ complete.html ... 完了
```

#### CSSファイル
命名規則は以下に準拠します

##### 共通CSSファイル
- docroot/css/style.css

#### 画像ファイル
命名規則は以下に準拠します  

##### 階層
- docroot/images/`利用対象ページの階層`/`任意のファイル名`.js  

##### ファイル名
```
[種別]_[連番][_pc|_sp].[拡張子]
```
- 種別
  - `img` ... 写真や図版などの画像
  - `icon` ... アイコン
  - `banner` ... バナー
- 連番
  - `01` の様に、2桁0フィル
- pc|sp
  - PC・SPで画像の出し分けが必要なものは、サフィックスに`_pc`,`_sp`を設ける

### HTML-CSS 設計方針  

#### 開発形式  

`SCSS`  

#### 基本原則
- sassでのネストは、セレクターレベルで３階層までを目安とします。（@mediaquery,疑似要素については許容します。）
  - ネストが深いと、セレクタの詳細度が必要以上に上がってしまうため
  - コードの可読性が下がり、管理・編集が煩雑になるため


#### クラス命名規則
FLOCSS の考え方をベースとして制作しています。

##### 基本ルール
```
[プレフィックス]-[機能名]__[エレメント]--[モディファイア]
```
- プレフィックス
  - `l-`... FLOCSSのレイアウト階層を明示するためのプレフィックス 
  - `p-`... FLOCSSのプロジェクト階層を明示するためのプレフィックス
  - `c-`... FLOCSSのコンポーネント階層を明示するためのプレフィックス
  - `u-`... FLOCSSのユーティリティ階層を明示するためのプレフィックス
  - `is-`... 状態変化を表すプレフィックス（以下、例）
    - `is-active`... 要素がアクティブ状態になっている
    - `is-current`... 現在地表示
  - `js-`... JSのイベントや操作対象を指定するためのクラス（このクラスに対してスタイルを定義することは厳禁）
- 機能名
  - 使用箇所や機能に応じて命名する
  - 原則2単語までで命名する
  - 機能名内で複数単語を使いたい場合は'-'でつなげる
  - 例）`c-btn-submi` , `p-card-job`
- エレメント
  - 一つの機能内に存在する子要素に対して命名
  - HTMLの階層には従わず、1度までしか利用しない
    - class名が必要以上に長くなるのを避けるため
    - `p-list__item__image`とはせず`p-list__image`とする
- モディファイア
  -  1単語で命名する
  -  例）背景で指定しているアイコンが異なるとき

```css
c-icon-label--job   { background:url(/job.svg) no-repeat; }
c-icon-label--income{ background:url(/income.svg) no-repeat; }
```

##### HTMLとSASSのネストについて

エレメント名はHTMLの構造に関わらず、機能名に対して1階層で命名する

```html
<ul class="p-todo-list">
  <li class="p-todo-list__item">
    <p class="p-todo-list__left">
      <label for="xxx" class="c-checkbox">
        <input type="checkbox" name="xxx" id="xxx" class="c-checkbox__checkbox">
        <span class="c-checkbox__label">客先FBの対応</span>
      </label>
    </p>
    <p class="p-todo-list__right">
      <dl class="c-date-limit">
        <td class="c-date-limit__head">期限</td>
        <td class="c-date-limit__body">2020/10/01</td>
      </dl>
    </p>
  </li>
  <li class="p-todo-list__item--done">
    <p class="p-todo-list__left">
      <label for="xxx" class="c-checkbox is-checked">
        <input type="checkbox" name="xxx" id="xxx" class="c-checkbox__checkbox">
        <span class="c-checkbox__label">客先FBの対応</span>
      </label>
    </p>
    <p class="p-todo-list__right">
      <dl class="c-date-limit--done">
        <td class="c-date-limit__head">期限</td>
        <td class="c-date-limit__body">2020/10/01</td>
      </dl>
    </p>
  </li>
</ul>
```

SASSのネストは機能名毎にスコープを切り、エレメントの階層はネストさせない。  
エレメント内の疑似要素やメディアクエリー、モデファイアはエレメント内でネストさせる。  
機能名レベルに対する状態変化や、モデファイアはオリジナルの機能名とは別にスコープを切る。
```SCSS
.p-todo-list{
  .p-todo-list__item{
    &--closed{
      // 機能名に対するモデファイアはネスト可
    }
  }
  .p-todo-list__left{
    &::after{
      // 疑似要素はネスト可
    }
    @include sp (){
      // メディアクエリーなどのmixinもネスト可
    }
  }
}
.p-todo-list.is-active{
  // 状態名により可変するスタイルは機能名レベルでスコープを切りなおす
  // オリジナルから上書きが必要なスタイルは子のスコープ内で上書きする（内包するエレメントもこのスコープ内で上書きする
}
.p-todo-list--active{
  // モデファイアにより可変するスタイルは機能名レベルでスコープを切りなおす
  // オリジナルから上書きが必要なスタイルは子のスコープ内で上書きする（内包するエレメントもこのスコープ内で上書きする
}

```
#### デフォルトスタイル定義  

詳細は `_normalize.scss` を参照  

- html
  - フォントサイズは `62.5%;` を指定することで、1remを10px相当に設定
  - 行間は `1.9`
  
#### 変数定義
- `_font.scss` 内でタイポグラフィに関する変数を定義
- `_variable.scss` 内でカラーに関する変数を定義

#### mixin

PCスタイル向けの Media Queries でラップ  
```scss
@mixin pc($viewport: $breakpoint) {
  @media screen and (min-width: $breakpoint), print {
    @content;
  }
}
```

スマホスタイル向けの Media Queries でラップ  
```scss
@mixin sp($viewport: $breakpoint) {
  @media screen and (max-width: $breakpoint - 1) {
    @content;
  }
}
```

320px端末スタイル向けの Media Queries でラップ  
```scss
@mixin se($viewport: $breakpoint) {
  @media screen and (max-width: 320px) {
    @content;
  }
}
```

360px端末スタイル向けの Media Queries でラップ  
```scss
@mixin sp-2($viewport: $breakpoint) {
  @media screen and (max-width: 360px) {
    @content;
  }
}
```

clearfix 
```scss
@mixin clearfix {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
```


placeholderのデザインを反映する際に仕様
```scss
@mixin placeholder{
  &:placeholder-shown {
    @content;
  }
  &::-webkit-input-placeholder {
    @content;
  }
  &:-moz-placeholder {
    @content;
  }
  &::-moz-placeholder {
    @content;
  }
  &:-ms-input-placeholder {
    @content;
  }
}
```

行間を含めたマージンを考慮する場合に使用
```scss
@mixin fontLineMargin($fts, $lin, $mt: 0, $mr: 0, $mb: 0, $ml: 0) {
  $rem: $fts / 10;
  $nm: (($lin * $fts) - $fts) / 2;
  font-size: #{$rem}rem;
  line-height: $lin;
  margin: #{$mt - $nm}px #{$mr}px #{$mb - $nm}px #{$ml}px;
}
```


左右中央置きにしたい場合に使用
```scss
@mixin positionCenter {
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
}
```

transitionでホバー表示したい場合に使用
```scss
@mixin  trans-hover($prop:opacity) {
  transition-property: $prop;
  &:hover{
    transition-duration: .3s;
    @content
  }
}
```

### JS設計
以下はJSで持たせている機能や仕様について記載していきます。

#### コンパイル環境

- `webpack` + `babel` にてコンパイルしているため、ES6にて実装可能です。
- lib.js 内に `jQuery 3.4.1` `Slick` などが存在し、グローバル関数として使用可能です。

#### Model
共通で使用するstate等の情報はModelに格納、管理しています。  
下記内容のイベントは基本的にModelから取得、更新するようにしてください。

##### Model.event
- リサイズイベントの場合

```js
Model.event.on('ON_WINDOW_RESIZE', ()=>{
```
##### Model.state

- Model.state.windowsize  
ウインドウサイズが格納されます。  
`Model.state.windowsize.w` でウインドウ幅  
`Model.state.windowsize.h` でウインドウの高さが呼び出せます。

- Model.state.touch
タッチイベントが格納されます。  
`Model.state.touch.start` で `touchstart` から `touchend` までの間か否か  
`Model.state.touch.end` で `touchend` されたか否かが `Boolean` で格納されます。  

- Model.state.scroll  
スクロールイベントが格納されます。  
`Model.state.scroll.top` でスクロール位置  
`Model.state.scroll.bottom` でウインドウ下部のスクロール位置が格納され、  
`Model.state.scroll.moving` で、スクロール中か否かが `Boolean` で格納されます。

- Model.state.orientation  
SPの回転方向が格納されます。  
`Model.state.orientation.portrait` で縦の状態  
`Model.state.orientation.landscape` で横の状態が `Boolean` で格納されます。
  

##### Model.eventName
- Model.eventName  
dispachされたイベントネームです。  
リサイズイベント:  `ON_WINDOW_RESIZE`  
スクロールイベント:  `ON_SCROLL`  
タッチイベント:  `ON_TOUCH`  
デバイス回転時イベント:  `ON_ORIENTATION_CHANGE`  
モーダルウインドウクローズ時イベント:  `ON_CLOSE_MODALWINDOW`   


##### Model.info  

その他共通で使用する情報が格納されます。  

- Model.info.ua  
ページ読み込み時にユーザーエージェントを元にデバイスバージョンについてBooleanで格納しています。  
`Model.info.ua.Mobile` でスマートデバイス（iPhone、Android、BlackBerry、WindowsPhone）か否か、  
`Model.info.ua.Tablet` でタブレットか否か、  
`Model.info.ua.AndroidLegacy` でAndroidOS4.2以下か否か 、  
`Model.info.ua.lteA4` でAndroidOS4系以下か否か、  
`Model.info.ua.lteA5` でAndroidOS5系以下か否か、  
`Model.info.ua.SafariLegacy` でMacSafari9系か否かを判定しています。  


- Model.info.IE  
ページ読み込み時にIEのバージョン以下か否かをBooleanで格納しています。  
`Model.info.IE.IE11` でIE11__以下か否か、  
`Model.info.IE.IE8` でIE8以下__か否か、  
`Model.info.IE.Edge` でEdgeか否かを判定しています。  

- Model.info.isSP  
`Model.info.isSP` はViewportがPCかSPかをBooleanで格納しています。ON_SCROLL時に判定され値が格納されます。
