import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'common/TextArea',
  component: TextArea,
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
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Defualt: Story = {
  args: {
    variants: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div className='flex gap-8'>
      <TextArea {...args} variants="primary" />
      <TextArea {...args} variants="secondary" />
    </div>
  ),
}

export const Bordered: Story = {
  args: {
    size: 'md',
    bordered: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <TextArea {...args} variants="primary" />
      <TextArea {...args} variants="secondary" />
    </div>
  ),
}

export const Ghost: Story = {
    args: {
      size: 'md',
      ghost: true,
    },
    render: (args) => (
      <div className='flex gap-8'>
        <TextArea {...args} variants="primary" />
        <TextArea {...args} variants="secondary" />
      </div>
    ),
  }
