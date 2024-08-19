import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: Object.values(ThemeButton) },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Primary',
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
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'OutlineDark Button',
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];