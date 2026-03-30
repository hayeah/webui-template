---
name: webui-template
description: Pre-configured React + Vite + Tailwind v4 template with shadcn-compatible OKLCh design tokens, MobX state, wouter routing, and design sampler pages.
---

# webui-template

Starter template for React web UIs. Pre-configured with design tokens, routing, state management, and sample pages for verifying theme coherence.

## Quick Start

```bash
# Clone
git-quick-clone github.com/hayeah/webui-template
cd ~/github.com/hayeah/webui-template

# Install and run
pnpm install
pnpm dev --port 5173
```

Visit `/design` to see the design sampler — typography, semantic colors, buttons, cards, inputs, lists, and a blog post section. Visit `/design/dashboard` for a dashboard with stat cards, chart, and activity list.

Screenshot these pages after customizing the theme to verify visual coherence:

```bash
# Light mode
browser screenshot --open http://localhost:5173/design -o "$(tmpfile design.png)" --full

# Dark mode
browser screenshot --open http://localhost:5173/design \
  -o "$(tmpfile design-dark.png)" --full \
  --eval 'document.documentElement.classList.add("dark")' --wait 500
```

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** + `tailwindcss-animate`
- **MobX** + `mobx-react-lite` — state management
- **wouter** — lightweight routing
- **framer-motion** — animation
- **lucide-react** — icons

Path alias: `@/*` maps to `./src/*`.

## Project Structure

```
src/
  App.tsx                       # Root router (wouter Switch)
  main.tsx                      # Entry point
  index.css                     # Tailwind v4 + design tokens
  types.d.ts                    # Window.__tap__ type
  pages/
    HomePage.tsx                # / — index with links
    design/
      DesignSampler.tsx         # /design — typography, colors, components
      Dashboard.tsx             # /design/dashboard — stat cards, chart, activity
```

## Design Tokens

All colors are defined as OKLCh CSS variables in `src/index.css`, with `:root` (light) and `.dark` overrides. The `@theme inline` block maps them to Tailwind utilities.

### Semantic Color Tokens

| Token | Tailwind class | Use for |
|---|---|---|
| `--background` / `--foreground` | `bg-background text-foreground` | Page surface and body text |
| `--primary` / `--primary-foreground` | `bg-primary text-primary-foreground` | Primary buttons, key actions |
| `--secondary` / `--secondary-foreground` | `bg-secondary text-secondary-foreground` | Secondary buttons, less prominent |
| `--muted` / `--muted-foreground` | `bg-muted text-muted-foreground` | Subdued backgrounds, captions |
| `--accent` / `--accent-foreground` | `bg-accent text-accent-foreground` | Hover states, highlights |
| `--destructive` / `--destructive-foreground` | `bg-destructive text-destructive-foreground` | Errors, delete actions, negative trends |
| `--success` / `--success-foreground` | `bg-success text-success-foreground` | Positive signals, upward trends |
| `--warning` / `--warning-foreground` | `bg-warning text-warning-foreground` | Caution, amber alerts |
| `--card` / `--card-foreground` | `bg-card text-card-foreground` | Card surfaces |
| `--popover` / `--popover-foreground` | `bg-popover text-popover-foreground` | Popover/dropdown surfaces |
| `--border` | `border-border` | Borders, dividers |
| `--input` | `border-input` | Input field borders |
| `--ring` | `ring-ring` | Focus rings |

### Other Tokens

- `--radius` + `--radius-sm/md/lg/xl` — border radius scale
- `--font-heading`, `--font-body`, `--font-mono` — typography
- `--chart-1` through `--chart-5` — data visualization palette
- `--sidebar-*` — sidebar-specific variants (remove if not needed)

### Rule: No Hardcoded Colors

Never use raw Tailwind colors (`text-red-500`, `bg-emerald-50`) in components. Always use semantic tokens:

```tsx
// BAD — breaks in dark mode, not theme-aware
<span className="text-emerald-700 bg-emerald-50">+12.5%</span>
<button className="bg-red-500 text-white">Delete</button>

// GOOD — adapts to light/dark, swappable by editing :root
<span className="text-success bg-success/10">+12.5%</span>
<button className="bg-destructive text-destructive-foreground">Delete</button>
```

Use opacity modifiers (`bg-success/10`, `text-primary/60`) for tinted backgrounds and subdued text rather than introducing new tokens.

### Customizing the Theme

Edit the OKLCh values in `:root` and `.dark` in `src/index.css`:

- Replace the Google Fonts import and `--font-*` variables with your chosen fonts
- Adjust color values to match your design
- Set `--radius` base value
- Remove sidebar/chart tokens if not needed

Then screenshot `/design` and `/design/dashboard` in both light and dark mode to verify coherence.

## Adding Libraries

Common additions (not included by default to keep the template lean):

- **Styling**: clsx + tailwind-merge (`cn()` utility), class-variance-authority (cva)
- **Interaction**: @dnd-kit (drag-drop), cmdk (command palette), embla-carousel-react
- **Forms**: zod + react-hook-form
- **Charts**: recharts
- **UI primitives**: radix-ui, vaul (drawer), sonner (toasts)
- **3D**: @react-three/fiber + drei

## Vite+

The template uses standard Vite, but can be migrated to Vite+ (`vp`) for a unified toolchain that replaces Vite, Vitest, ESLint, and Prettier:

```bash
vp migrate              # migrate this project
vp install              # install dependencies
vp dev                  # dev server
vp check                # format + lint + type-check in one pass
vp test                 # run tests
vp build                # production build
```

After migration, everything lives in `vite.config.ts`. Import from `'vite-plus'` and `'vite-plus/test'` instead of `'vite'`/`'vitest'`.

## Dark Mode

Add the `dark` class to the document root:

```typescript
// Toggle programmatically
document.documentElement.classList.toggle('dark')

// Agent: screenshot in dark mode
browser screenshot --open http://localhost:5173/design \
  --eval 'document.documentElement.classList.add("dark")' --wait 500
```

The `.dark` selector in `index.css` overrides all semantic tokens. Components using semantic classes (`bg-background`, `text-foreground`, etc.) adapt automatically.

## Routes

| Path | Component | Purpose |
|---|---|---|
| `/` | `HomePage` | Index with links to design pages |
| `/design` | `DesignSampler` | Typography, colors, buttons, cards, inputs, lists, blog post |
| `/design/dashboard` | `Dashboard` | Stat cards with trends, chart placeholder, activity list |
