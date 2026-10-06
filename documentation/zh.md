<!-- ELUCENIA technical documentation · metodo-de-capurro · zh · no clinical/professional/rights approval -->

# Capurro 法（躯体指标）

[条件、来源与许可](https://elucenia.org/zh/tools/metodo-de-capurro)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 皮肤质地

`pele`

- `0` — 极薄，胶冻样
- `5` — 薄且光滑
- `10` — 稍厚，轻微表面脱屑
- `15` — 厚，有浅表皱纹，手足脱屑
- `20` — 厚、羊皮纸样，有深裂纹

### 耳廓形态

`orelha`

- `0` — 扁平、形态不规则，耳廓未卷曲
- `8` — 耳廓边缘部分卷曲
- `16` — 耳廓整个上部部分卷曲
- `24` — 耳廓完全卷曲

### 乳腺大小

`mama`

- `0` — 不可触及
- `5` — 可触及，小于5 mm
- `10` — 5至10 mm
- `15` — 大于10 mm

### 乳头形成

`mamilo`

- `0` — 仅可见，无乳晕
- `5` — 乳晕光滑、扁平，直径小于7.5 mm
- `10` — 乳晕有点状纹理，边缘不隆起，直径大于7.5 mm
- `15` — 乳晕有点状结构，边缘隆起，直径大于7.5 mm

### 足底纹

`pregas`

- `0` — 无褶皱
- `5` — 前半部纹理不清楚
- `10` — 前半部纹理清楚，前三分之一有沟
- `15` — 前半部有沟
- `20` — 沟超过前半部

## 方法版本

Capurro 1978体征法5项：204+分数；非体征-神经系统法200+分数

## 已记录的公式

胎龄（天）=204+总分，基于5项体征。除以7得周数。

Capurro还描述了体征-神经系统形式（常数200，含神经系统征象）；本计算器仅使用不依赖新生儿神经状态的体征形式。

## 限制与适用人群

本工具实现的是体征型Capurro，使用五项身体体征和常数204，而非体征神经型变体。所查阅的巴西卫生部新生儿指导描述其适用于孕29周起的新生儿，尤其是月经日期不明时。不能假定它对低于该范围的极早产儿具有同样表现。各项体征必须通过适当的体格检查评估；因分娩体位暂时压平的耳廓不能当作成熟度的反映。 卫生部官方新生儿指南2014年第二次更新版的表11中，乳头形成10分选项描述直径大于7.5 mm、边缘不隆起。本次阅读的是官方转载版本，并非完整审查1978年的原始论文。修正标签保留代码及10分；不验证体格检查，也不解决图中未明确说明的相等边界。

## 参考文献

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

早产新生儿（37周前）

| 结果详情 | |
| --- | --- |
| 得分总和 | 0 |
| 孕周（天）（204 + 总分） | 204 |


### 2

早期足月新生儿（37周0天至38周6天）

| 结果详情 | |
| --- | --- |
| 得分总和 | 61 |
| 孕周（天）（204 + 总分） | 265 |


### 3

早产新生儿（37周前）

| 结果详情 | |
| --- | --- |
| 得分总和 | 53 |
| 孕周（天）（204 + 总分） | 257 |


### 4

过期产新生儿（42周或以上）

| 结果详情 | |
| --- | --- |
| 得分总和 | 94 |
| 孕周（天）（204 + 总分） | 298 |

