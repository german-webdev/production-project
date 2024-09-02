import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    content: 'I`m content'
  }
};

export const Error: Story = {
  args: {
    title: 'Title',
    content: 'I`m content',
    theme: TextTheme.ERROR
  }
};

export const OnlyTitle: Story = {
  args: {
    title: 'Only Title'
  }
};

export const OnlyContent: Story = {
  args: {
    content: 'Only Content'
  }
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    content: 'I`m content'
  }
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: 'Only Title'
  }
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyContentDark: Story = {
  args: {
    content: 'Only Content'
  }
};

OnlyContentDark.decorators = [ThemeDecorator(Theme.DARK)];
