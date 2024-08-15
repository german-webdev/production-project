import 'app/styles/index.scss';
import type { Decorator } from '@storybook/react';

// Декоратор принимает функцию, возвращающую компонент истории
export const StyleDecorator: Decorator = (Story) => <Story />;
