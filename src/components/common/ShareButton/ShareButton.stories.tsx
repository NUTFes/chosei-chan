import type { Meta, StoryObj } from '@storybook/react'
import ShareButton from './ShareButton'

const meta: Meta<typeof ShareButton> = {
  title: 'common/ShareButton',
  component: ShareButton,
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
}

export default meta
type Story = StoryObj<typeof ShareButton>

export const Defualt: Story = {
  args: {
    children: 'ShareButton',
    variants: 'primary',
    size: 'md',
  },
}

export const Sizes: Story = {
  args: {
    children: 'ShareButton',
    variants: 'primary',
  },
  render: (args) => (
    <div className='flex gap-8'>
      <ShareButton {...args} size='lg' />
      <ShareButton {...args} size='md' />
      <ShareButton {...args} size='sm' />
      <ShareButton {...args} size='xs' />
    </div>
  ),
}

export const Variants: Story = {
  args: {
    children: 'ShareButton',
    size: 'md',
  },
  render: (args) => (
    <div className='flex gap-8'>
      <ShareButton {...args} variants='primary' />
      <ShareButton {...args} variants='secondary' />
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    children: 'ShareButton',
    size: 'md',
    outlined: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <ShareButton {...args} variants='primary' />
      <ShareButton {...args} variants='secondary' />
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: 'ShareButton',
    size: 'md',
    loading: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <ShareButton {...args} variants='primary' />
      <ShareButton {...args} variants='secondary' />
    </div>
  ),
}
