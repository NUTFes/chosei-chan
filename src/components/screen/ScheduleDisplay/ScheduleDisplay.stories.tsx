import type { Meta, StoryObj } from '@storybook/react'
import ScheduleDisplay from './ScheduleDisplay'
import { SCHEDULE } from '@/constant/data'

const meta: Meta<typeof ScheduleDisplay> = {
  title: 'screen/ScheduleDisplay',
  component: ScheduleDisplay,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScheduleDisplay>

export const Defualt: Story = {
  args: {
    schedule: SCHEDULE,
  },
}
