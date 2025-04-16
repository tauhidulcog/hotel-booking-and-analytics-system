## 🏨 **Feature List for Hotel Booking & Analytics System**

---

### 1. **Authentication & Authorization**
- **Login screen** with JWT authentication
- Role-based access (Admin / Staff)
- AuthGuard for protected routes

✅ *Covers: API interaction, state (Elf), route guards, local storage, error handling*

---

### 2. **User Management**
- List users (`p-table` with pagination/filtering)
- Add/Edit/Delete user in modal (`EventEmitter`, forms)
- Assign roles to users

✅ *Covers: PrimeNG, CRUD, reactive forms, parent-child, EventEmitter, Elf state*

---

### 3. **Hotel Room Management**
- List of rooms (room type, availability, price)
- Add/Edit/Delete room
- Room status toggle (available/booked)

✅ *Covers: CRUD, Lodash (filter/sort), p-table, conditional rendering, BehaviorSubject*

---

### 4. **Booking System**
- Booking form (select customer, room, date range)
- Booking history by user or room
- Cancel/reschedule booking with notes

✅ *Covers: `switchMap`, `concatMap`, `map`, `date-fns`, ng-container, ng-template, reactive forms*

---

### 5. **Booking Calendar View (Optional Stretch Feature)**
- Show bookings visually by date/room (like a scheduler)

✅ *Covers: UI complexity, dynamic rendering, reusable UI, `ng-template`*

---

### 6. **Analytics Dashboard**
- Daily/weekly/monthly revenue
- Occupancy rate
- Total bookings vs cancellations
- Room type popularity

✅ *Covers: Chart.js, ApexCharts, map/mergeMap, ng-container, data aggregation*

---

### 7. **PDF Invoicing**
- Generate invoice for any booking
- Includes guest info, room details, price, dates, tax
- Download as PDF

✅ *Covers: pdfmake, `firstValueFrom`, dynamic data rendering, button actions*

---

### 8. **Global Error Handling & UX Enhancements**
- API error handling with UI toaster
- Loading states, skeleton loaders
- Form validation messages
- Empty state visuals

✅ *Covers: Angular interceptors, PrimeNG toast, skeletons, catchError, UX polish*

---

### 9. **Testing & Debugging**
- Unit tests for services and core components (using Jest)
- Component tests with mocks
- DevTools usage for profiling

✅ *Covers: Jest, Karma, mocking, Angular DevTools*

---

### 10. **CI/CD & Automation**
- GitHub Actions for:
  - Linting
  - Unit testing
  - Build & deploy (static site)
- PR checks with status

✅ *Covers: CI/CD pipelines, frontend deployment automation*

---

### 11. **Performance Optimization**
- Lazy loading modules
- `trackBy`, `OnPush` change detection
- Code splitting
- Lighthouse audits

✅ *Covers: Angular optimization, perf tools, OnPush strategy*

---

### 12. **Documentation & Summary View**
- Architecture diagram (Elf store, routing, API flow)
- Summary dashboard:
  - No. of users
  - Active bookings
  - Hotel occupancy status

✅ *Covers: Component integration, state flow, data sync, reporting*

---

## ✅ **Recap: What This Covers**

| Area | Covered by |
|------|------------|
| Angular Concepts | All features |
| RxJS Operators | Booking, Dashboard, Filters |
| State (Elf) | Auth, User, Room, Booking |
| PrimeNG | Tables, Forms, Pagination, Dialogs |
| Charts & PDF | Dashboard & Invoice |
| Testing | Booking/User modules |
| CI/CD | GitHub Actions |
| UX & Accessibility | Toast, Error, Skeletons |
| Performance | Lazy Loading, Optimization |

---

## ✅ **Angular Core Concepts**
### 1. **Component Communication**
- **`@Input()` / `@Output()` + `EventEmitter`**
  - Used for child-to-parent communication (`emit()` events like `(submitted)` or `(dialogClosed)`)

- **Parent-child relationship**
  - You’re using nested, reusable components (e.g. steps in `user-create`, dialogs, charts)
  - Learn how `@ViewChild` is used to access child components

### 2. **Templates & Structure**
- **`ng-template` / `ng-container`**
  - For reusable template blocks (skeleton loaders, tooltip templates)
  - `ng-container` helps group logic without adding extra DOM
- **Structural Directives**
  - `*ngIf`, `*ngFor`, `*ngSwitch`
  - Learn how templates dynamically change based on component logic

