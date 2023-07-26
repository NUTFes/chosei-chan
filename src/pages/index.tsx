import { Button, Input } from '@/components/common'
import { TextArea } from '@/components/common/TextArea'
import { MainLayout } from '@/components/layout/MainLayout'
import { Calender } from '@/components/screen'

export default function Home() {
  return (
    <MainLayout>
      <div className='my-10 flex flex-col items-center gap-16 md:my-16'>
        <div className='m-auto flex w-4/5 flex-wrap md:flex-nowrap md:gap-16'>
          <div className='flex flex-col md:w-1/2'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>
                  STEP1
                </p>
                <p className='text-xl font-semibold'>イベント名を入力</p>
              </div>
              <p className='ml-4 text-sm'>※飲み会、会議など</p>
              <Input />
            </div>
            <div className='divider' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>
                  STEP2
                </p>
                <p className='text-xl font-semibold'>メモを入力（任意）</p>
              </div>
              <p className='ml-4 text-sm'>※飲み会、会議など</p>
              <TextArea bordered={true} ghosted={false} />
              <div className='divider md:hidden' />
            </div>
          </div>
          <div className='flex w-full flex-col md:w-1/2'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>
                  STEP3
                </p>
                <p className='text-xl font-semibold'>日付を入力</p>
              </div>
              <p className='ml-4 text-sm'>※候補日時を選択</p>
              <Calender
                onChange={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </div>
          </div>
        </div>
        <Button>調整ちゃんを入力</Button>
      </div>
    </MainLayout>
  )
}
