import type {Meta, StoryObj} from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'common/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Defualt: Story = {
  args: {
    children: 'Header',
    variants: 'primary',
    size: 'md',
  },
};
