import { Button, Input } from '@/components/common'
import { TextArea } from '@/components/common/TextArea'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className='m-auto mt-20 hidden w-4/5 grid-cols-4 gap-4 md:grid'>
        <div className='col-span-2 ml-28 w-80 gap-4'>
          <div className='flex gap-4'>
            <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>STEP1</p>
            <p className='my-auto text-xl font-semibold'>イベント名を入力</p>
          </div>
          <p className='ml-16 text-sm'>※飲み会、会議など</p>
        </div>
        <div className='col-span-2 ml-8'>
          <div className='flex gap-4'>
            <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>STEP3</p>
            <p className='my-auto text-xl font-semibold'>日程の入力</p>
          </div>
          <p className='ml-16 text-sm'>※日程調整日を選択</p>
        </div>
        <div className='col-span-2 ml-36'>
          <Input />
        </div>
        <div className='col-span-2 row-span-3 m-auto h-48 w-1/2 rounded-lg bg-accent'>
          カレンダー
        </div>
        <div className='col-span-2 ml-28 w-80'>
          <div className='flex gap-4'>
            <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>STEP2</p>
            <p className='my-auto text-xl font-semibold'>メモを入力(任意)</p>
          </div>
          <p className='ml-16 text-sm'>※出欠〆切は◯日</p>
        </div>
        <div className='col-span-2 ml-36'>
          <TextArea bordered={true} ghosted={false} />
        </div>
      </div>
      <div className='mt-16 flex justify-center font-semibold'>
        <Button>調整ちゃんを作成</Button>
      </div>
    </MainLayout>
  )
}
