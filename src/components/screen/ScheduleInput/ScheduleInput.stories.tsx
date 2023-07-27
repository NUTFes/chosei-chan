import type { Meta, StoryObj } from '@storybook/react'
import ScheduleInput from './ScheduleInput'
import { SCHEDULE, USERS } from '@/constant/data'

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
        // console.log(index, date.from, date.to)
      })
    },
  },
}

export const EditUser: Story = {
  args: {
    schedule: SCHEDULE,
    editUser: USERS[0],
    onChange: (availableDates) => {
      if (!availableDates) return
      availableDates.forEach((date, index) => {
        // console.log(index, date.from, date.to)
      })
    },
  },
}
