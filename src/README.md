# FX Checker - Source Code Structure

This project follows an **industry-standard, scalable component-based architecture**.

## Directory Structure

```
src/
├── components/           # Reusable React components
│   ├── ChartHeader/      # Chart title and timestamp display
│   ├── ChartStats/       # Chart statistics (Open, Last, Change, % Change)
│   ├── ChartSvg/         # SVG chart visualization
│   ├── Converter/        # Currency converter section
│   ├── FXChecker/        # Main app component
│   ├── Header/           # App header
│   ├── LiveMarketTicker/ # Currency ticker display
│   ├── Tabs/             # Tab navigation
│   ├── TimeRangeSelector/# Time range selector buttons
│   └── index.ts          # Barrel export file
├── styles/               # Global stylesheets
│   └── globals.css       # Global styles and resets
├── App.tsx               # Root app component
├── main.tsx              # React entry point
└── index.css             # (Moved to styles/globals.css)
```

## Component Organization

Each component folder follows this pattern:

```
ComponentName/
├── ComponentName.tsx     # Component logic
├── ComponentName.css     # Component styles (if needed)
└── index.ts              # Named export
```

### Example Import

**Before (nested imports):**
```typescript
import FXChecker from './Component/FXChecker'
```

**After (clean, barrel exports):**
```typescript
import { FXChecker } from './components'
```

## Key Benefits

✅ **Scalability** — Easy to add new components without cluttering the root  
✅ **Maintainability** — Clear separation of concerns  
✅ **Discoverability** — Each component is self-contained  
✅ **Barrel Exports** — Clean import statements via `index.ts` files  
✅ **Modularity** — Components can be easily moved, removed, or reorganized  

## Best Practices

- Keep components small and focused (Single Responsibility Principle)
- Use barrel exports (`index.ts`) for clean imports
- Co-locate component styles with their component
- Place shared styles in `styles/globals.css`
- Consider creating `hooks/`, `utils/`, and `types/` folders as the project grows

## Adding New Components

1. Create a new folder: `src/components/NewComponent/`
2. Add files:
   - `NewComponent.tsx`
   - `NewComponent.css` (if needed)
   - `index.ts` (with named export)
3. Update `src/components/index.ts` with the new export
4. Import anywhere: `import { NewComponent } from './components'`