### 3. **Dynamic Component Behavior**
- **Conditional rendering**
  - Showing tabs, dialog visibility (`*ngIf="showDialog"`)
  - `[(visible)]`, `[hidden]` used to manage display states
- **Dynamic forms**
  - Reactive forms with multiple steps and validators
  - `FormArray` and `FormGroup` (used in `user-hotel-step.component.ts`)

---

## 📡 **RxJS & Reactive Programming**
This project is **heavily RxJS-based**, and you should focus on:

### 4. **Core Operators**
- `switchMap`, `concatMap`, `map`, `tap`, `filter`, `catchError`
- `forkJoin` for parallel requests
- Debouncing and managing side effects (`Subject`, `takeUntilDestroyed`)

### 5. **Subjects as Triggers**
- Used for emitting events internally (`loadHotels$`, `filterChange$`)
- Learn **when to use `Subject` vs `BehaviorSubject`** vs `ReplaySubject`

### 6. **Unsubscribing Safely**
- `takeUntilDestroyed()` is used throughout
- Prevent memory leaks by understanding subscription lifecycles

---

## 💼 **Forms and Validation**
### 7. **Reactive Forms**
- Dynamic form groups and arrays (`FormArray`, `FormBuilder`)
- Custom validators (`minArrayLength`)
- Conditional validation (e.g., disabling password on update)

---

## 📊 **UI Components (PrimeNG & Custom)**
### 8. **PrimeNG Components**
- `p-treeTable`, `p-table`, `p-dialog`, `p-tabView`, `p-steps`
- Learn how to:
  - Bind data (`[value]`)
  - Emit events (`(onNodeExpand)`, `(onSelectionChange)`)
  - Use `ng-template` with these components

### 9. **Custom Component Interactions**
- Date pickers, charts, modals created as reusable components
- Learn how inputs and outputs are wired between them

---

## 📦 **Architecture Patterns**
### 10. **Repository Pattern**
- `UserRepository`, `RoleRepository`, etc. act as state managers
- Similar to lightweight state management (like Elf or NgRx)

### 11. **Service Layer**
- `mixService`, `domainService` wrap API logic
- `documentService` for handling export features

---

Absolutely — you've already built a pretty sophisticated Angular app with state management, forms, and dynamic UI. Based on your current project, here's a tailored list of **Angular topics** you should focus on next, from fundamentals to advanced best practices:

---

## ✅ **1. Component & Template Mastery**

| Topic | Why it matters |
|-------|----------------|
| **@Input / @Output** | You’re using them well in step components — go deeper into binding patterns |
| **Content Projection (`<ng-content>`)** | Useful for designing reusable wrappers or dialog content |
| **Dynamic Components (`ViewContainerRef`, `ComponentFactoryResolver`)** | Helpful for modals or plugin-based UIs |
| **Directives (`*ngIf`, `*ngFor`, custom)** | You’re already doing great — try building a custom structural directive |

---

## 📦 **2. Dependency Injection (DI)**

| Topic | Why it matters |
|-------|----------------|
| **DI Hierarchy** | Understand `providedIn`, service scope, and when to inject at component level |
| **Token-based injection (`InjectionToken`)** | Useful for dynamic configs or multi-provider scenarios |
| **Optional & Self decorators** | Handle edge cases in complex modules |

---

## 💡 **3. Forms (Reactive Forms)**

You're doing a great job with `FormGroup`, `FormControl`, and `FormArray`. Here’s what to expand on:

| Topic | Why it matters |
|-------|----------------|
| **Custom Validators (Sync/Async)** | Improve user validation experience |
| **Dynamic Form Arrays** | You’re already using them in hotel steps — go deeper into reusable patterns |
| **FormBuilder + strong typing** | Your forms are almost fully typed — polish that up with better interfaces |
| **Cross-field validation** | For scenarios like password confirmation, date range validation |

---

## 🧭 **4. Router & Navigation**

You use navigation for detail routing. Consider:

| Topic | Why it matters |
|-------|----------------|
| **Route Guards (`CanActivate`, `CanDeactivate`)** | For auth, unsaved changes, etc. |
| **Lazy Loading Modules** | Boost performance in large apps |
| **Route Resolvers** | Preload data before component loads |
| **Query Params & State Navigation** | Improve user experience with shareable URLs |

---

## 🧩 **5. Angular Modules (NgModules vs Standalone)**

| Topic | Why it matters |
|-------|----------------|
| **Modular Architecture** | Split features into domain-specific modules (`UserModule`, `ChannelModule`) |
| **SharedModule best practices** | For common components, pipes, and directives |
| **Standalone Components** *(Angular 15+)* | You can try transitioning to newer style in future projects |

