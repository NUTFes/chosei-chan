import { ScheduleDisplayProps } from './ScheduleDisplay.types'

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedule }) => {
  return (
    <div className='w-2/3 gap-10 rounded-lg bg-white p-8'>
      <div className='chat chat-start gap-4'>
        {schedule.dates.map((date) => (
          <>
            <p className='ml-4 rounded-2xl bg-primary p-3 text-lg text-white'>{date}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default ScheduleDisplay
