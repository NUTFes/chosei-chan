import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variants: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['lg', 'md', 'xs', 'sm'],
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Defualt: Story = {
  args: {
    children: 'Button',
    variants: 'primary',
    size: 'md',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
    variants: 'primary',
  },
  render: (args) => (
    <div className='flex gap-8'>
      <Button {...args} size="lg" />
      <Button {...args} size="md" />
      <Button {...args} size="sm" />
      <Button {...args} size="xs" />
    </div>
  ),
}

export const Variants: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },
  render: (args) => (
    <div className='flex gap-8'>
      <Button {...args} variants="primary" />
      <Button {...args} variants="secondary" />
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    size: 'md',
    outlined: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <Button {...args} variants="primary" />
      <Button {...args} variants="secondary" />
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: 'Button',
    size: 'md',
    loading: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <Button {...args} variants="primary" />
      <Button {...args} variants="secondary" />
    </div>
  ),
};

