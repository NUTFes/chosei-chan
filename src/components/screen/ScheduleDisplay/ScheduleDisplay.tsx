import clsx from 'clsx'
import { ScheduleDisplayProps } from './ScheduleDisplay.types'
import { Schedule, User } from '@/type/common'

const sampling = 30
const divNum = 24 * (60 / sampling)
const TimeDiv = 86400 / divNum

interface DateSchedules {
  [time: number]: number
}

function unixToDate(unixtime: number): string {
  const dateTime = new Date(unixtime * 1000)
  return dateTime.toLocaleDateString()
}

function unixToTime(unixtime: number): string {
  const dateTime = new Date(unixtime * 1000)
  return dateTime.toLocaleTimeString()
}

function timeCreate(schedule: Schedule): {
  dates: number[][]
  dateSchedules: DateSchedules
} {
  let dayEnd: number = 0
  const dates: number[][] = []
  let oneDay: number[] = []
  const dateSchedules: DateSchedules = {}
  schedule.dates.map((date) => {
    dayEnd = date + 86400
    for (let i = date; i < dayEnd; i = i + TimeDiv) {
      oneDay.push(i)
      dateSchedules[i] = 0
    }
    dates.push(oneDay)
    oneDay = []
  })

  return { dates, dateSchedules }
}

function countSchedules(
  dateSchedules: DateSchedules,
  users: User[] | undefined,
): DateSchedules {
  if (!users) {
    return dateSchedules
  } else {
    users.map((user) => {
      user.availables?.map((available) => {
        for (let i = available.from; i < available.to; i += TimeDiv) {
          dateSchedules[i]++
        }
      })
    })
    return dateSchedules
  }
}

// TypeScriptのコード
interface ButtonStyle {
  backgroundColor: string
  color: string
  padding: string
  borderRadius: string
}

function getButtonStyle(isPrimary: boolean): ButtonStyle {
  if (isPrimary) {
    return {
      backgroundColor: 'bg-blue-500',
      color: 'text-white',
      padding: 'px-4 py-2',
      borderRadius: 'rounded-md',
    }
  } else {
    return {
      backgroundColor: 'bg-gray-300',
      color: 'text-gray-800',
      padding: 'px-3 py-1',
      borderRadius: 'rounded-sm',
    }
  }
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedule }) => {
  const result = timeCreate(schedule)
  const newDates: number[][] = result.dates
  const dateSchedule: DateSchedules = result.dateSchedules
  const newDateSchedules = countSchedules(dateSchedule, schedule.users)

  return (
    <div className='overflow-x-scroll rounded-lg bg-info-content'>
      <div className='flex justify-center p-1 md:p-2'>
        <div className='flex flex-col'>{}</div>
        {schedule.dates.map((date, index) => (
          <>
            <div className='flex flex-col' key={index}>
              <p className='select-none border bg-secondary-focus p-1 text-xs tracking-wider text-white md:px-5 md:text-base'>
                {unixToDate(date)}
              </p>
              <div className='border'>
                {newDates[index].map((time, index) => (
                  <>
                    <div
                      className={clsx(
                        { 'bg-white': !newDateSchedules[time] },
                        {
                          'bg-accent': newDateSchedules[time],
                        },
                        {
                          'm-0': newDateSchedules[time],
                        },
                        'h-2',
                        'self-start',
                        'md:h-3',
                      )}
                      key={time}
                    >
                      <p
                        className={clsx(
                          { hidden: !(index % 2 == 0) },
                          { 'text-lime-50': newDateSchedules[time] },
                          { 'text-zinc-300': !newDateSchedules[time] },
                          'text-xs',
                          'select-none',
                          'align-top',
                        )}
                      >
                        {unixToTime(time).slice(0, -3)}
                      </p>
                    </div>
                    <hr className={clsx({ hidden: index % 2 == 0 })}></hr>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default ScheduleDisplay
