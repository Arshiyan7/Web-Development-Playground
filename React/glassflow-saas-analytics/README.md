# GlassFlow

A dark, glassmorphism-style SaaS analytics dashboard built with React and TypeScript. It has five working pages, interactive charts, and real state-driven features, all running on mock data with no backend.

Live demo: [add your deployed link here]

![GlassFlow dashboard](./screenshots/dashboard.png)

## Overview

GlassFlow is a front-end portfolio project. The goal was to build a multi-page dashboard with a consistent design system, typed data flow, and real interactions (search, sorting, forms, modals, persistence), using plain CSS for full control over layout and styling.

## Features

- Dashboard with metric cards, an active users chart, and a recent activity feed
- Customers page with live search, A-Z and Z-A sorting, and an Add customer modal with form validation
- Revenue page with derived metric cards, a monthly revenue area chart, a revenue-by-plan donut chart, and a transactions table
- Analytics page with traffic metrics derived from data, a traffic line chart, a traffic-by-source bar chart, and a top pages table
- Settings page with a controlled profile form, notification toggles, Save and Cancel, and persistence through localStorage
- Client-side routing with active link highlighting and a 404 page
- Responsive layout: the sidebar collapses behind a menu button on smaller screens, and card grids and chart rows reflow

## Tech stack

- React with TypeScript
- Vite
- React Router (declarative mode)
- Recharts for the area, line, bar, and donut charts
- Lucide React for icons
- Plain CSS with custom properties (no UI framework)

## Getting started

Prerequisites: a recent version of Node.js (22 or later recommended) and npm.

```bash
# clone the repository
git clone https://github.com/Arshiyan7/Web-Development-Playground/tree/master/React/glassflow-saas-analytics
cd glassflow-saas-analytics

# install dependencies
npm install

# start the development server
npm run dev

# create a production build
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
src/
  components/    Reusable UI pieces (Sidebar, Header, MetricCard, PageHeader,
                 StatusBadge, ChartCard, RecentActivity, AddCustomerModal)
    charts/      Recharts wrappers (area, line, bar, donut) and shared chart theme
  views/         One file per page (Dashboard, Customers, Revenue, Analytics,
                 Settings, NotFound)
  types/         TypeScript interfaces and union types for all data
  data/          Mock data used by the pages
  utils/         Formatting helpers and localStorage helpers
  index.css      Design tokens, reset, and shared styles (glass surface, buttons, tables)
  App.tsx        App shell, routes, and mobile menu state
```

Each component and view has its own CSS file, imported next to it.

## Design system

All colors, spacing, radii, and shadows are defined once as CSS custom properties in `index.css`, and components only reference those variables. Retuning the whole look means editing one block.

- Dark graphite background with soft indigo and sky glows behind the glass surfaces
- Translucent surfaces with backdrop blur, subtle borders, and an inner highlight
- Marigold accent for primary actions and active states
- Semantic colors for success, danger, and warning states
- Inter as the typeface

## Technical highlights

- Typed data flow from `types/` to `data/` to components, including union types and `Record` lookups (for example, the status badge labels)
- Derived values instead of hardcoded ones: totals and averages are calculated from the data arrays with `filter` and `reduce`
- Derived state in the Customers page: the visible list is computed from the full list, the search text, and the sort order, never stored twice
- Controlled forms with immutable state updates, and a saved-versus-draft pattern for Save and Cancel on the Settings page
- State lifted into `App` so the header button and sidebar share the mobile menu state
- localStorage persistence with safe parsing, defaults merging, and error handling
- Reusable chart components that take data and keys as props
- Accessible touches: labelled inputs, keyboard-operable toggles, focus rings, and a dialog with Escape-to-close

## Limitations

- All data is mock data. There is no backend or API.
- Customers added through the modal are kept in memory only and reset on refresh.
- Change password and the demo reset button are UI only.
- Percentage changes on the metric cards are placeholder values.

## Possible next steps

- Connect to a real API and add loading and error states
- Persist added customers
- Date-range filtering on the charts
- Code-splitting pages with lazy loading to reduce the bundle size
- Refactor the styling to Tailwind CSS

## Author

Arshiyan Mairaj

- GitHub: [github.com/Arshiyan7](https://github.com/Arshiyan7)
- LinkedIn: [linkedin.com/in/arshiyanmairaj](https://linkedin.com/in/arshiyanmairaj)