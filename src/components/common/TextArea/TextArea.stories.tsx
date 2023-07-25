import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'common/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    ghosted: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <div className='flex gap-8'>
      <TextArea {...args} />
      <TextArea {...args} />
    </div>
  ),
}

export const Ghosted: Story = {
  args: {
    ghosted: true,
  },
  render: (args) => (
    <div className='flex gap-8 bg-primary'>
      <TextArea className='textarea-primary' {...args} />
      <TextArea className='textarea-secondry' {...args} />
    </div>
  ),
}
