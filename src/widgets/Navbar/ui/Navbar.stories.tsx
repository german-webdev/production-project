import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const AuthNavbar: Story = {
  args: {}
};

AuthNavbar.decorators = [StoreDecorator({
  user: { authData: {} }
})]
