import type { Meta, StoryObj } from '@storybook/react'
import format from 'date-fns/format'
import ScheduleInput from './ScheduleInput'
import { SCHEDULE } from '@/constant/data'

const meta: Meta<typeof ScheduleInput> = {
  title: 'screen/ScheduleInput',
  component: ScheduleInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScheduleInput>

export const Default: Story = {
  args: {
    schedule: SCHEDULE,
    onChange: (availableDates) => {
      if (!availableDates) return
      availableDates.forEach((date, index) => {
        console.log(
          index,
          format(date.from, 'yyyy-MM-dd HH:mm'),
          format(date.to, 'yyyy-MM-dd HH:mm'),
        )
      })
    },
  },
}
