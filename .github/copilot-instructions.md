# Copilot Instructions for devlink (Next.js Portfolio)

## Project Overview
- This is a Next.js 15 app using the App Router, TypeScript, TailwindCSS, and custom local fonts (Gilroy).
- The project is a developer portfolio with sections for About, Projects, and Contact, plus technology highlights and featured projects.
- UI components are organized under `src/app/ui/about/` and `src/app/ui/project/`.
- Navigation is sticky and highlights the active section using IntersectionObserver.

## Key Files & Structure
- `src/app/page.tsx`: Main page, navigation, section logic, and layout.
- `src/app/layout.tsx`: Global layout, font setup, metadata.
- `src/app/ui/about/technology_experience.tsx`: Technology grid, uses custom SVG filters for branding.
- `src/app/ui/project/`: Project-related components (list, item, featured section).
- `public/images/`: Technology and branding SVGs.
- `globals.css`, `tailwind.config.js`, `postcss.config.mjs`: Styling and Tailwind setup.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `pnpm dev`, `yarn dev`, `bun dev`)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Deploy:** Vercel recommended; see `vercel.json` for config.
- **TypeScript:** Strict mode enabled; see `tsconfig.json` for custom path alias `@/*` → `src/*`.

## Patterns & Conventions
- **Component Organization:** All UI components are colocated by feature in `src/app/ui/`.
- **SVG Icons:** Use Lucide React icons for social links and some UI elements. Custom SVGs for technology branding.
- **Font Loading:** Uses `next/font/local` for Gilroy font family, configured in `layout.tsx`.
- **Section Navigation:** Navigation links use smooth scroll and highlight based on viewport intersection.
- **Props:** Project and technology components use explicit TypeScript interfaces for props.
- **Styling:** TailwindCSS utility classes throughout; custom filters for SVG branding.

## External Dependencies
- `lucide-react`: Icon library for UI/social links.
- `next`, `react`, `tailwindcss`, `postcss`: Core stack.
- `tailwindcss-animate`: For animation utilities.

## Integration Points
- Featured project links to Google Play Store.
- Social links to GitHub and LinkedIn.
- Images and SVGs loaded from `public/images/`.

## Example: Adding a New Technology
- Add SVG to `public/images/`.
- Update `technology_experience.tsx` with a new `TechnologyItem`.
- Use custom filter for brand color if needed.

## Example: Adding a New Project
- Add project data to the relevant component or data source.
- Use `ProjectList` and `ProjectItem` for display.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
