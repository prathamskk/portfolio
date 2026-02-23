# Replace GitHub Pages portfolio & move old to `old_portfolio`

Follow these steps in order. Replace `YOUR_USERNAME` with your GitHub username.

---

## 1. Back up the old portfolio into `old_portfolio`

You need the **old** portfolio repo (the one currently live on GitHub Pages) somewhere on your machine.

- **If you already have it cloned** (e.g. in another folder): use that folder for the steps below.
- **If you donâ€™t**: clone it first, then use that clone:

  ```powershell
  cd C:\Users\Pratham\Documents\GitHub
  git clone https://github.com/YOUR_USERNAME/REPO_THAT_HAS_PAGES.git old-portfolio-backup
  cd old-portfolio-backup
  ```

Then:

1. On GitHub: **New repository** â†’ name: **`old_portfolio`** â†’ Create (no need to add README if the repo will get the push below).
2. In the folder that has the **old** portfolio code:

   ```powershell
   git remote add old_portfolio https://github.com/YOUR_USERNAME/old_portfolio.git
   git push old_portfolio main
   ```
   (Use `master` instead of `main` if thatâ€™s your default branch.)

The old portfolio is now in **`YOUR_USERNAME/old_portfolio`**.

---

## 2. Put the new portfolio in a repo named `portfolio`

Use this repo (the one youâ€™re in now, with the new Astro portfolio).

1. On GitHub: **New repository** â†’ name: **`portfolio`** â†’ Create (again, empty is fine).
2. In this project folder (`marketing-portfolio`):

   ```powershell
   cd "C:\Users\Pratham\Documents\GitHub\marketing-portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

The new portfolio lives in **`YOUR_USERNAME/portfolio`**.

---

## 3. Point GitHub Pages at the new `portfolio` repo

It depends how your current â€œportfolio URLâ€ is set up.

### A) Project site: `YOUR_USERNAME.github.io/portfolio` (or `/REPO_NAME`)

- The **old** site was served from a repo (e.g. `portfolio` or something else).
- You want the **new** site to be at **`YOUR_USERNAME.github.io/portfolio`**:
  - **Settings** of the repo that should serve it â†’ **Pages** â†’ Source: **Deploy from a branch** â†’ Branch: **main** (or **master**) â†’ **Save**.
- If the repo that used to serve that URL was **not** named `portfolio`, you can either:
  - Turn off Pages for that old repo (Settings â†’ Pages â†’ remove source), and use **`portfolio`** (from step 2) as the only repo for that URL, or  
  - Replace the contents of that old repo with the new portfolio (see â€œReplace in placeâ€ below) and keep the same repo name.

### B) User/org site: `YOUR_USERNAME.github.io` (root URL)

- The site is served from a repo named **`YOUR_USERNAME.github.io`**.
- You **cannot** serve that URL from a repo named `portfolio`; the repo **must** be `YOUR_USERNAME.github.io`.
- So you have two options:

  **Option B1 â€“ Replace in place (recommended)**  
  - Keep using the repo **`YOUR_USERNAME.github.io`** for the root URL.  
  - In a **new** folder, clone it, wipe its contents, copy in the **new** portfolio (this project), build, add the build output (e.g. `dist/` or `docs/`), commit and push.  
  - Then the **old** code is only in **`old_portfolio`** (from step 1).

  **Option B2 â€“ Use `portfolio` only as project site**  
  - Leave **`YOUR_USERNAME.github.io`** as-is (or empty) and use **`portfolio`** only for **`YOUR_USERNAME.github.io/portfolio`**.  
  - Then your main portfolio URL becomes **`YOUR_USERNAME.github.io/portfolio`**, not the root.

---

## 4. (Optional) Replace the old repoâ€™s contents in place

If your current â€œportfolio URLâ€ is served by a repo that you want to **keep** as the Pages repo (e.g. `YOUR_USERNAME.github.io` or an existing `portfolio` repo):

1. Clone that repo to a new folder.
2. Delete everything inside that clone **except** `.git` (and optionally `.gitignore`).
3. Copy in the **contents** of this project (the new Astro portfolio), including `src/`, `public/`, `package.json`, `astro.config.mjs`, etc.
4. Build and configure Pages to use the build output (see â€œGitHub Pages buildâ€ below).
5. Commit and push. The live site will now show the new portfolio; the old code is already backed up in **`old_portfolio`**.

---

## 5. GitHub Pages build for this Astro project

This repo includes a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that builds the Astro site and deploys to GitHub Pages.

1. In the **`portfolio`** repo on GitHub: **Settings â†’ Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow from the Actions tab). The site will be built and deployed automatically.

**Config:** `astro.config.mjs` is set for a **project site** at `https://YOUR_USERNAME.github.io/portfolio/` (base: `/portfolio/`). If your GitHub username is not `prathamskk`, change the `site` value in `astro.config.mjs` to `https://YOUR_USERNAME.github.io`. If you use a **user site** (root URL only), use a repo named `YOUR_USERNAME.github.io`, set `base: '/'` and `site: 'https://YOUR_USERNAME.github.io'` in `astro.config.mjs`, and deploy this project there.





---

## Summary

| What | Where |
|------|--------|
| Old portfolio (backed up) | **`YOUR_USERNAME/old_portfolio`** |
| New portfolio (this project) | **`YOUR_USERNAME/portfolio`** |
| Package name in this project | **`portfolio`** (already set in `package.json`) |

After step 1, the old site code is safe in **`old_portfolio`**. After step 2, the new site code is in **`portfolio`**. Step 3 (and optionally 4) makes the â€œportfolio URLâ€ point at the new site; step 5 makes sure GitHub Pages builds and serves the Astro `dist/` correctly.
