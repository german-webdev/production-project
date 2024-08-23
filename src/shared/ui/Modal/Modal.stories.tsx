import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quisquam numquam fugit tempore illo neque eaque, dolor distinctio voluptas iste reprehenderit vel pariatur omnis alias exercitationem et at repudiandae! Rem.'
  }
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quisquam numquam fugit tempore illo neque eaque, dolor distinctio voluptas iste reprehenderit vel pariatur omnis alias exercitationem et at repudiandae! Rem.'
  }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
