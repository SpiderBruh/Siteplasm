# Design

## Visual Theme
**Premium Industrial Brutalism**
A high-authority, print-editorial aesthetic focused on architectural structure, raw grid lines, and high-contrast clinical precision.

## Color Palette (OKLCH)
- **Base (Background)**: `oklch(98% 0.005 60)` (#FAFAF9) — A warm, matte off-white that feels like premium archival paper.
- **Ink (Text)**: `oklch(20% 0.01 60)` (#1C1917) — A deep carbon black for high-impact typography.
- **Accent (Gold)**: `oklch(65% 0.16 85)` (#CA8A04) — An authoritative gold used for strategic emphasis and ROI signals.
- **Border**: `oklch(85% 0.005 60)` (#E7E5E4) — Sharp 1px structural grid lines.
- **Surface**: `oklch(95% 0.005 60)` (#F5F5F4) — Subtle compartmentalization for bento sections.

## Typography
- **Headlines**: `Plus Jakarta Sans` (Bold, Uppercase, Tight tracking) — For architectural authority.
- **Body**: `Plus Jakarta Sans` (Medium/Bold, 1.15 line-height) — For direct, clinical communication.
- **Mono**: `JetBrains Mono` (Bold, Uppercase, 10px) — For structural metadata and technical specs.

## Layout & Spacing
- **Grid**: Strict 1px border compartmentalization. No card shadows.
- **Rhythm**: Asymmetric 12-column grid with generous whitespace (96px - 192px section spacing).
- **Asymmetry**: Left-heavy headlines with right-aligned supporting text to avoid generic "centered" looks.

## Components
- **Interactive**: Sharp edges (`rounded-none`). High-contrast focus states.
- **Buttons**: Thick 1px borders, bold uppercase typography, kinetic background-color swap on hover.
- **Sections**: Clearly defined by 1px horizontal and vertical dividers.

## Motion
- **Entry**: Subtle "slide-up" reveals (Framer Motion) with `ease-out-expo`.
- **Transitions**: Zero-friction navigation, fast response times to signal "velocity."
- **Physics**: Rigid and structural. No bounce, no elasticity.

## Depth & Elevation
- **Elevation**: Completely flat. No shadows. Depth is achieved through border layering and background tints.
- **Z-Index**: Minimal. Nav is fixed; content scrolls cleanly behind structural borders.
