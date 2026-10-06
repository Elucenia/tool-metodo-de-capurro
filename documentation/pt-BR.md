<!-- ELUCENIA technical documentation · metodo-de-capurro · pt-BR · no clinical/professional/rights approval -->

# Método de Capurro (somático)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/metodo-de-capurro)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Textura da pele

`pele`

- `0` — Muito fina, gelatinosa
- `5` — Fina e lisa
- `10` — Algo mais grossa, discreta descamação superficial
- `15` — Grossa, rugas superficiais, descamação nas mãos e nos pés
- `20` — Grossa, apergaminhada, com gretas profundas

### Forma da orelha

`orelha`

- `0` — Chata, disforme, pavilhão não encurvado
- `8` — Pavilhão parcialmente encurvado na borda
- `16` — Pavilhão parcialmente encurvado em toda a parte superior
- `24` — Pavilhão totalmente encurvado

### Tamanho da glândula mamária

`mama`

- `0` — Não palpável
- `5` — Palpável, menor que 5 mm
- `10` — Entre 5 e 10 mm
- `15` — Maior que 10 mm

### Formação do mamilo

`mamilo`

- `0` — Apenas visível, sem aréola
- `5` — Aréola lisa e chata, diâmetro menor que 7,5 mm
- `10` — Aréola pontilhada, borda não elevada, diâmetro maior que 7,5 mm
- `15` — Aréola pontilhada, borda elevada, diâmetro maior que 7,5 mm

### Pregas plantares

`pregas`

- `0` — Sem pregas
- `5` — Marcas mal definidas na metade anterior
- `10` — Marcas bem definidas na metade anterior e sulcos no terço anterior
- `15` — Sulcos na metade anterior
- `20` — Sulcos em mais da metade anterior

## Edição do método

Capurro 1978 somático 5 sinais:204+pontos; sem Capurrosomatoneurológico 200+pontos

## Fórmula documentada

Idade gestacional (dias) = 204 + soma dos pontos dos 5 sinais somáticos. Divida por 7 para obter semanas.

Capurro também descreveu uma forma somatoneurológica (constante 200, com sinais neurológicos); esta calculadora usa só a forma somática, que não depende do estado neurológico do recém-nascido.

## Limites e população

Esta ferramenta implementa o Capurro somático, com cinco sinais físicos e constante 204, não a variante somatoneurológica. A orientação neonatal do Ministério da Saúde consultada descreve seu uso em recém-nascidos a partir de 29 semanas, especialmente quando a data menstrual não é conhecida. Não se presume desempenho em prematuros extremos abaixo dessa faixa. Os sinais exigem exame físico apropriado; uma orelha temporariamente achatada pela posição do parto não deve ser usada como se refletisse maturação. No Quadro 11 da orientação oficial do Ministério da Saúde, segunda edição atualizada de 2014, a opção de 10 pontos da formação do mamilo descreve diâmetro maior que 7,5 mm e borda não elevada. Esta é uma leitura da reprodução oficial, não uma revisão integral do artigo original de 1978. A correção do rótulo mantém o código e os 10 pontos; não valida o exame físico nem resolve limites de igualdade que a figura não explicita.

## Referências

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Recém-nascido pré-termo (antes de 37 semanas)

| Detalhes do resultado | |
| --- | --- |
| Soma dos pontos | 0 |
| Idade gestacional em dias (204 + soma) | 204 |


### 2

Recém-nascido termo precoce (37s 0d a 38s 6d)

| Detalhes do resultado | |
| --- | --- |
| Soma dos pontos | 61 |
| Idade gestacional em dias (204 + soma) | 265 |


### 3

Recém-nascido pré-termo (antes de 37 semanas)

| Detalhes do resultado | |
| --- | --- |
| Soma dos pontos | 53 |
| Idade gestacional em dias (204 + soma) | 257 |


### 4

Recém-nascido pós-termo (42 semanas ou mais)

| Detalhes do resultado | |
| --- | --- |
| Soma dos pontos | 94 |
| Idade gestacional em dias (204 + soma) | 298 |

