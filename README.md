# Algi — landing page

Landing page for **Algi**, the consumer AI assistant that lives in WhatsApp.

Static site — no build step. Just open `index.html`, or serve it:

```sh
python3 -m http.server 8000
```

## Design

The visual language is inspired by sea-glass mosaic art: deep teals and sea
greens with streaks of gold and accents of coral terracotta on a cream
"grout" background. The decorative tile bands are generated at load time by
`mosaic.js`, so they're slightly different on every visit.

- `index.html` — page structure (hero with WhatsApp chat mockup, features, how-it-works, CTA)
- `styles.css` — all styling; palette variables at the top
- `mosaic.js` — generates the mosaic tile bands

## TODO

- Replace the placeholder WhatsApp number (`15555555555`) in the `wa.me` links
  in `index.html` with Algi's real WhatsApp number.
