<!-- ELUCENIA technical documentation · metodo-de-capurro · de · no clinical/professional/rights approval -->

# Capurro-Methode (somatisch)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/metodo-de-capurro)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Hautbeschaffenheit

`pele`

- `0` — Sehr dünn, gallertig
- `5` — Dünn und glatt
- `10` — Etwas dicker, leichte oberflächliche Schuppung
- `15` — Dick, oberflächliche Falten, Schuppung an Händen und Füßen
- `20` — Dick, pergamentartig, mit tiefen Rissen

### Ohrform

`orelha`

- `0` — Flach, verformt, Ohrmuschel nicht gekrümmt
- `8` — Ohrmuschel am Rand teilweise eingerollt
- `16` — Ohrmuschel im gesamten oberen Abschnitt teilweise eingerollt
- `24` — Ohrmuschel vollständig eingerollt

### Größe der Brustdrüse

`mama`

- `0` — Nicht tastbar
- `5` — Tastbar, kleiner als 5 mm
- `10` — Zwischen 5 und 10 mm
- `15` — Größer als 10 mm

### Mamillenbildung

`mamilo`

- `0` — Gerade sichtbar, ohne Areola
- `5` — Glatte, flache Areola, Durchmesser unter 7,5 mm
- `10` — Punktierte Areola, nicht erhabener Rand, Durchmesser größer als 7,5 mm
- `15` — Gepunktete Areola, erhöhter Rand, Durchmesser größer als 7,5 mm

### Plantarfalten

`pregas`

- `0` — Keine Furchen
- `5` — Schwach ausgeprägte Markierungen an der vorderen Hälfte
- `10` — Deutliche Markierungen an der vorderen Hälfte und Furchen im vorderen Drittel
- `15` — Furchen an der vorderen Hälfte
- `20` — Furchen über die vordere Hälfte hinaus

## Fassung der Methode

Capurro 1978 somatisch, 5 Zeichen: 204+Punkte; nicht somatoneurologisch 200+Punkte

## Dokumentierte Formel

Gestationsalter (Tage) = 204 + Punktesumme der 5 somatischen Zeichen. Für Wochen durch 7 teilen.

Capurro beschrieb auch eine somatoneurologische Form (Konstante 200, mit neurologischen Zeichen); dieser Rechner nutzt nur die somatische Form, unabhängig vom neurologischen Zustand des Neugeborenen.

## Grenzen und Population

Dieses Werkzeug implementiert den somatischen Capurro mit fünf körperlichen Zeichen und der Konstante 204, nicht die somatoneurologische Variante. Die konsultierte neonatologische Empfehlung des brasilianischen Gesundheitsministeriums beschreibt die Anwendung bei Neugeborenen ab 29 Wochen, insbesondere bei unbekannter menstrueller Datierung. Eine Leistung bei extrem Frühgeborenen unterhalb dieses Bereichs wird nicht vorausgesetzt. Die Zeichen erfordern eine geeignete körperliche Untersuchung; ein durch die Geburtsposition vorübergehend abgeflachtes Ohr darf nicht als Ausdruck der Reife beurteilt werden. In Tabelle 11 der offiziellen Anleitung des Gesundheitsministeriums, zweite aktualisierte Ausgabe von 2014, beschreibt die 10-Punkte-Option zur Brustwarzenbildung einen Durchmesser größer als 7,5 mm und einen nicht erhabenen Rand. Dies ist eine Lektüre der offiziellen Wiedergabe, keine vollständige Prüfung des Originalartikels von 1978. Die Korrektur der Beschriftung erhält den Code und die 10 Punkte; sie validiert weder die körperliche Untersuchung noch klärt sie Gleichheitsgrenzen, die in der Abbildung nicht angegeben sind.

## Referenzen

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Frühgeborenes Neugeborenes (vor 37 Wochen)

| Ergebnisdetails | |
| --- | --- |
| Summe der Punkte | 0 |
| Gestationsalter in Tagen (204 + Summe) | 204 |


### 2

Neugeborenes im frühen Termingeburtsalter (37 SSW 0 T bis 38 SSW 6 T)

| Ergebnisdetails | |
| --- | --- |
| Summe der Punkte | 61 |
| Gestationsalter in Tagen (204 + Summe) | 265 |


### 3

Frühgeborenes Neugeborenes (vor 37 Wochen)

| Ergebnisdetails | |
| --- | --- |
| Summe der Punkte | 53 |
| Gestationsalter in Tagen (204 + Summe) | 257 |


### 4

Übertragenes Neugeborenes (42 Wochen oder mehr)

| Ergebnisdetails | |
| --- | --- |
| Summe der Punkte | 94 |
| Gestationsalter in Tagen (204 + Summe) | 298 |

