# ポートフォリオサイト
<br>

## 概要
Webコーダーとして内定をいただくことを目的に制作した、  
就職活動用ポートフォリオサイトです。  
コンテンツ設計・デザインからコーディングまで行いました。
<br>
<br>

## サイトURL
[https://matsuyamarikiya.jp/my_portfolio/](https://matsuyamarikiya.jp/my_portfolio/)
<br>
<br>

## 制作情報

### 制作期間

- デザイン：4日
- コーディング：10日

### 制作人数

- 個人制作

### 担当範囲

- サイトデザイン
- HTMLマークアップ
- SCSSコーディング
- JavaScript実装
- レスポンシブ対応
- GitHubへの公開
- サーバーアップロード (さくらサーバー)
<br>
<br>

## 使用技術

- HTML
- SCSS
- JavaScript
- Git
- GitHub
- Figma
<br>
<br>

## サイト構成

- トップページ（`top`）
- 制作物（`works`）
- 制作物 詳細ページ（`works-detal`）
- 私について（`about`）
- お問い合わせ（`contact`）
- 入力内容確認画面（`confirm`）
- 送信完了画面（`thanks`）
<br>
<br>

## 実装内容

- レスポンシブ対応
- ハンバーガーメニュー
- ヘッダー背景の切り替え
- お問い合わせフォーム (フォーム → 入力内容確認 → 送信完了)
- フェードインスクロールアニメーション (GSAP)
- TOPページ テキストフェードインアニメーション (GSAP) 
<br>
<br>

## 工夫点
### JavaScriptとCSS変数を活用したレスポンシブアニメーションの実装
4つの項目を示す円を線でつなぎ、線が伸びるアニメーションを実装しました。  
当初はposition: absoluteを使用し、pxや%で線の位置と長さを指定していましたが、画面幅によって線がずれる問題が発生しました。  
そこで、JavaScriptのgetBoundingClientRect()を使用し、ビューポートを基準に各要素の位置を取得する方法に変更しました。  
具体的には、画面の上端・左端から円までの距離と、最初の円から最後の円までの距離を算出し、線の位置と長さを求めました。  
算出した値をCSSカスタムプロパティ（CSS変数）に反映することで、画面幅に応じて線の位置と長さを自動調整できるようにしました。  
これにより、画面幅による線のずれを解消し、レスポンシブに対応したアニメーションを実現しました。 
<br>
### Works詳細ページにおける、プレビュー画像のSP・PC切り替え機能の実装
スマートフォンでの閲覧時に、SP・PC両方の画像を縦に並べると、スクロール量が増え、ユーザーの操作負担が大きくなるという課題がありました。  
そこで、一度に表示する画像を1つに絞り、ボタン操作でSP・PCの画像を切り替えられる機能を実装しました。  
これにより、不要なスクロールを減らし、ユーザーが必要な画像を選んで閲覧できるようにしました。
<br>
<br>

## ディレクトリ構成

```text
.
├── index.html
│
├── about
│   └── index.html
│
├── contact
│   ├── index.html
│   ├── confirm
│   │   └── index.html
│   └── thanks
│       └── index.html
│
├── works
│   ├── index.html
│   ├── detail
│   │   └── index.html
│   ├── detail2
│   │   └── index.html
│   └── detail3
│       └── index.html
│
│
└── assets
    ├── img/
    │
    ├── js
    │   ├── module
    │   │   └── script.js
    │   │
    │   ├── scroll
    │   │   ├── top-fv-text-fadein.js
    │   │   ├── fade-in.js
    │   │   └── about-career.js
    │   │
    │   ├── contact
    │   │   ├── confirm.js
    │   │   ├── thanks.js
    │   │   └── contact.js
    │   │
    │   ├── works
    │   │   └── works-tab-btn.js
    │   │
    │   └── main.js
    │
    ├── scss
    │   ├── component
    │   ├── foundation
    │   ├── global
    │   ├── layout
    │   ├── page
    │   ├── utility
    │   └── style.scss
    │
    └── css
        └── style.css
```
<br>
<br>

## 対応画面幅

- モバイル (375 ~ 1079px)
- PC (1080px ~)
