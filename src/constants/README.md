# Constants

This folder contains static data and configuration constants for the application.

## Current Constants

### `liveMarket.ts`
Contains live market ticker data for currency pairs.

**Interface:**
```typescript
interface TickerItem {
  id: string
  currencyPair: string
  rate: number
  change: string
  isPositive: boolean
}
```

**Usage:**
```typescript
import { LIVE_MARKET_DATA } from '@/constants'

LIVE_MARKET_DATA.forEach(item => {
  console.log(item.currencyPair) // "USD/JPY"
})
```

## Adding New Constants

1. Create a new file: `newConstant.ts`
2. Define interface and export array:
   ```typescript
   export interface MyItem {
     id: string
     // ... properties
   }
   
   export const MY_DATA: MyItem[] = [...]
   ```
3. Update `index.ts` to export it:
   ```typescript
   export { MY_DATA } from './newConstant'
   export type { MyItem } from './newConstant'
   ```
4. Import via barrel export:
   ```typescript
   import { MY_DATA } from '@/constants'
   ```

## Best Practices

- ✅ Use UPPERCASE_SNAKE_CASE for constant names
- ✅ Always type your data with interfaces
- ✅ Add unique `id` field to each item for React keys
- ✅ Export via `index.ts` for clean imports
- ✅ Keep constants organized by feature (one file per feature)
