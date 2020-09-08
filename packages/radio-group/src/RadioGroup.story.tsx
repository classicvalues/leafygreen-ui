import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { css } from '@leafygreen-ui/emotion';
import { uiColors } from '@leafygreen-ui/palette';
import { Radio, RadioGroup, Variant } from '.';

function ControlledRadioGroup() {
  const [activeRadio, setActiveRadio] = useState<string>('test1');

  const changeHandler = (e: React.ChangeEvent) => {
    setActiveRadio((e.target as HTMLInputElement).value);
  };

  const variant = select('variant', Object.values(Variant), Variant.Default);

  return (
    <div>
      <RadioGroup
        size={select('size', ['default', 'small'], 'default')}
        variant={variant}
        onChange={changeHandler}
        value={activeRadio}
        className={css`
          background-color: ${variant === Variant.Default
            ? 'white'
            : uiColors.gray.dark3};
          padding: 20px;
        `}
      >
        <Radio value="test1">
          {text('Radio Content', ' Lorem ipsum dolor sit amet')}
        </Radio>
        <Radio value="test2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Radio>
        <Radio value="test3">
          Duis aute irure dolor in reprehenderit in voluptate
        </Radio>
        <Radio value="test4" disabled checked={true}>
          Excepteur sint occaecat cupidatat non proident
        </Radio>
      </RadioGroup>
    </div>
  );
}

storiesOf('RadioGroup', module)
  .add('Uncontrolled', () => {
    const variant = select('variant', Object.values(Variant), Variant.Default);

    return (
      <RadioGroup
        size={select('size', ['default', 'small'], 'default')}
        name="radio-group-default"
        variant={variant}
        className={css`
          background-color: ${variant === Variant.Default
            ? 'white'
            : uiColors.gray.dark3};
          padding: 20px;
        `}
      >
        <Radio value="1">Radio Input Copy</Radio>
        <Radio value="2">{text('Label text', 'Radio Input Copy')}</Radio>
        <Radio default value="3">
          Radio Input Copy
        </Radio>
        <Radio disabled={boolean('Disabled', true)} value="Selection-4">
          Taj Mahal
        </Radio>
      </RadioGroup>
    );
  })
  .add('Controlled', () => <ControlledRadioGroup />);