import { ShareButton } from '@/components/common/ShareButton'
import { MainLayout } from '@/components/layout/MainLayout'
import { MemoList } from '@/components/screen/MemoList'
import { USERS, SCHEDULE } from '@/constant/data'

export default function Home() {
  return (
    <MainLayout>
      <div className='mx-auto mt-20 flex w-4/5 flex-col items-center gap-8'>
        <div className='flex items-center gap-4 border-b-2 border-primary col-span-2 ml-6 md:ml-28'>
          <div className='bg-primary p-2'>
            <p className='text-sm md:text-xl font-bold text-white whitespace-nowrap'>
              イベント名
            </p>
          </div>
          <p className='text-sm md:text-xl'>{SCHEDULE.name}</p>
          <p className='ml-auto text-sm whitespace-nowrap'>参加{USERS.length}人</p>
        </div>
        <div className='col-span-2 ml-6 flex-col md:ml-28 '>
          <p className='text-sm font-semibold md:text-xl'>備考</p>
          <p className='whitespace-pre-wrap text-sm font-semibold md:text-xl underline underline-offset-4'>
            {SCHEDULE.memo}
          </p>
          <div className='my-6 w-full gap-4'>
            <div className='flex flex-row-reverse'>
              <ShareButton />
            </div>
            <div className='h-40 w-full items-center justify-center rounded-lg bg-primary text-white'>
              スケジュール
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>
          <MemoList users={USERS} />
        </div>
      </div>
    </MainLayout>
  )
}
