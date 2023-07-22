import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'common/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Defualt: Story = {
  args: {
    text: '',
    children: '',
  },
};
