import { User, Available, Schedule } from '@/type/common'

export type ScheduleInputProps = {
  editUser?: User
  schedule: Schedule
  onChange?: (availableDates: Available[] | null) => void
}
