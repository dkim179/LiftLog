# LiftLog Coding Style Guide

This document defines the coding standards used throughout the LiftLog project.

The goal is to write code that is easy to understand, easy to maintain, and enjoyable to work on even months later.

---

# General Principles

## Write code for humans first.

Code should be easy to read before it is easy to write.

Always assume that your future self (or another developer) will read this code months later.

---

## One feature at a time.

Every development session should focus on a single feature.

Example:

* Monthly Calendar
* Date Selection
* Workout Entry
* Exercise Library

Avoid implementing multiple unrelated features in a single commit.

---

## Test before commit.

Every feature must be tested locally before committing.

Development cycle:

Design

↓

Implement

↓

Local Test

↓

Code Review

↓

Commit

↓

Push

---

# File Organization

## Components

Components should have a single responsibility.

Example:

MonthlyCalendar

↓

CalendarHeader

↓

CalendarGrid

↓

CalendarCell

Do not create large components that handle multiple responsibilities.

---

## Pages

Each page represents a screen.

Example:

* Home.tsx
* DayDetail.tsx

---

## Utils

Utility functions should contain reusable logic only.

They should never contain UI code.

---

# Naming Convention

Folders

Use lowercase.

Example:

calendar

exercise

layout

common

---

React Components

Use PascalCase.

Example:

MonthlyCalendar.tsx

WorkoutCard.tsx

ExerciseLibrary.tsx

---

Variables

Use meaningful names.

Good

firstDayOfMonth

daysInMonth

currentMonth

Bad

a

b

x

temp

---

Functions

Function names should clearly describe what they do.

Good

generateCalendarDays()

isSameDate()

calculateWorkoutVolume()

Bad

run()

process()

doThing()

---

# Comments

Comments should explain WHY, not WHAT.

Good

// Convert Sunday-first indexing to Monday-first
// because LiftLog calendars always start on Monday.

Bad

// Increment i
i++;

---

Every exported function should include a JSDoc comment.

Example:

/**

* Generates calendar cells for the selected month.
*
* @param year Full year
* @param month Zero-based month
* @returns CalendarDay[]
  */

---

Large functions should be separated using section comments.

Example:

// -------------------------
// Current Month
// -------------------------

---

# Git Workflow

One feature = One commit

Good examples

Implement monthly calendar

Create calendar engine

Add date selection

Implement workout storage

Bad examples

Update

Fix

asdf

123

---

# Project Philosophy

LiftLog is not just a workout tracker.

It is a long-term portfolio project built with clean architecture, maintainable code, and real-world development practices.

Always prioritize readability, maintainability, and simplicity over writing clever code.