---

## 🛠️ **6. Performance Optimization**

| Topic | Why it matters |
|-------|----------------|
| **ChangeDetectionStrategy.OnPush** | Reduces re-renders, great for performance |
| **TrackBy in *ngFor** | Prevents DOM redraws |
| **Signal APIs** *(Angular 16+)* | Optional now, but good to explore for future-proofing |
| **Zone-less Angular (RxAngular)** | Explore only if you need absolute performance control |

---

## 🧪 **7. Testing**

| Topic | Why it matters |
|-------|----------------|
| **Unit Testing Components** | Start with testing key forms and UI logic |
| **Service & Store Testing** | Especially your repositories and API logic |
| **TestBed & Mock Providers** | Essential for isolated testing |
| **Component Harnesses (CDK)** | For reusable and maintainable UI tests |

---

## 📋 Learning Summary

| Level | Topic | Description |
|-------|-------|-------------|
| 🔰 Basic | Components, DI, Template bindings | Foundation of all Angular apps |
| 🧱 Intermediate | Reactive Forms, Routing, Lazy Loading | App architecture and user interaction |
| 🧠 Advanced | Change Detection, Performance, Testing | Maintainability & scalability |
| 🚀 Pro | Standalone APIs, Signals, Custom Renderers | For cutting-edge or complex systems |

---

# RxJs
## Unique RxJS Operators and Types from Import Statements:

- **Creation Operators:**- `of`- `from` - `throwError` - `EMPTY`
- **Transformation Operators:**- `map` - `switchMap` - `mergeMap` - `concatMap`
- **Filtering Operators:**- `filter` - `debounceTime` - `distinctUntilChanged` - `take` - `defaultIfEmpty`
- **Error Handling:**- `catchError` - `finalize`
- **Utility Operators:**- `tap` - `forkJoin`
- **Types and Subjects:**- `Observable` - `Subject` - `BehaviorSubject` - `Subscription`
- **Conversion Functions:**- `firstValueFrom` - `lastValueFrom`

## ✅ **1. Core RxJS Operators**
You’re already using many of these. Deep understanding will help avoid subtle bugs and improve readability.

| Operator        | Why it matters in your project |
|----------------|-------------------------------|
| `**tap**`      | For side effects like setting loading, triggering filters |
| `**map**`      | Transform API responses (e.g. `map(res => res.items)`) |
| `**filter**`   | Guard logic (e.g. only act when params are complete) |
| `**catchError**` | Gracefully handle failed API calls |
| `**of**`       | Emit fallback or mock values on error |
| `**takeUntilDestroyed**` | Auto-clean subscriptions in components (used perfectly by you) |

---

## 🔁 **2. Higher-Order Mapping Operators**
You use these for sequential API handling. Understanding their differences is crucial.

| Operator        | Used for... | Learn when to prefer |
|----------------|-------------|-----------------------|
| `**switchMap**` | Cancel previous request, use new one (good for filters, tabs) |
| `**concatMap**` | Queue API calls one after the other (e.g. load chart then table) |
| `**mergeMap**`  | Run all at once (used less here, useful for parallel calls) |
| `**forkJoin**`  | Run multiple APIs in parallel and wait for all to finish |

---

## 🔀 **3. Subject Types**
You’re using `Subject`, but knowing more helps structure complex workflows.

| Type            | Use case |
|----------------|----------|
| `Subject`       | Emit manual triggers (like your `filterChange$`, `exportPdf$`) |
| `BehaviorSubject` | Store + emit last known value — useful for shared filters |
| `ReplaySubject` | Replays previous values to new subscribers |
| `AsyncSubject`  | Emits last value upon completion — niche use |

---

## 🧱 **4. Stream Composition**
For building reactive UIs and composing derived state.

| Concept            | Use case |
|--------------------|----------|
| `combineLatest`    | Combine multiple streams like filters + dropdown data |
| `withLatestFrom`   | Triggered by one stream, but include latest from another |
| `debounceTime`     | Debounce user input (search box, filters) |
| `distinctUntilChanged` | Avoid redundant triggers |
| `scan`             | Accumulate or aggregate data over time (like totals, logs) |

---

## 🧹 **5. Lifecycle & Cleanup**
You use `takeUntilDestroyed()` well, but also know:

