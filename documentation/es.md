<!-- ELUCENIA technical documentation · metodo-de-capurro · es · no clinical/professional/rights approval -->

# Método de Capurro (somático)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/metodo-de-capurro)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Textura de la piel

`pele`

- `0` — Muy fina, gelatinosa
- `5` — Fina y lisa
- `10` — Algo más gruesa, discreta descamación superficial
- `15` — Gruesa, arrugas superficiales, descamación en manos y pies
- `20` — Gruesa, apergaminada, con grietas profundas

### Forma de la oreja

`orelha`

- `0` — Plana, deforme, pabellón no curvado
- `8` — Pabellón parcialmente curvado en el borde
- `16` — Pabellón parcialmente curvado en toda la parte superior
- `24` — Pabellón completamente curvado

### Tamaño de la glándula mamaria

`mama`

- `0` — No palpable
- `5` — Palpable, menor de 5 mm
- `10` — Entre 5 y 10 mm
- `15` — Mayor de 10 mm

### Formación del pezón

`mamilo`

- `0` — Apenas visible, sin areola
- `5` — Areola lisa y plana, diámetro menor de 7,5 mm
- `10` — Aréola punteada, borde no elevado, diámetro mayor de 7,5 mm
- `15` — Aréola punteada, borde elevado, diámetro mayor de 7,5 mm

### Pliegues plantares

`pregas`

- `0` — Sin pliegues
- `5` — Marcas mal definidas en la mitad anterior
- `10` — Marcas bien definidas en la mitad anterior y surcos en el tercio anterior
- `15` — Surcos en la mitad anterior
- `20` — Surcos en más de la mitad anterior

## Edición del método

Capurro 1978 somático 5 signos: 204+puntos; sin Capurro somatoneurológico 200+puntos

## Fórmula documentada

Edad gestacional (días) = 204 + suma de puntos de los 5 signos somáticos. Divida por 7 para semanas.

Capurro también describió una forma somatoneurológica (constante 200, con signos neurológicos); esta calculadora usa solo la somática, que no depende del estado neurológico del recién nacido.

## Límites y población

Esta herramienta implementa el Capurro somático, con cinco signos físicos y constante 204, no la variante somatoneurológica. La orientación neonatal del Ministerio de Salud de Brasil consultada describe su uso en recién nacidos a partir de 29 semanas, especialmente cuando no se conoce la fecha menstrual. No se presume desempeño en prematuros extremos por debajo de ese intervalo. Los signos requieren un examen físico apropiado; una oreja temporalmente aplanada por la posición del parto no debe interpretarse como si reflejara maduración. En el Cuadro 11 de la orientación oficial del Ministerio de Salud, segunda edición actualizada de 2014, la opción de 10 puntos de formación del pezón describe un diámetro mayor de 7,5 mm y un borde no elevado. Esta es una lectura de la reproducción oficial, no una revisión íntegra del artículo original de 1978. La corrección del rótulo conserva el código y los 10 puntos; no valida la exploración física ni resuelve límites de igualdad que la figura no especifica.

## Referencias

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
