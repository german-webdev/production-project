import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { fn } from '@storybook/test';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']

} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { onSuccess: fn() }
};

Primary.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123'
  }
})];

export const WithError: Story = {
  args: { onSuccess: fn() }
};

WithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin123',
    password: '123',
    error: 'Вы ввели неверный логин или пароль'
  }
})];

export const Loading: Story = {
  args: { onSuccess: fn() }
};

Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true }
})];
