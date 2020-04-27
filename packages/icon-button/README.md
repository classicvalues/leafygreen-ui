# IconButton

![npm (scoped)](https://img.shields.io/npm/v/@leafygreen-ui/icon-button.svg)

## Installation

### Yarn

```shell
yarn add @leafygreen-ui/icon-button
```

### NPM

```shell
npm install @leafygreen-ui/icon-button
```

## Example

```js
import IconButton from '@leafygreen-ui/icon-button';

<IconButton variant="light" aria-label="Some Menu">
  <Icon glyph="Ellipsis" />
</IconButton>;
```

**Output HTML**

```html
<button aria-disabled="false" class="leafygreen-ui-194rp0y" aria-label="Some Menu>
  <div class="leafygreen-ui-1rvdyoi">
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
      <g
        id="Ellipsis-Copy"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path fill="#89989B"></path>
      </g>
    </svg>
  </div>
</button>
```

## Properties

| Prop        | Type                         | Description                                                                                                       | Default   |
| ----------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |
| `variant`   | `'dark'` or `'light'`        | Sets the style variant of the button.                                                                             | `'light'` |
| `onClick`   | `function`                   | The event handler function for the 'onclick' event. Receives the associated `event` object as the first argument. |           |
| `disabled`  | `boolean`                    | Disables the `<IconButton />`                                                                                     | `false`   |
| `href`      | `string`                     | If a href is supplied, the component renders inside of an `a` tag instead of inside of a `button` tag.            |           |
| `className` | `string`                     | Adds a className to the class attribute on the container element.                                                 |           |
| `children`  | `node`                       | Content rendered inside of the `<IconButton />` component                                                         |           |
| `size`      | `default`, `large`, `xlarge` | Determines the size of the IconButton                                                                             | `default` |
| `active`    | `boolean`                    | Determines whether the `<IconButton />` will appear `active`                                                      | `false`   |

### Special Case: Aria Labels

Either `aria-label` or `aria-labelledby` must be provided a string, or there will be a console error. This is to ensure that screenreaders have a description for what the button does, since the button itself doesn't contain any text.

_Any other properties will be spread on the container element._