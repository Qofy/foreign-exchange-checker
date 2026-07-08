# Path Aliases Setup Guide

This project uses `@/` path aliases for clean, maintainable imports.

## Configuration

Path aliases are configured in:
- `tsconfig.json` — TypeScript paths
- `vite.config.ts` — Vite resolver aliases

## Usage Examples

### ✅ Import Components
```typescript
// Instead of relative paths:
import { FXChecker } from '@/components'
import { Header } from '@/components/Header'
import { Converter } from '@/components/Converter'
```

### ✅ Import Styles
```typescript
// Styles can also use @/
import '@/styles/globals.css'
```

### ✅ Import from Utilities (when added)
```typescript
import { formatCurrency } from '@/utils/formatters'
import type { CurrencyData } from '@/types/currency'
import { useCurrency } from '@/hooks/useCurrency'
```

## Benefits

| Before | After |
|--------|-------|
| `import X from '../../../components/X'` | `import { X } from '@/components'` |
| Easy to get lost in relative paths | Clear root-level imports |
| Hard to refactor (change structure = update all imports) | Safe to move folders (paths stay the same) |

## Alias Breakdown

`@/` maps to your `src/` directory:

```
@ = src/

@/components       → src/components
@/components/X     → src/components/X
@/styles/globals   → src/styles/globals
@/utils/foo        → src/utils/foo
```

## Adding More Aliases (Optional)

To add more aliases, update both files:

**tsconfig.json:**
```json
"paths": {
  "@/*": ["src/*"],
  "@/components/*": ["src/components/*"],
  "@/utils/*": ["src/utils/*"]
}
```

**vite.config.ts:**
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@/components': path.resolve(__dirname, './src/components'),
  },
}
```

## IDE Support

Make sure your IDE recognizes the aliases:
- **VS Code** — Usually auto-detected from `tsconfig.json`
- **WebStorm** — Configuration → Project Settings → TypeScript
- If missing autocomplete, restart your IDE's TypeScript server
