# Studio Noord - Website-template

Een responsive website-template voor een digitaal bureau. Dit project is gemaakt voor **Opdracht 3 - GitHub & website-template**.

## Live website

Voeg hier na publicatie de GitHub Pages-link toe:

[Open de live website](https://getrektbynoob15.github.io/studio-noord-website-template/)

## Functionaliteiten

- Responsive homepage
- Navigatie met mobiel menu
- Header en footer
- Extra pagina: Over ons
- Toegankelijke HTML met skiplink, alt-teksten en duidelijke focusvolgorde
- Automatisch actueel jaartal in de footer
- Automatische publicatie via GitHub Pages

## Gebruikte technieken

- HTML5
- CSS3
- JavaScript
- Git en GitHub

## Mappenstructuur

```text
.
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- docs/
|   `-- scrum-board-screenshot.md
|-- .github/
|   |-- pull_request_template.md
|   `-- workflows/pages.yml
|-- index.html
|-- over-ons.html
`-- README.md
```

## Installatie

1. Clone de repository.
2. Open de projectmap.
3. Open `index.html` in een browser.

Er is geen installatie of webserver nodig.

## Git-workflow

Er wordt niet direct op `main` gewerkt.

1. Haal de laatste versie van `main` op.
2. Maak een branch met een duidelijke naam, bijvoorbeeld `feature/header`.
3. Maak kleine, duidelijke commits.
4. Push de branch naar GitHub.
5. Open een pull request.
6. Laat een teamlid de wijzigingen controleren.
7. Merge de pull request pas na goedkeuring.

### Voorbeeldbranches

- `feature/homepage`
- `feature/navigation`
- `feature/over-ons`
- `feature/responsive`
- `docs/readme`

## Testresultaten

| Apparaat/browser | Formaat | Resultaat |
|---|---:|---|
| Chrome desktop | 1440 x 900 | Homepage, navigatie en links werken |
| Edge desktop | 1366 x 768 | Layout en afbeeldingen werken |
| Chrome mobiel | 390 x 844 | Mobiel menu en responsive layout werken |
| Safari/iPhone | 375 x 812 | Controleer en vul resultaat in |

## Scrum-bord

Voeg een screenshot van het bijgewerkte Scrum-bord toe aan `docs/scrum-board.png`. Meer uitleg staat in `docs/scrum-board-screenshot.md`.

## Publiceren met GitHub Pages

De workflow in `.github/workflows/pages.yml` publiceert de website automatisch na een merge naar `main`. Open bij de eerste keer **Settings > Pages** en kies bij **Source** voor **GitHub Actions**.

## Team

| Naam | Taak |
|---|---|
| Student 1 | Vul taak in |
| Student 2 | Vul taak in |
| Student 3 | Vul taak in |

## Bronnen

- Afbeeldingen: [Unsplash](https://unsplash.com/)
- Lettertypes: [Google Fonts](https://fonts.google.com/)

## Licentie

Dit project is gemaakt voor onderwijsdoeleinden.
