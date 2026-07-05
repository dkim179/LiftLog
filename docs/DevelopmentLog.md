# LiftLog Development Log

---

# Issue #001

## Title

Project Setup

## Goal

Initialize the LiftLog project with React, TypeScript, and Vite.

## Result

✅ Completed

## Concepts Learned

- Vite
- React project structure
- Git workflow

# Issue #002

## Title

Project Folder Structure

## Goal

Create a scalable folder structure for the project.

## Result

✅ Completed

## Concepts Learned

- Separation of Concerns
- Feature-based architecture

# Issue #003

## Title

Refactor Calendar Types

## Goal

Move CalendarDay type into the types folder.

## Result

✅ Completed

## Concepts Learned

- import type
- Type-only imports
- Dependency direction

# Issue #004

## Title

Create Calendar Components

## Goal

Create

- CalendarCell
- CalendarGrid
- MonthlyCalendar

## Result

✅ Completed

## Concepts Learned

- Props
- Presentational Components
- Component Composition
- Single Source of Truth

# Issue #005

## Title

Build Monthly Calendar Data Flow

## Goal

Connect the calendar components and establish the data flow for the monthly calendar.

## Requirements

- Create MonthlyCalendar component.
- Manage the current month with React state.
- Generate calendar days.
- Pass calendar data to CalendarGrid.
- Render CalendarCell components.

## Files

- src/pages/Home.tsx
- src/components/calendar/MonthlyCalendar.tsx
- src/components/calendar/CalendarGrid.tsx
- src/components/calendar/CalendarCell.tsx

## Status

✅ Completed

## Concepts Learned

- React State
- Derived State
- Component Composition
- Data Flow
- Single Source of Truth

# Issue #006

## Title

Render Monthly Calendar UI

## Goal

Display the monthly calendar in a proper calendar layout.

## Requirements

- Show current month title.
- Show weekday headers.
- Display calendar cells in a 7-column grid.
- Improve spacing and alignment.
- Do not implement interactions yet.

## Files

- src/components/calendar/MonthlyCalendar.tsx
- src/components/calendar/CalendarGrid.tsx
- src/styles/calendar.css

## Status

🟡 In Progress

## Concepts

- CSS Grid
- Layout vs Presentation
- Responsive Design