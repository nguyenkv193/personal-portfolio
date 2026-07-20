# Personal Portfolio + Admin UI Specification

## 1. Product structure

Public routes:

- `/`
- `/projects`
- `/projects/:slug`
- `/articles`
- `/articles/:slug`

Admin routes:

- `/admin/login`
- `/admin`
- `/admin/profile`
- `/admin/skills`
- `/admin/experience`
- `/admin/projects`
- `/admin/articles`
- `/admin/categories`
- `/admin/tags`
- `/admin/music`
- `/admin/playlists`
- `/admin/messages`
- `/admin/settings`

## 2. Visual direction

- Primary mode: dark
- Full light mode parity
- Base palette: zinc, slate, white, black
- Accent palette: indigo / violet / electric blue
- UI density: spacious, editorial, professional
- Personality: developer-focused, minimal, slightly technical
- Surface treatment: low-contrast borders, soft shadows, subtle blur, restrained gradients
- Radius scale: 10 / 12 / 14
- Icon style: Lucide outline
- Typography:
  - Body/UI: Geist or Inter
  - Code/meta: JetBrains Mono

## 3. Core design tokens

### Dark theme

- Background: `zinc-950`
- Surface 1: `zinc-900`
- Surface 2: `zinc-800/70`
- Surface 3: `slate-900`
- Border: `white/10`
- Muted border: `white/6`
- Text primary: `zinc-50`
- Text secondary: `zinc-300`
- Text muted: `zinc-400`
- Accent: `indigo-400`
- Accent hover: `indigo-300`
- Accent surface: `indigo-500/12`
- Success: `emerald-400`
- Warning: `amber-400`
- Error: `rose-400`

### Light theme

- Background: `zinc-50`
- Surface 1: `white`
- Surface 2: `zinc-100`
- Surface 3: `slate-100`
- Border: `black/8`
- Muted border: `black/5`
- Text primary: `zinc-950`
- Text secondary: `zinc-700`
- Text muted: `zinc-500`
- Accent: `indigo-600`
- Accent hover: `indigo-500`
- Accent surface: `indigo-600/8`

### Effects

- Page grid: 1px neutral line pattern at very low opacity
- Hero radial gradient: indigo/violet blur at 8 to 12 percent opacity
- Shadow sm: `0 1px 2px rgba(0,0,0,.2)`
- Shadow md: `0 8px 24px rgba(0,0,0,.18)`
- Shadow lg: `0 16px 40px rgba(0,0,0,.22)`

## 4. Layout system

- Max content width: 1280px
- Reading width for article detail: 760px
- Admin content width: full fluid with 24px outer padding
- Section spacing desktop: 96 to 128px
- Section spacing mobile: 64 to 80px
- Grid gap desktop: 24px
- Grid gap mobile: 16px

## 5. Public homepage sections

### Sticky header

- Height: 72px default, 60px after scroll
- Backdrop: blurred semi-transparent surface
- Bottom border appears after scroll
- Desktop nav centered, actions right aligned
- Mobile nav in sheet with theme toggle and music quick controls pinned at top

### Hero

- Desktop: 6/6 split
- Left:
  - availability badge
  - primary heading
  - role line
  - short summary
  - CTA row
  - social links
  - technology badges
- Right:
  - layered developer workspace composition
  - main code-editor card
  - terminal card
  - floating tech pills
  - avatar/initial badge
  - subtle typing cursor animation

### About

- Two-column editorial block on desktop
- Four compact stats cards below
- Fields:
  - intro
  - goals
  - current focus
  - location
  - availability

### Skills

- Filter tabs row
- Four category cards or one adaptive grid under filters
- Skills shown as compact badge-items with icon, label, tooltip
- No proficiency bars

### Experience

- Vertical timeline with thin center-left guide line
- Entry types use different subtle marker fills
- Card includes role, company, time range, location, summary, responsibilities, stack, related link

### Projects

- One featured horizontal card above grid
- Filter tabs
- Responsive card grid
- Project detail page includes architecture block, screenshot gallery, challenge/lesson cards

### Articles

- Featured article card
- Search + category filter + latest list
- Listing page with sidebar filters on desktop
- Detail page with sticky table of contents, markdown content, related posts, prev/next nav

### Currently

