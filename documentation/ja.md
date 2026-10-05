<!-- ELUCENIA technical documentation · metodo-de-capurro · ja · no clinical/professional/rights approval -->

# Capurro法（身体所見）

[条件・出典・許諾](https://elucenia.org/ja/tools/metodo-de-capurro)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 皮膚の質感

`pele`

- `0` — 非常に薄くゼラチン状
- `5` — 薄く滑らか
- `10` — やや厚く，軽い表層落屑
- `15` — 厚く，表面のしわ，手足の落屑
- `20` — 厚く羊皮紙状で深い亀裂あり

### 耳介の形状

`orelha`

- `0` — 平坦で形が不整，耳介の巻き込みなし
- `8` — 耳介の縁が部分的に巻き込む
- `16` — 耳介上部全体が部分的に巻き込む
- `24` — 耳介が完全に巻き込む

### 乳腺の大きさ

`mama`

- `0` — 触知不能
- `5` — 触知可能，5 mm未満
- `10` — 5～10 mm
- `15` — 10 mm超

### 乳頭の形成

`mamilo`

- `0` — 見えるのみ，乳輪なし
- `5` — 乳輪が滑らかで平坦，直径7.5 mm未満
- `10` — 点状の乳輪、縁は隆起せず、直径7.5 mmより大きい
- `15` — 乳輪が点状，縁の隆起あり，直径7.5 mm超

### 足底皺襞

`pregas`

- `0` — しわなし
- `5` — 前半分の線が不明瞭
- `10` — 前半分の線が明瞭で，前方3分の1に溝
- `15` — 前半分に溝
- `20` — 前半分を超える範囲に溝

## 方法の版

Capurro 1978身体所見5項目：204+点；身体・神経所見法200+点ではない

## 記載された計算式

在胎日数=204+合計点（5つの身体所見）。7で割ると週数になります。

Capurroは身体・神経所見を用いる方法（定数200、神経所見を含む）も記載しました。本計算は、新生児の神経学的状態に依存しない身体所見法のみを使います。

## 限界・対象集団

このツールは、五つの身体所見と定数204を用いる身体所見型Capurroを実装し、身体・神経所見型ではありません。参照したブラジル保健省の新生児指針では、特に月経による妊娠日付が不明な場合、妊娠29週以降の新生児での使用を説明しています。この範囲未満の超早産児での性能を前提にしません。所見には適切な身体診察が必要です。分娩時の体位で一時的に平たくなった耳を、成熟度の所見として扱わないでください。 保健省の公式ガイド2014年更新第2版の表11では、乳頭形成の10点選択肢を直径7.5 mmより大きく、縁が隆起していないものと記載している。これは公式転載資料の確認であり、1978年の原著論文の全文レビューではない。ラベルの修正ではコードと10点を保持する。身体診察を検証せず、図で明示されない等号の境界も確定しない。

## 参考文献

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
