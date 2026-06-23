# Modern Classroom

A modern, self-paced learning dashboard for students and teachers. Built with Next.js, TypeScript, and Tailwind CSS.

Students work through unit sections at their own pace — completing Learn, Practice, and Extra Material in order, uploading proof of work, and flagging when they need help. Teachers get a live progress grid with review workflows for submitted screenshots.

**Demo mode** — no backend or login required. Progress is stored in the browser via `localStorage`.

## Features

### Student view
- Unit and section navigation with the current section highlighted
- Sequential unlock: Learn → Practice → Extra Material
- Practice requires a screenshot upload before marking complete
- "I Need Help" blocks progression until resolved
- Light and dark mode

### Teacher view
- Class progress table with status per student and section
- Status types: **Done**, **Review** (yellow), **Active**, **Help** (red), not started
- Click **Review** to view a student's submitted screenshot and approve it
- Stat cards with detail modals (enrolled students, help requests, progress breakdown)
- Section breakdown charts

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
git clone https://github.com/sidmirchandani/modernclassroom.git
cd modernclassroom
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run fix-logo` | Fix PNG transparency on `public/Logo.png` and regenerate favicons |

## Project structure

```
app/                  # Next.js routes (home, student, teacher)
components/           # UI components
  student/            # Student dashboard
  teacher/            # Teacher dashboard
lib/                  # Types, demo data, progress logic, localStorage store
public/               # Static assets (Logo.png, favicons)
scripts/              # Utility scripts
```

## Demo data

The app ships with demo students and progress for **Unit 3: Linear Models and Systems** (sections 3.1–3.7). Switch between students on the student view to see different progress states.

## License

MIT
