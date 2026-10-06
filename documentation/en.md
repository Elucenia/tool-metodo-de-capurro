<!-- ELUCENIA technical documentation · metodo-de-capurro · en · no clinical/professional/rights approval -->

# Capurro method (somatic)

[conditions, sources and permissions](https://elucenia.org/en/tools/metodo-de-capurro)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Skin texture

`pele`

- `0` — Very thin, gelatinous
- `5` — Thin and smooth
- `10` — Slightly thicker, mild superficial peeling
- `15` — Thick, superficial wrinkles, peeling of hands and feet
- `20` — Thick, parchment-like, with deep fissures

### Ear shape

`orelha`

- `0` — Flat, misshapen, pinna not curved
- `8` — Pinna partly curved at the rim
- `16` — Pinna partly curved throughout its upper part
- `24` — Pinna fully curved

### Breast gland size

`mama`

- `0` — Not palpable
- `5` — Palpable, less than 5 mm
- `10` — Between 5 and 10 mm
- `15` — Greater than 10 mm

### Nipple formation

`mamilo`

- `0` — Barely visible, no areola
- `5` — Smooth, flat areola, diameter below 7.5 mm
- `10` — Punctate areola, border not raised, diameter greater than 7.5 mm
- `15` — Stippled areola, raised edge, diameter greater than 7.5 mm

### Plantar creases

`pregas`

- `0` — No creases
- `5` — Poorly defined markings on the anterior half
- `10` — Well-defined markings on the anterior half and creases on the anterior third
- `15` — Creases on the anterior half
- `20` — Creases extending beyond the anterior half

## Method edition

Capurro 1978 somatic 5 signs: 204+points; not somatoneurological Capurro 200+points

## Documented formula

Gestational age (days) = 204 + sum of points for the 5 somatic signs. Divide by 7 for weeks.

Capurro also described a somatoneurological form (constant 200, with neurological signs); this calculator uses only the somatic form, independent of the newborn’s neurological state.

## Limits and population

This tool implements somatic Capurro, with five physical signs and the constant 204, not the somatoneurological variant. The consulted Brazilian Ministry of Health neonatal guidance describes its use in newborns from 29 weeks, especially when menstrual dating is unknown. Performance in extremely preterm infants below that range is not assumed. The signs require an appropriate physical examination; an ear temporarily flattened by the birth position must not be treated as reflecting maturity. In Table 11 of the official Ministry of Health guidance, second updated edition of 2014, the 10-point nipple-formation option describes a diameter greater than 7.5 mm and a border that is not raised. This is a reading of the official reproduction, not a full review of the original 1978 article. Correcting the label preserves the code and the 10 points; it does not validate the physical examination or resolve equality boundaries not specified in the figure.

## References

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Preterm newborn (before 37 weeks)

| Result details | |
| --- | --- |
| Sum of points | 0 |
| Gestational age in days (204 + sum) | 204 |


### 2

Early-term newborn (37w 0d to 38w 6d)

| Result details | |
| --- | --- |
| Sum of points | 61 |
| Gestational age in days (204 + sum) | 265 |


### 3

Preterm newborn (before 37 weeks)

| Result details | |
| --- | --- |
| Sum of points | 53 |
| Gestational age in days (204 + sum) | 257 |


### 4

Post-term newborn (42 weeks or more)

| Result details | |
| --- | --- |
| Sum of points | 94 |
| Gestational age in days (204 + sum) | 298 |

