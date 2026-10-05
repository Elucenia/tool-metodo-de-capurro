<!-- ELUCENIA technical documentation · metodo-de-capurro · it · no clinical/professional/rights approval -->

# Metodo di Capurro (somatico)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/metodo-de-capurro)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Consistenza della cute

`pele`

- `0` — Molto sottile, gelatinosa
- `5` — Sottile e liscia
- `10` — Leggermente più spessa, lieve desquamazione superficiale
- `15` — Spessa, rughe superficiali, desquamazione su mani e piedi
- `20` — Spessa, pergamenacea, con fissurazioni profonde

### Forma dell’orecchio

`orelha`

- `0` — Piatta, deformata, padiglione non incurvato
- `8` — Padiglione parzialmente incurvato sul bordo
- `16` — Padiglione parzialmente incurvato in tutta la parte superiore
- `24` — Padiglione completamente incurvato

### Dimensione della ghiandola mammaria

`mama`

- `0` — Non palpabile
- `5` — Palpabile, minore di 5 mm
- `10` — Tra 5 e 10 mm
- `15` — Maggiore di 10 mm

### Formazione del capezzolo

`mamilo`

- `0` — Appena visibile, senza areola
- `5` — Areola liscia e piatta, diametro inferiore a 7,5 mm
- `10` — Areola punteggiata, bordo non rilevato, diametro maggiore di 7,5 mm
- `15` — Areola punteggiata, bordo rialzato, diametro maggiore di 7,5 mm

### Pliche plantari

`pregas`

- `0` — Senza pieghe
- `5` — Segni poco definiti sulla metà anteriore
- `10` — Segni ben definiti sulla metà anteriore e solchi nel terzo anteriore
- `15` — Solchi nella metà anteriore
- `20` — Solchi oltre la metà anteriore

## Edizione del metodo

Capurro 1978 somatico, 5 segni: 204+punti; non somatoneurologico 200+punti

## Formula documentata

Età gestazionale (giorni) = 204 + somma dei punti dei 5 segni somatici. Dividere per 7 per le settimane.

Capurro descrisse anche una forma somatoneurologica (costante 200, con segni neurologici); questa calcolatrice usa solo la somatica, indipendente dallo stato neurologico del neonato.

## Limiti e popolazione

Questo strumento implementa il Capurro somatico, con cinque segni fisici e costante 204, non la variante somatoneurologica. L’orientamento neonatale del Ministero della Salute brasiliano consultato ne descrive l’uso nei neonati a partire da 29 settimane, soprattutto quando la datazione mestruale non è nota. Non si presume la prestazione nei prematuri estremi al di sotto di tale intervallo. I segni richiedono un esame fisico appropriato; un orecchio temporaneamente appiattito dalla posizione durante il parto non deve essere interpretato come segno di maturazione. Nel Quadro 11 della guida ufficiale del Ministero della Salute, seconda edizione aggiornata del 2014, l’opzione da 10 punti per la formazione del capezzolo descrive un diametro maggiore di 7,5 mm e un bordo non rilevato. Si tratta della lettura della riproduzione ufficiale, non di una revisione integrale dell’articolo originale del 1978. La correzione dell’etichetta conserva il codice e i 10 punti; non convalida l’esame obiettivo né risolve i limiti di uguaglianza non specificati nella figura.

## Riferimenti

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
