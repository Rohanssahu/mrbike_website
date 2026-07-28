# services

Data-access layer: API clients, CMS clients, form submission handlers. Nothing
lives here yet — this project has no backend calls until Phase 2 defines what
data the site needs (e.g. a contact form endpoint, a reviews feed).

Convention: one file per external integration, exporting plain async
functions (no classes) that pages/features call directly.
