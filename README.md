# 株式会社人間のWeb開発コーディングスタイル

npmのlint系ツールをvscodeから利用する。

タスクランナーなどを利用した雛形は別途定義する。

開発者用なのでnpmはdevの方に定義してます。

随時更新します。

使用例は https://github.com/novogrammer/my_gulp_template を参照。

test

## 導入

```
$ npm i
```

## 実行

lintでエラーが検出されることの確認。結果はOKになる。
```
$ npm test
```

自動修正されないエラーが検出される。
```
$ npm run fix
```

