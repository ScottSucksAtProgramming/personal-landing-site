---
title: Autodoc
kind: ems
summary: Mac app that fills the repetitive fields of an ESO patient care report in one click, while the medic still reviews and signs every chart.
stack: TypeScript, Electron, macOS Keychain and 1Password
status: beta, in daily use by its author
order: 2
---

Charting eats a big part of every shift, and much of it is the same fields filled the same way on almost every call: crew, run type, response info, call times, disposition. Autodoc opens ESO in its own window with a control panel beside it and fills those fields with one click. The medic still reviews, signs and submits every chart in ESO.

**What it does**

- Saves crew profiles and applies them to new charts automatically.
- One-click quick actions for run type, cancelled calls, 911 response info, scene, disposition, transport and call times.
- Bundles: named sets of values you build once, apply to any chart, share as files and undo.
- Presets for patient history, medications, allergies, vitals details, treatments and assessment findings.
- A pre-submit checklist that confirms the chart is ready without ever pressing Submit.

**Built to fail safely**

ESO's forms differ by agency and change without notice, so Autodoc learns each agency's form first. A one-time discovery step, run only on a chart named Test Chart, maps every field and option into an agency form map. Before filling a chart, Autodoc checks each value against that map and against what ESO shows right now.

- It skips a field ESO no longer shows, an option it no longer offers, or a field that isn't unlocked yet, and says why.
- It never picks a "close enough" option, never overwrites a different value without asking, and never writes to a submitted chart.
- After every fill it confirms with ESO that the values saved, and reports what saved, what didn't and what it skipped.
- When ESO's form changes, a new discovery waits for review. Accepting it keeps the old map as a backup, and one click undoes it.
- Staff lists stay out of the form map.

Autodoc is in beta and used on real calls by its author. It's an independent tool, not affiliated with or endorsed by ESO.
