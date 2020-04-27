# @leafygreen-ui/code

## 3.4.3

### Patch Changes

- 75c0693: Upgrades workspace dependencies
- Updated dependencies [75c0693]
- Updated dependencies [9c34e9f]
  - @leafygreen-ui/icon@5.0.3
  - @leafygreen-ui/syntax@2.6.0
  - @leafygreen-ui/icon-button@5.0.1

## 3.4.2

### Patch Changes

- 5aafd72: IconButton now accepts `aria-label` instead of `ariaLabel`
  When an Icon is a child of IconButton, the Icon's title will be unset unless explicitly set on Icon, and its size will be inherited from IconButton unless its explicitly set.
  Previously, IconButton required that `ariaLabel` exists as a prop to IconButton. Now IconButton is more flexible, and requires that one of `aria-label` or `aria-labelledby` are set.- Updated dependencies [5aafd72]
- Updated dependencies [5aafd72]
  - @leafygreen-ui/icon-button@5.0.0
  - @leafygreen-ui/icon@5.0.2
  - @leafygreen-ui/lib@4.4.1

## 3.4.1

### Patch Changes

- Updated dependencies [4c268a5]
  - @leafygreen-ui/icon@5.0.0
  - @leafygreen-ui/icon-button@4.1.5

## 3.4.0

### Minor Changes

- beccf70: Adds Objective-C language highlight support

### Patch Changes

- Updated dependencies [e1568c6]
- Updated dependencies [beccf70]
  - @leafygreen-ui/icon@4.3.0
  - @leafygreen-ui/syntax@2.5.0
  - @leafygreen-ui/icon-button@4.1.4

## 3.3.0

### Minor Changes

- f2fed7c: Adds copy functionality to Code component

### Patch Changes

- Updated dependencies [f2fed7c]
  - @leafygreen-ui/syntax@2.4.0

## 3.2.0

### Minor Changes

- c117a62: Enables Kotlin language support

### Patch Changes

- Updated dependencies [c117a62]
  - @leafygreen-ui/syntax@2.3.0

## 3.1.0

### Minor Changes

- a0d0d7b: Enables Swift language support

## 3.0.0

### Major Changes

- 464c09d: Introduces SSR compatibility though a change to our build process and files

### Patch Changes

- Updated dependencies [464c09d]
  - @leafygreen-ui/lib@4.0.0
  - @leafygreen-ui/syntax@2.0.0