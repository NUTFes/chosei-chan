import { ShareButton } from '@/components/common/ShareButton'
import { MainLayout } from '@/components/layout/MainLayout'
import { MemoList } from '@/components/screen/MemoList'
import { getSchedule } from '@/repositories'
import { Schedule } from '@/type/common'

interface Props {
  schedule: Schedule
}

export async function getServerSideProps() {
  const id = 'B1VGj0TktsN1TlvNsM7H'
  const scheduleRes = await getSchedule(id)
  return {
    props: {
      schedule: scheduleRes,
    },
  }
}

export default function Home(props: Props) {
  const schedule = props.schedule
  return (
    <MainLayout>
      <div className='flex min-h-screen flex-col'>
        <main className='grow'>
          <div className='my-20 flex flex-col items-center justify-center gap-8'>
            <div className='flex w-11/12 items-end gap-4 border-b-2 border-primary'>
              <div className='bg-primary p-2'>
                <p className='whitespace-nowrap text-xl font-bold text-white'>
                  イベント名
                </p>
              </div>
              <p className='break-all text-xl'>{schedule.name}</p>
              <p className='whitespace-nowrap text-sm'>参加{schedule.users.length}人</p>
            </div>
            <div className='flex w-11/12 flex-col gap-4'>
              <div className='flex items-end gap-4 border-b-2 border-primary'>
                <div className='bg-primary p-2'>
                  <p className='whitespace-nowrap text-xl font-bold text-white'>備考</p>
                </div>
                <p className='whitespace-pre-wrap break-all text-xl'>{schedule.memo}</p>
              </div>
              <div className='flex flex-row-reverse'>
                <ShareButton />
              </div>
              <div className='h-40 items-center justify-center rounded-lg bg-primary text-white'>
                スケジュール
              </div>
            </div>
            <div className='flex w-full items-center justify-center'>
              <MemoList users={schedule.users} />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
