import { Button, Input } from '@/components/common'
import { TextArea } from '@/components/common/TextArea'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className='m-auto mt-20 hidden w-4/5 grid-cols-4 gap-5 md:grid'>
        <div className='col-span-2 my-5 ml-28 flex  w-80 gap-4'>
          <p className='w-fit rounded-lg bg-primary p-2 text-xl'>STEP1</p>
          <p className='my-auto text-xl underline'>イベント名を入力</p>
        </div>
        <div className='col-span-2 my-5 flex gap-4'>
          <p className='w-fit rounded-lg bg-primary p-2 text-xl'>STEP3</p>
          <p className='my-auto text-xl underline'>日程の入力</p>
        </div>
        <div className='col-span-2 ml-36'>
          <Input />
        </div>
        <div className='col-span-2 row-span-3 m-auto h-48 w-1/2 rounded-lg bg-accent'>
          カレンダー
        </div>
        <div className='col-span-2 my-5 ml-28 flex w-80 gap-4'>
          <p className='w-fit rounded-lg bg-primary p-2 text-xl'>STEP2</p>
          <p className='my-auto text-xl underline'>メモを入力</p>
        </div>
        <div className='col-span-2 ml-36'>
          <TextArea bordered={true} ghosted={false} />
        </div>
      </div>
      <div className='mt-16 flex justify-center'>
        <Button>調整ちゃんを作成</Button>
      </div>
    </MainLayout>
  )
}
