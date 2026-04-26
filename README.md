# 🦁 Accra Ubuntu Lions & Leos Club Website

> *"I am because you are."* — The Ubuntu Philosophy

A modern, accessible, and responsive website for the **Accra Ubuntu Lions Club** and its youth wing, the **Accra Ubuntu Leo Club** — both chartered under **District 418, Ghana**.

🌐 **Live Site:** [https://kuagbe123.github.io/Accra-Ubuntu-Lions-and-Leos-Website/](https://kuagbe123.github.io/Accra-Ubuntu-Lions-and-Leos-Website/)

---

## 📖 About

This website serves as the digital home for both the **Accra Ubuntu Lions Club** and the **Accra Ubuntu Leo Club**. It showcases their shared commitment to humanitarian service, community development, and the Ubuntu philosophy — the belief that our individual success is intrinsically linked to the well-being of those around us.

The site allows visitors to:
- Learn about both clubs and their mission
- View past and current service projects
- Explore awards and recognitions received
- Meet the leadership team
- Get in touch via the contact form

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** (via ESM CDN) | UI component framework |
| **Tailwind CSS** (via CDN) | Utility-first styling |
| **Lucide React** | Icon library |
| **Babel Standalone** | In-browser JSX transpilation |
| **GitHub Pages** | Hosting & deployment |

> No build step required — the site runs entirely in the browser using ES Modules and import maps.

---

## ♿ Accessibility

This website is built with accessibility (WCAG compliance) as a core priority. The following measures have been implemented:

- **Keyboard Navigation** — All interactive elements are fully navigable via keyboard with visible `focus-visible` ring indicators
- **Screen Reader Support** — All decorative icons are marked `aria-hidden="true"`; all meaningful buttons have `aria-label` attributes
- **Active Page Indication** — Navigation items use `aria-current="page"` to communicate the current page to screen readers
- **Mobile Menu** — The hamburger button uses `aria-expanded`, `aria-controls`, and `aria-label` to announce its state
- **Form Accessibility** — All form labels are properly linked to their inputs via `htmlFor`/`id` pairing; fields are marked with `aria-required="true"`
- **Landmark Navigation** — Major page sections use `aria-labelledby` linked to their visible headings for screen reader landmark navigation
- **Semantic HTML** — The logo link is a proper `<button>` element rather than a non-interactive `<div>`

An independent accessibility audit has been conducted on the website prototype. See [`Ubuntu Accessibility Audit.docx`](./Ubuntu%20Accessibility%20Audit.docx) for the full audit report.

---

## 📁 Project Structure

```
Accra Ubuntu Website/
├── index.html                    # App entry point (loads React, Tailwind, Babel)
├── Accra Ubuntu Website.js       # Main React application (all components & logic)
├── Ubuntu Accessibility Audit.docx  # Independent accessibility audit report
└── README.md                     # This file
```

---

## 🚀 Running Locally

No installation needed. Simply open `index.html` in your browser, or use a local server for best results:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 🏆 Awards & Recognition

- 🥇 **Club of the Year 2022/2023** — District 418
- 🌍 **Global Service Action Award** — Vision & Hunger Relief
- 📈 **Top Membership Growth** — District 418
- 🏅 **Best Leo Club Project 2023** — "Tech for Teens" Initiative
- ⭐ **Leo Excellence Award** — Outstanding Leadership

---

## 🤝 Service Projects

- **Vision Screening at Makola** — Free eye exams & spectacles for over 200 traders
- **Environmental Clean-up** — Coastal sanitation drive with local authorities
- **Hunger Relief Program** — Food donations to three orphanages in Greater Accra
- **Youth Career Fair** — Connecting 50+ graduates with industry mentors
- **Tree Planting Initiative** — 100 saplings planted at a local school
- **School Supplies Drive** — Stationery for underprivileged students

---

## 📬 Contact

| | |
|---|---|
| **Lions Email** | hello@lionsaccraubuntu.org |
| **Leos Email** | hello@leosaccraubuntu.org |
| **Location** | Accra, Greater Accra, Ghana |
| **District** | District 418 |

---

## 📄 License

© 2026 Accra Ubuntu Lions Club. All rights reserved. District 418, Ghana.
