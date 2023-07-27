import { ShareButton } from '@/components/common/ShareButton'
import { MainLayout } from '@/components/layout/MainLayout'
import { MemoList } from '@/components/screen/MemoList'
import { USERS, SCHEDULE } from '@/constant/data'

export default function Home() {
  return (
    <MainLayout>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
          <div className='my-20 flex flex-col items-center justify-center gap-8'>
            <div className='flex w-11/12 items-end gap-4 border-b-2 border-primary'>
              <div className='bg-primary p-2'>
                <p className='whitespace-nowrap font-bold text-white text-xl'>
                  イベント名
                </p>
              </div>
              <p className='break-all text-xl'>{SCHEDULE.name}</p>
              <p className='whitespace-nowrap text-sm'>参加{USERS.length}人</p>
            </div>
            <div className='flex w-11/12 flex-col gap-4'>
              <div className='flex items-end gap-4 border-b-2 border-primary'>
                <div className='bg-primary p-2'>
                  <p className='whitespace-nowrap text-xl font-bold text-white'>備考</p>
                </div>
                <p className='whitespace-pre-wrap break-all text-xl'>{SCHEDULE.memo}</p>
              </div>
              <div className='flex flex-row-reverse'>
                <ShareButton />
              </div>
              <div className='h-40 items-center justify-center rounded-lg bg-primary text-white'>
                スケジュール
              </div>
            </div>
            <div className='flex w-full items-center justify-center'>
              <MemoList users={USERS} />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
