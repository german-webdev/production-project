import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import '../../../../src/app/styles/index.scss';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: Object.values(ThemeButton),
      },
      defaultValue: ThemeButton.CLEAR,
    },
  },
  args: {
    onClick: () => console.log('Button clicked'),
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Clear Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Outline Button',
    className: ""
  },
};
