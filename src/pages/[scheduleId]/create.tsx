import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/common'
import { MainLayout } from '@/components/layout/MainLayout'
import { ScheduleInput } from '@/components/screen'
import { USERS, SCHEDULE } from '@/constant/data'
import { User } from '@/type/common'

export default function Create() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    watch,
  } = useForm<User>({
    mode: 'onSubmit',
  })

  const watchedSchedule = watch('availables')
  const ScheduleValid = useMemo(() => {
    return watchedSchedule?.length !== 0
  }, [watchedSchedule])

  const router = useRouter()
  const onSubmit = async (data: User) => {
    // 送信処理
    console.log(data)
    await router.push('/schedule') // 遷移先のURL
  }

  return (
    <MainLayout>
      <form className='flex min-h-screen flex-col' onSubmit={handleSubmit(onSubmit)}>
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
                    <Input
                      {...register('name', { required: '名前を入力してください' })}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
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
                    <Input {...register('memo')} />
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
                    setValue('availables', availableDates)
                  })
                }}
              />
              {!ScheduleValid && (
                <p className='text-red-500'>カレンダーを入力してください</p>
              )}
            </div>
            <Button
              type='submit'
              disabled={!isValid || !ScheduleValid}
              loading={isSubmitting}
            >
              日程を入力
            </Button>
          </div>
        </main>
      </form>
    </MainLayout>
  )
}
