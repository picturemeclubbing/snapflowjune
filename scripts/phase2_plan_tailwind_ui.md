# Phase 2 Plan: Tailwind CSS Integration & UI Scaffolding

**Objective:**  
To build the foundational user interface components and page layouts using Tailwind CSS and EJS partials, ensuring a consistent and responsive design for both the admin and customer-facing sides of the application.

---

## ✅ Phase 1 Review & Assessment

**Status:** Completed and Aligned.

Claude successfully completed the foundational setup with:
- Express, Helmet, Tailwind CSS, EJS
- Functional environment (.env)
- Solid npm script structure
- Logical folder structure adaptations

**Optional Improvements:**
- Add `src/modules/` for future business logic
- Add `src/routes/` to move routes out of app.js
- Move uploads out of public/ for secure processing pipeline

---

## 🔧 Key Files to Create or Modify

- `src/styles/input.css`
- `views/layouts/main.ejs`
- `views/partials/header.ejs`
- `views/partials/footer.ejs`
- `views/admin.ejs`
- `views/gallery.ejs`
- `views/index.ejs` (update)
- `tailwind.config.js` (if needed)

---

## 📋 Tasks for Claude to Implement

### Task 1: Master Layout & Partials

- Create `views/layouts/main.ejs` with base HTML + `header` and `footer` includes
- Move header/footer chunks into `views/partials/`
- Update `index.ejs` to extend `main.ejs`

### Task 2: Define Component Styles

In `src/styles/input.css`, use Tailwind's `@apply` to define:
- `.btn-primary`
- `.btn-secondary`
- `.form-input`
- `.card`

### Task 3: Admin Dashboard Scaffold (`admin.ejs`)

- Uses `main.ejs` layout
- Static scaffold of:
  - "Create New Gallery" form
  - Grid of `.card` gallery boxes
  - "Unprocessed Orders" section with `.card` layout

### Task 4: Customer Gallery Scaffold (`gallery.ejs`)

- Uses `main.ejs`
- Static scaffold of:
  - Gallery name heading
  - Responsive photo grid with `.card` placeholders

### Task 5: Mobile Responsiveness

- Apply `md:`, `lg:` breakpoints to all major layout sections
- Ensure gallery and admin grids adapt to screen sizes

---

Claude will execute this step-by-step, using Tailwind and EJS.