| Technique          | Why it helps |
|--------------------|-------------|
| `take(n)`          | Limit emissions, useful for one-time fetches |
| `first()` / `last()` | Useful in special condition-driven workflows |
| `finalize()`       | Run cleanup logic like hiding spinners |
| `unsubscribe()` manually | Rarely needed now, but useful for debugging custom streams |

---

## 🧪 **6. Bonus Topics for Large Apps**
If you build even more complex UIs or workflows:

- **RxJS Schedulers** (`observeOn`, `asyncScheduler`) for performance tweaks
- **Custom Operators** (write your own logic as pipeable operators)
- **Marble Testing** for RxJS streams (test observable logic)

---

## Learning Path Summary

| Level | Topic | Description |
|-------|-------|-------------|
| 🔰 Basic | `tap`, `map`, `filter`, `Subject` | Building block operators |
| 🧱 Intermediate | `switchMap`, `concatMap`, `forkJoin`, `catchError` | Handling API streams |
| 🔁 Advanced | `combineLatest`, `withLatestFrom`, `debounceTime` | Reactive compositions |
| 🧠 Expert | `BehaviorSubject`, custom operators, testing | For reusable, tested logic |

---



# @ngneat/elf store management

## ✅ **1. Core Concepts**
These are essential building blocks.

- **`createStore()`**
  - How to create named stores.
  - When to use one store per entity vs feature-level stores.

- **`withProps()`**
  - Storing non-entity, custom state (`current`, flags, UI toggles, etc.).
  - Structuring typed custom properties.

- **`update()` and `getValue()`**
  - Updating the store manually.
  - Reading the current value synchronously for logic or fallback.

---

## 📦 **2. Entity Management with `@ngneat/elf-entities`**
Entities are the heart of Elf — you’re using this already.

- **`withEntities()`**
  - Why and when to use entity stores.
  - Default `idKey` vs custom key handling.

- **CRUD methods**:
  - `addEntities`
  - `upsertEntities`
  - `updateEntities`
  - `deleteEntities`
  - `setEntities`
  - `selectAllEntities`, `selectEntity`, `selectMany`, `selectEntitiesCount`

- **Entity References (`entitiesPropsFactory`)**
  - For managing multiple collections inside one store.
  - Use case: paginated view + search results in same store.

---

## 🔄 **3. Pagination Support**
You’re already using `@ngneat/elf-pagination`. Here’s what to deepen:

- **`withPagination()`**
  - Understanding how pagination data (pages, total, currentPage) is managed.
- **`setPage()`, `setCurrentPage()`**
  - Manual control over active pages.
- **`skipWhilePageExists()`**
  - Avoid redundant API calls if data is cached.
- **Pagination Selectors**
  - `selectPaginationData`
  - `selectCurrentPageEntities`

---

## 🔐 **4. State Persistence with `@ngneat/elf-persist-state`**
This is very useful for filters, UI state, and login persistence.

- **Strategies**:
  - `localStorageStrategy` vs `sessionStorageStrategy`
- **`persistState()`**
  - How to integrate it with your store.
- **Custom serialization**
  - How to persist only certain parts of the state.

---

## 🧠 **5. Selectors & Composition**
For derived state and performance optimization:

- **`select()`**
  - Create memoized selectors from the store.
- **Chaining selectors**
  - Derive values based on multiple props/entities.
- **Combining selectors**
  - Use `combineLatest` or write custom derived selectors.

---

## 🧰 **6. Advanced Patterns**
This is where Elf shines for large apps:

- **Generic Repository Pattern** (you’re already using it!)
  - Extendable architecture for all resources.
- **Entity Grouping or Multistore**
  - Managing complex relations like:
    - Brands → Hotels → Chains
- **Store Facades / Repositories**
  - Wrapping stores in services for abstraction (you’re doing this well!)
- **Testing Elf stores**
  - Unit testing actions, selectors, and side effects (if used).

---

## 🛠️ **7. DevTools & Debugging**
- **@ngneat/elf-devtools**
  - Install Chrome DevTools extension and use `connectElfDevTools()` in dev mode.

---

## Learning Path Summary

| Level | Topic | Description |
|-------|-------|-------------|
| 🔰 Basic | `createStore`, `withProps`, `withEntities` | Create and structure state |
| 🧱 Intermediate | CRUD entity ops, pagination, selectors | Manage collections and paginated data |
| 🧠 Advanced | entityRefs, persistState, generic repos | Abstraction, persistence, advanced modeling |
| 🧪 Testing & Tools | devtools, unit tests, facades | Debugging and maintainability |

---

