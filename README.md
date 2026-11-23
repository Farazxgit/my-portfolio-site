# Faraz Ahmed — Portfolio

A responsive, dark-first personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons. Content is based on the supplied brief and CV. No external image requests, animation libraries, analytics, or backend services are required.

## Local development

Use Node.js 20.9 or newer (Node.js 24 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`typecheck` generates Next.js route types before checking TypeScript. The site uses server components except for mobile navigation, section tracking, and copying an email address. Native details elements provide keyboard-accessible experience and project disclosure controls. Motion respects the reduced-motion preference.

## Content

Edit `src/data/portfolio.ts` to update the profile, contact links, navigation, experience, projects, technology categories, and current learning topics. Education and about copy live in `src/app/page.tsx`; the hero code illustration is in `src/components/hero.tsx`.

Professional contributions are distinguished from personal projects and current learning. The production project descriptions describe team contributions, not sole ownership. Do not add unverified metrics, client claims, or external links. AI technologies remain explicitly labeled as learning.

## Resume

The supplied CV is included at:

```text
public/resume/Faraz-Ahmed-Resume.pdf
```

Replace that file when the CV changes. Keep the filename or update `profile.resume` in the content data. The navigation opens the PDF in a new tab; the hero downloads it. A publicly hosted CV will be downloadable, including the contact details in the document.

## Project screenshots

Until real screenshots are supplied, project cards display locally rendered title artwork labeled “Screenshot placeholder.” These are not claimed to be product screenshots.

Add approved screenshots to `public/projects/`, ideally WebP or AVIF, and add a `media` field to the corresponding project in `src/data/portfolio.ts`:

```ts
media: {
  type: "single",
  images: [{
    src: "/projects/zakpay.webp",
    alt: "Describe what the actual supplied screenshot shows",
    objectPosition: "center",
  }],
},
```

The reusable `src/components/project-media.tsx` component uses `next/image` with responsive sizes and a consistent 16:10 aspect ratio. Real screenshots replace the placeholder automatically, without marketing text overlays. Images use `object-fit: contain` so important interface details remain visible, with a subtle hover effect that respects reduced motion. Use `collage` for four related screenshots or `mobile` for two or three portrait screens. Prefer landscape screenshots at least 1200px wide.

All nine projects use the typed `Project` structure in `src/data/portfolio.ts`. Set `placement` to `featured`, `primary`, or `more`; set `type` to `company`, `personal`, or `academic`. `contributions` are immediately visible on featured/primary cards; optional `details` are collapsible. `platforms` lists related products without creating extra cards. `technologies`, `icon`, `media`, and `url` are also data-driven. Media supports `single`, `collage`, and `mobile` layouts with alt text and optional object positioning.

Set an optional `url` to a confirmed HTTPS project address to link both the title and media area; external links announce that they open in a new tab. No project addresses are guessed. More Work cards stay compact and only display media when an image set is supplied. Technologies are omitted when the supplied information does not confirm them; in particular, the KryptoSignatures technology list is intentionally empty until confirmed.

The supplied portrait is saved at `public/images/faraz-ahmed.png` for future use. It is not rendered, keeping the requested changes limited to Work.

## Deploy to Ubuntu EC2 with Docker and runner F

The workflow in `.github/workflows/deploy.yml` runs on pushes to `master`, or manually through the Actions tab. It targets the runner labels `self-hosted`, `Linux`, `X64`, and `F`. The runner must be installed on the deployment server and its Linux user must be able to run `docker info` without sudo. No Docker Hub account or SSH secrets are needed: the image is built and run directly on that server.

Before the first run:

1. In GitHub, open **Settings → Secrets and variables → Actions → Variables**. Add `NEXT_PUBLIC_SITE_URL` with your public URL, for example `http://YOUR_EC2_PUBLIC_IP:3000` or your HTTPS domain. This value is used during the build for metadata and sitemap URLs.
2. Optionally add `APP_PORT` to select the host port; it defaults to `3000`. The container always listens on port `3000`.
3. Allow the selected host port in the EC2 security group and Ubuntu firewall, for the clients that need access. With the default setup, visit `http://YOUR_EC2_PUBLIC_IP:3000`. A domain using HTTPS needs a reverse proxy and TLS configured separately.
4. Keep Docker and runner `F` running as services so they start after a server reboot. If Docker group membership changes, restart the runner service so it picks up the new permissions.
5. Push the deployment files to `master`, then watch **Actions → Build and deploy portfolio**.

The multi-stage Dockerfile installs locked dependencies and runs lint, TypeScript checks, and the production build. It uses Next.js standalone output and runs the application as the unprivileged Node user. The workflow builds before stopping the existing app, starts the replacement with `unless-stopped`, and waits for its HTTP health check. It restores the previous container if deployment fails. Replacement causes a short interruption; this is a single-server deployment.

Inspect the app on EC2 with:

```bash
docker ps --filter name=faraz-portfolio
docker logs --tail 100 faraz-portfolio
```

For a manual Docker deployment:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=http://YOUR_EC2_PUBLIC_IP:3000 -t faraz-portfolio .
docker run -d --name faraz-portfolio --restart unless-stopped -p 3000:3000 faraz-portfolio
```

Old Docker images are retained for troubleshooting; monitor server disk usage and remove unused portfolio images when needed. The workflow does not prune other applications' Docker resources. Deployment only runs for `master`; pull requests do not execute on this server.

## Deploy to Vercel

1. Push this project to a Git repository and import it into Vercel.
2. Select the **Next.js** preset. Use `npm install` as the install command and `npm run build` as the build command; leave the output directory at its framework default.
3. Set `NEXT_PUBLIC_SITE_URL` to the full public production URL (for example, your actual `https://…vercel.app` address or custom domain), with no trailing slash. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used as a fallback; local development falls back to `http://localhost:3000`.
4. Deploy. Confirm the resume download, email links, social links, `/sitemap.xml`, `/robots.txt`, and `/opengraph-image` on the deployed domain.
5. If you add a custom domain later, update `NEXT_PUBLIC_SITE_URL` and redeploy so canonical URLs, Open Graph metadata, and sitemap URLs match it.

No secrets are needed. `.env.example` documents the optional URL setting; copy it to `.env.local` for local overrides. Metadata, the generated Open Graph card, a favicon, sitemap, robots metadata, and a custom 404 page are included.

## Structure

```text
src/app/          Page, styles, layout, metadata routes, and 404
src/components/  Navigation, hero, projects, copy-email interaction, and shared UI
src/data/        Structured portfolio content
src/lib/         Site URL configuration
public/projects/ Real project screenshots when available
public/resume/   Downloadable CV
```

The layout supports small mobile screens through wide desktops. Keyboard focus styles, a skip link, semantic landmarks, accessible icon labels, and copy feedback are included. Clipboard access requires HTTPS or localhost; on failure the interface shows the address for manual copying. Before release, use Lighthouse against the production server and recheck with any real screenshots you add.
