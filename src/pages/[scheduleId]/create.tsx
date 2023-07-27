import { Input } from '@/components/common'
import { MainLayout } from '@/components/layout/MainLayout'
import { ScheduleInput } from '@/components/screen'
import { USERS, SCHEDULE } from '@/constant/data'

export default function Create() {
  return (
    <MainLayout>
      <div className='flex min-h-screen flex-col'>
        <main className='grow'>
          <div className='my-20 flex flex-col items-center justify-center gap-8'>
            <div className='flex w-11/12 items-end gap-9 border-b-2 border-primary'>
              <div className='bg-primary p-2'>
                <p className='whitespace-nowrap text-xl font-bold text-white'>
                  イベント名
                </p>
              </div>
              <p className='break-all text-xl'>{SCHEDULE.name}</p>
              <p className='whitespace-nowrap text-sm'>参加{USERS.length}人</p>
            </div>
            <div className='flex w-11/12 flex-col gap-8'>
              <div className='flex flex-col gap-4 md:mx-20'>
                <div className='flex items-end'>
                  <div className='mr-4 flex w-20 justify-end md:w-24'>
                    {/* <div className='h-12 bg-primary p-2'> */}
                    <div className='flex h-12 items-center justify-center rounded-full bg-primary p-3'>
                      <p className='whitespace-nowrap font-bold text-white md:text-xl'>
                        名前
                      </p>
                    </div>
                  </div>
                  <div className='flex w-60 flex-col'>
                    <Input />
                  </div>
                </div>
                <div className='flex items-end'>
                  <div className='mr-4 flex w-20 justify-end md:w-24'>
                    {/* <div className='h-12 bg-primary p-2'> */}
                    <div className='flex h-12 items-center justify-center rounded-full bg-primary p-3'>
                      <p className='whitespace-nowrap font-bold text-white md:text-xl'>
                        メモ欄
                      </p>
                    </div>
                  </div>
                  <div className='flex w-60 flex-col md:w-10/12'>
                    <Input />
                  </div>
                </div>
              </div>
              <ScheduleInput
                schedule={SCHEDULE}
                editUser={USERS[0]}
                onChange={(availableDates) => {
                  if (!availableDates) return
                  availableDates.forEach((date, index) => {
                    // console.log(index, date.from, date.to)
                  })
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
