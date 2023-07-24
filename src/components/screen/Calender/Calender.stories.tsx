import type { Meta, StoryObj } from '@storybook/react'
import Calender from './Calender'

const meta: Meta<typeof Calender> = {
  title: 'screen/Calender',
  component: Calender,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calender>

export const Default: Story = {
  args: {
    onChange: (selectedDates: number[]) => {
      alert(selectedDates)
    },
  },
}
