import { Button, Input } from '@/components/common'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className='mx-auto my-10 flex w-80 flex-wrap justify-center gap-4'>
        <p className='w-fit rounded-lg bg-primary p-2 text-xl'>STEP1</p>
        <p className='my-auto text-xl underline'>イベント名を入力</p>
        <Input />
      </div>
      <div className='my-4 flex justify-center gap-4'>
        <p className='w-fit rounded-lg bg-primary p-2 text-xl'>STEP2</p>
        <p className='my-auto text-xl underline'>日程の入力</p>
      </div>
      <div className='m-auto h-96 w-1/2 rounded-lg bg-accent text-center'>カレンダー</div>
      <div className='mb-10 mt-5 flex justify-center'>
        <Button>作成</Button>
      </div>
    </MainLayout>
  )
}
