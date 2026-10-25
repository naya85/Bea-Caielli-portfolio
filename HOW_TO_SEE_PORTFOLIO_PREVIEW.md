# How to see the portfolio preview in Cursor

The portfolio is a **Next.js app**, so you need to run the dev server first. Then you can view it in Cursor or in your browser.

---

## Step 1: Start the dev server

In a terminal (Cursor’s integrated terminal or any terminal):

```bash
cd beatrice-portfolio
npm run dev
```

Wait until you see something like:

```text
▲ Next.js 15.x.x
- Local:        http://localhost:3000
```

Leave this terminal running.

---

## Step 2: Open the preview

### Option A: Simple Browser (inside Cursor)

1. **Cmd + Shift + P** (Mac) or **Ctrl + Shift + P** (Windows) → Command Palette.
2. Type **Simple Browser: Show** and run it.
3. Enter URL: **http://localhost:3000**
4. The portfolio opens in a panel inside Cursor. You can split the editor to have code on one side and the preview on the other.

### Option B: System browser

With the dev server running, open in Chrome/Safari/Edge:

**http://localhost:3000**

---

## After you see it

- Scroll through the sections (Hero, About, Work, Skills, Education, Blog, Contact).
- Tell me what you want to change (e.g. “make the hero tagline shorter”, “add a project”, “change the violet to teal”) and I’ll update the code.

Content is driven by **`src/data/content.ts`** — edit that file to change copy, links, and projects without touching the layout components.
