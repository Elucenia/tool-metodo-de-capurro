<!-- ELUCENIA technical documentation · metodo-de-capurro · fr · no clinical/professional/rights approval -->

# Méthode de Capurro (somatique)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/metodo-de-capurro)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Texture de la peau

`pele`

- `0` — Très fine, gélatineuse
- `5` — Fine et lisse
- `10` — Un peu plus épaisse, légère desquamation superficielle
- `15` — Épaisse, rides superficielles, desquamation des mains et des pieds
- `20` — Épaisse, parcheminée, avec des fissures profondes

### Forme de l’oreille

`orelha`

- `0` — Plat, déformé, pavillon non incurvé
- `8` — Pavillon partiellement recourbé sur le bord
- `16` — Pavillon partiellement recourbé sur toute la partie supérieure
- `24` — Pavillon entièrement recourbé

### Taille de la glande mammaire

`mama`

- `0` — Non palpable
- `5` — Palpable, inférieur à 5 mm
- `10` — Entre 5 et 10 mm
- `15` — Supérieur à 10 mm

### Formation du mamelon

`mamilo`

- `0` — À peine visible, sans aréole
- `5` — Aréole lisse et plate, diamètre inférieur à 7,5 mm
- `10` — Aréole ponctuée, bord non surélevé, diamètre supérieur à 7,5 mm
- `15` — Aréole pointillée, bord surélevé, diamètre supérieur à 7,5 mm

### Plis plantaires

`pregas`

- `0` — Sans plis
- `5` — Marques mal définies sur la moitié antérieure
- `10` — Marques bien définies sur la moitié antérieure et sillons sur le tiers antérieur
- `15` — Sillons sur la moitié antérieure
- `20` — Sillons au-delà de la moitié antérieure

## Édition de la méthode

Capurro 1978 somatique 5 signes : 204+points ; sans Capurro somatoneurologique 200+points

## Formule documentée

Âge gestationnel (jours) = 204 + somme des points des 5 signes somatiques. Diviser par 7 pour les semaines.

Capurro a aussi décrit une forme somatoneurologique (constante 200, avec signes neurologiques) ; cette calculatrice utilise uniquement la forme somatique, indépendante de l’état neurologique du nouveau-né.

## Limites et population

Cet outil implémente le Capurro somatique, avec cinq signes physiques et la constante 204, et non la variante somatoneurologique. L’orientation néonatale du ministère brésilien de la Santé consultée décrit son utilisation chez les nouveau-nés à partir de 29 semaines, notamment lorsque la datation menstruelle est inconnue. Les performances chez les extrêmes prématurés en dessous de ce terme ne sont pas présumées. Les signes exigent un examen physique adapté ; une oreille temporairement aplatie par la position lors de l’accouchement ne doit pas être interprétée comme un signe de maturation. Dans le tableau 11 des recommandations officielles du ministère de la Santé, deuxième édition actualisée de 2014, l’option à 10 points pour la formation du mamelon décrit un diamètre supérieur à 7,5 mm et un bord non surélevé. Il s’agit d’une lecture de la reproduction officielle, non d’une revue intégrale de l’article original de 1978. La correction du libellé conserve le code et les 10 points ; elle ne valide pas l’examen physique et ne résout pas les limites d’égalité non précisées dans la figure.

## Références

- [Capurro H et al. A simplified method for diagnosis of gestational age in the newborn infant. J Pediatr, 1978.](https://doi.org/10.1016/S0022-3476(78)80621-0)

- [Ministério da Saúde,AIDPI neonatal5ªedição,section5.1](https://bvsms.saude.gov.br/bvs/publicacoes/manual_AIDPI_neonatal_5ed.pdf)

- [Ministério da Saúde,professional neonatal guidevol1](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_recem_nascido_%20guia_profissionais_saude_v1.pdf)

- [Ministério da Saúde. Atenção à saúde do recém-nascido, v1, 2nd updated edition 2014, Quadro 11 PDF173 / printed172; official reproduction, not original1978 paper.](https://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_v1.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Nouveau-né prématuré (avant 37 semaines)

| Détails du résultat | |
| --- | --- |
| Somme des points | 0 |
| Âge gestationnel en jours (204 + somme) | 204 |


### 2

Nouveau-né à terme précoce (37 SA 0 j à 38 SA 6 j)

| Détails du résultat | |
| --- | --- |
| Somme des points | 61 |
| Âge gestationnel en jours (204 + somme) | 265 |


### 3

Nouveau-né prématuré (avant 37 semaines)

| Détails du résultat | |
| --- | --- |
| Somme des points | 53 |
| Âge gestationnel en jours (204 + somme) | 257 |


### 4

Nouveau-né post-terme (42 semaines ou plus)

| Détails du résultat | |
| --- | --- |
| Somme des points | 94 |
| Âge gestationnel en jours (204 + somme) | 298 |

