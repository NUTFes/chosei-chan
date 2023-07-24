import { MainLayout } from '@/components/layout/MainLayout'
import { MemoList } from '@/components/screen/MemoList'
import { USERS, SCHEDULE } from '@/constant/data'

export default function Home() {
  return (
    <MainLayout>
      <div className='m-auto mt-20 w-4/5 md:gap-4 md:grid'>
        <div className='col-span-2 md:ml-28 gap-4'>
          <div className='gap-4 underline underline-offset-8'>
            <p className='my-auto'>
              <span className='text-xl font-semibold'>イベント名　</span>
              <span className='text-xl font-semibold'>{SCHEDULE.name}</span>
              <span className='text-xs font-semibold'>参加者数{USERS.length}人</span>
            </p>
          </div>
        </div>
        <div className='col-span-2 md:ml-28 flex'>
          <p className='text-xl font-semibold underline underline-offset-8'>備考　</p>
          <p className='text-xl font-semibold underline underline-offset-8 whitespace-pre-wrap'>
            {SCHEDULE.memo}
          </p>
          <div className='col-span-1 md:col-span-2 text-xs row-span-3 m-2 md:m-auto h-12 w-12 rounded-full bg-accent'>
            シェアor入力遷移ボタン
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 row-span-3 m-auto h-48 w-1/2 rounded-lg bg-accent'>
          スケジュール
        </div>
        <div className='col-span-1 md:col-span-2 md:row-span-3 flex justify-center items-center'>
          <MemoList users={USERS} />
        </div>
      </div>
    </MainLayout>
  )
}
