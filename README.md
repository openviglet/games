# Viglet Games

The page of the Viglet Games label, published at <https://games.viglet.com/>.

Viglet Games is the game label of Viglet Serviços de Informática LTDA. Each game has its own
repository and site ([Cottony](https://cottony.viglet.com/), [Spinhold](https://spinhold.viglet.com/));
this page introduces the label, points to each game and holds the press kit.

## Layout

| Path | What it is |
|---|---|
| `site/` | The page: static HTML and CSS, no build step; `app.js` holds the Portuguese strings and the EN/PT switch |
| `site/assets/press/` | The press kit downloads |
| `.github/workflows/pages.yml` | Publishes `site/` to GitHub Pages on every push to `main` |
| `docs/ROADMAP.md` | Open tasks (prefix `VG`), governed by roadkeep |

To preview, open `site/index.html` in a browser, or serve the folder:
`python -m http.server -d site 8000`.

## The brand

The logo is the flat Viglet Games mark (`site/assets/viglet-games.svg`), the V of Viglet made
rounder and given a face. The label is written without ™ or ®: the mark is not registered
in the game classes. Game names are registered on their own, near each launch.

The roadmap, changelog and rationale files in `docs/` are written by
[roadkeep](https://github.com/alegauss/roadkeep), never by hand.
