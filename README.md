# lizzydent.com

Static website for Lizzy Dent. No build step: plain HTML, CSS and a little JavaScript.

## Files
- index.html, books.html, about.html, praise.html, newsletter.html
- styles.css, script.js
- assets/ (covers and photos)
- CNAME (tells GitHub Pages the domain is www.lizzydent.com)

## Publish on GitHub Pages
1. Create a public repository on github.com (e.g. lizzydent-site).
2. Upload everything in this folder (not the folder itself) and commit.
3. Settings → Pages → Source: "Deploy from a branch" → Branch: main, folder: / (root) → Save.
4. Custom domain should show www.lizzydent.com (from the CNAME file). Tick "Enforce HTTPS" once available.

## Point the domain at GoDaddy
GoDaddy → My Products → lizzydent.com → DNS. Remove old Squarespace A / CNAME records, then add:

| Type  | Name | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | YOUR-USERNAME.github.io |

Changes can take up to 48 hours.

## Editing
- Shop links live inside each page as normal links (search for "↗").
- UK/US: elements with class "uk" or "us" show for that region. Visitors' choice is remembered; US English browsers default to US.
- Newsletter: the sign-up forms (index.html and newsletter.html) send visitors to https://lizzydent.substack.com/subscribe with their email filled in. If your Substack address changes, update the form's action on both pages.
