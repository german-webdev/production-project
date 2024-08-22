import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: Object.values(ButtonTheme) }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: 'Primary'
  }
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'Clear Button'
  }
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Outline Button'
  }
};

export const OutlineSizeM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Outline Button',
    size: ButtonSize.M
  }
};

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Outline Button',
    size: ButtonSize.L
  }
};

export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Outline Button',
    size: ButtonSize.XL
  }
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'OutlineDark Button'
  }
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'OutlineDark Button'
  }
};

export const BackgroundInvertedTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'OutlineDark Button'
  }
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true
  }
};

export const SquareSizeM: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.M
  }
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.L
  }
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.XL
  }
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