- Four equal cards:
  - learning
  - building
  - reading
  - listening

### Contact

- Two columns:
  - contact summary cards
  - form card

### Footer

- Four-column desktop layout
- Includes stack note: “Built with Vue, TypeScript, and a lot of coffee.”

## 6. Music player

### Mini-player

- Fixed bottom-right
- 320 to 360px width on desktop
- Artwork, metadata, play button, equalizer, expand button
- Frosted card appearance with subtle shadow

### Expanded player

- Shared layout expansion from mini-player origin
- Desktop: floating dialog panel around 880 to 1040px wide
- Mobile: full-height sheet
- Regions:
  - artwork and ambient gradient
  - playback metadata
  - seek bar
  - transport controls
  - volume
  - queue / lyrics tabs

## 7. Command menu

- Trigger: `Ctrl+K` / `Cmd+K`
- Command groups:
  - navigate
  - projects
  - articles
  - appearance
  - music
  - external links

## 8. Admin layout

- Left collapsible sidebar
- Top header with breadcrumbs, search, notifications, theme toggle, user menu
- Mobile sidebar becomes drawer
- Cards and tables follow same public design tokens with slightly denser spacing

## 9. Admin pages

### Login

- Centered auth card
- Minimal logo block
- Inline validation and alert state

### Dashboard

- KPI cards
- Two charts
- Recent content panels
- Messages panel
- Quick action buttons

### Profile management

- Split editor/preview layout
- File upload surfaces for avatar and CV

### Skills management

- Table view desktop
- Card list mobile
- Drag handle for ordering

### Experience management

- List with status and date columns
- Create/edit sheet or dialog

### Project management

- Table listing
- Full project editor with markdown-capable long-form sections
- Draft, preview, publish actions in sticky top bar

### Article management

- Listing page with filters and bulk actions
- Article editor uses three-column layout on desktop:
  - editor
  - preview
  - settings sidebar

### Category and tag management

- Searchable data table
- Compact add/edit dialogs

### Music management

- Media-focused data table
- Upload + preview flow

### Playlist editor

- Dual-pane picklist + sortable queue
- Total duration summary

### Messages

- Inbox list + detail side panel

### Website settings

- Settings sections:
  - general
  - appearance
  - SEO
  - music player
  - footer

## 10. Reusable component rules

- Buttons: default / secondary / outline / ghost / link / destructive
- Cards: 12px radius, low-contrast border, optional header and footer
- Inputs: 44px min height
- Table rows: hover tint only, no heavy striping
- Tooltips: concise, 280px max width
- Dialog/sheet: strong focus management, close affordance always visible
- Toasts: top-right desktop, top-center mobile
- Skeletons: neutral pulse, no shimmer overload

## 11. Interaction rules

- Transition durations:
  - hover: 150ms
  - panels/dialogs: 220ms
  - layout expansion: 280 to 340ms
- Use motion only for focus, navigation, state change, and hierarchy
- Avoid decorative movement when content is static

## 12. Required UI states

All pages should define:

- loading
- empty
- error
- success
- disabled
- validation
- confirmation
- filtered-empty
- mobile responsive variant

## 13. Screen list for high-fidelity mockups

1. Portfolio homepage
2. Project listing
3. Project detail
4. Article listing
5. Article detail
6. Expanded music player
7. Admin login
8. Admin dashboard
9. Article management
10. Article editor
11. Music management
12. Playlist editor
13. Project management
14. Website settings

## 14. Content placeholders

- Name: Khuất Văn Nguyên
- Role: Software Engineer
- Location: Ho Chi Minh City, Vietnam
- Availability: Open to opportunities
- Email: hello@khuatvannguyen.dev
- Featured stack:
  - Vue.js
  - TypeScript
  - Spring Boot
  - PostgreSQL
- Stats:
  - 12+ projects completed
  - 18+ technologies used
  - 8 articles published
  - 3+ years learning

## 15. Implementation notes for Vue + shadcn-vue

- Public and admin should share one token layer and one primitive component library.
- Keep page-specific compositions in route-level view folders.
- Put filters, cards, editor blocks, timeline items, and media player into reusable feature components.
- Prefer semantic HTML and keyboard-first interactions.
- Treat dark and light mode as equal citizens rather than inverting at the end.
