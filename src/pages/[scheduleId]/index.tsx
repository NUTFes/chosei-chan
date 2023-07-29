import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ShareButton, Button } from '@/components/common'
import { MainLayout } from '@/components/layout/MainLayout'
import { MemoList } from '@/components/screen/MemoList'
import { ScheduleDisplay } from '@/components/screen/ScheduleDisplay'
import { getSchedule } from '@/repositories/schedule'
import { Schedule } from '@/type/common'

interface Props {
  schedule: Schedule
  id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = String(context.params?.scheduleId) || ''
  const scheduleRes = await getSchedule(id)
  return {
    props: {
      schedule: scheduleRes,
      id: id,
    },
  }
}

function showModal(id: string): void {
  // dialog要素を取得
  const dialogElement = document.getElementById(id) as HTMLDialogElement

  // dialogがサポートされているかを確認
  if (!dialogElement.showModal) {
    // モーダルがサポートされていない場合のフォールバック
    alert('Your browser does not support the "dialog" element.')
    return
  }

  // dialogを開く
  dialogElement.showModal()
}

export default function Home(props: Props) {
  const schedule = props.schedule

  const router = useRouter()
  const createURL = props.id + `/create`
  const editURL = props.id + `/edit`
  const handleCreate = async () => {
    await router.push(createURL) // 遷移先のURL
  }
  const handleEdit = async (index: number) => {
    await router.push(editURL + '?id=' + String(index)) // 遷移先のURL
  }

  return (
    <MainLayout>
      <div className='my-9 flex min-h-screen flex-col'>
        <main className='grow'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='flex w-11/12 items-end gap-5 border-b-2 border-primary'>
              <div className='bg-primary p-2'>
                <p className='whitespace-nowrap text-xl font-bold text-white'>
                  イベント名
                </p>
              </div>
              <p className='text-xl md:whitespace-nowrap md:text-2xl'>{schedule.name}</p>
              <p className='hidden whitespace-nowrap pb-1 text-base md:block'>
                参加{(schedule.users && schedule.users.length) || (!schedule.users && 0)}
                人
              </p>
              <div className='hidden-scrollbar hidden gap-1 overflow-x-auto pb-1 md:flex'>
                {schedule.users &&
                  schedule.users.map((user, index) => (
                    <>
                      <button
                        className='btn btn-outline btn-xs select-none whitespace-nowrap'
                        onClick={() => handleEdit(index)}
                      >
                        {user.name}
                      </button>
                    </>
                  ))}
              </div>
            </div>
            <div className='flex w-11/12 flex-col gap-4'>
              <div className='flex items-end gap-4 border-b-2 border-primary'>
                <div className='bg-primary p-2'>
                  <p className='whitespace-nowrap text-xl font-bold text-white'>備考</p>
                </div>
                <p className='whitespace-pre-wrap break-all text-base'>{schedule.memo}</p>
              </div>
              <div className='flex flex-row-reverse gap-2'>
                <ShareButton />
                <div className='mr-auto md:mx-0'>
                  <Button
                    onClick={handleCreate}
                    size='md'
                    variants='secondary'
                    className='btn btn-primary text-white'
                  >
                    予定を追加
                  </Button>
                </div>
              </div>
              <p className='block whitespace-nowrap text-base md:hidden'>
                参加
                {(schedule.users && schedule.users.length) || (!schedule.users && 0)}人
              </p>
              <div className='hidden-scrollbar flex gap-1 overflow-x-auto md:hidden'>
                {schedule.users &&
                  schedule.users.map((user) => (
                    <>
                      <p className='badge badge-neutral whitespace-nowrap'>{user.name}</p>
                    </>
                  ))}
              </div>
              <div className='mx-auto flex w-full items-center justify-center'>
                <ScheduleDisplay schedule={schedule} />
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
