
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
