import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/common'
import { MainLayout } from '@/components/layout/MainLayout'
import { ScheduleInput } from '@/components/screen'
import { getSchedule, addUser } from '@/repositories'
import { User, Schedule, userSchema } from '@/type/common'

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

export default function Create(props: Props) {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    watch,
  } = useForm<User>({
    mode: 'onSubmit',
  })

  const schedule = props.schedule
  const watchedSchedule = watch('availables')
  const ScheduleValid = useMemo(() => {
    return watchedSchedule?.length !== 0
  }, [watchedSchedule])

  const router = useRouter()
  const onSubmit = async (data: User) => {
    try {
      userSchema.parse(data)
      await addUser(props.id, data)
      await router.push('/' + props.id)
      return null
    } catch (error) {
      console.error('An error occurred:', error)
      return null
    }
  }

  const user: User = { name: '', memo: '', availables: null }
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
              <p className='break-all text-xl'>{schedule.name}</p>
              <p className='whitespace-nowrap text-sm'>
                参加{(schedule.users && schedule.users.length) || (!schedule.users && 0)}
                人
              </p>
            </div>
            <div className='flex w-11/12 flex-col gap-8'>
              <div className='flex flex-col gap-4 md:mx-20'>
                <div className='flex items-end'>
                  <div className='mr-4 flex w-20 justify-end md:w-24'>
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
                schedule={schedule}
                editUser={user}
                onChange={(availableDates) => {
                  if (!availableDates) return
                  availableDates.forEach(() => {
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
              className='btn bg-primary'
            >
              日程を入力
            </Button>
          </div>
        </main>
      </form>
    </MainLayout>
  )
}
