# Deploy this site anywhere

This exported repo now builds as a plain static website.

## Universal settings

- Install command: `bun install`
- Build command: `bun run build`
- Publish/output directory: `.output/public`

## Vercel

Framework preset: **Other**

Vercel will read `vercel.json` automatically.

## Netlify

Netlify will read `netlify.toml` automatically.

If setting it manually, use:

- Build command: `bun run build`
- Publish directory: `.output/public`

## Cloudflare Pages

- Build command: `bun run build`
- Output directory: `.output/public`

## cPanel / shared hosting / S3 / any static host

Run `bun run build`, then upload the contents of `.output/public`.

For hosts without rewrite support, the generated `404.html` keeps refreshes and direct links working.