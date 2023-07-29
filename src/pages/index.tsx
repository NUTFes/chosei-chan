import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/common'
import { TextArea } from '@/components/common/TextArea'
import { MainLayout } from '@/components/layout/MainLayout'
import { Calender } from '@/components/screen'
import { addSchedule } from '@/repositories'
import { Schedule, scheduleSchema } from '@/type/common'

export default function Home() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    watch,
  } = useForm<Schedule>({
    mode: 'onSubmit',
  })

  const watchedCalender = watch('dates')
  const calenderValid = useMemo(() => {
    return watchedCalender?.length !== 0
  }, [watchedCalender])

  const router = useRouter()
  const onSubmit = async (data: Schedule) => {
    try {
      const submitData: Schedule = {
        ...data,
        deletedAt: null,
        id: '',
        users: null,
        createdAt: null,
        updatedAt: null,
      }
      scheduleSchema.parse(submitData)
      const res = await addSchedule(submitData)
      const url = String(res)
      await router.push(url) // 遷移先のURL
      return null
    } catch (error) {
      console.error('An error occurred:', error)
      return null
    }
  }

  return (
    <MainLayout>
      <form
        className='my-6 flex flex-col items-center gap-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='m-auto flex w-4/5 flex-wrap md:flex-nowrap md:gap-16'>
          <div className='flex w-full flex-col md:w-1/2'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>
                  STEP1
                </p>
                <p className='text-xl font-semibold'>イベント名を入力</p>
              </div>
              <p className='ml-4 text-sm'>※飲み会、会議など</p>
              <Input
                {...register('name', { required: 'イベント名を入力してください' })}
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className='divider' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p className='w-fit rounded-lg bg-primary p-2 text-xl font-semibold'>
                  STEP2
                </p>
                <p className='text-xl font-semibold'>メモを入力（任意）</p>
              </div>
              <p className='ml-4 text-sm'>※参加可能な時にチェックしてください など</p>
              <TextArea bordered={true} ghosted={false} {...register('memo')} />
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
                onChange={(selectedDate: number[]) => {
                  setValue('dates', selectedDate)
                }}
              />
              <p className={classNames({ 'opacity-0': calenderValid }, 'text-red-500')}>
                カレンダーを入力してください
              </p>
            </div>
          </div>
        </div>
        <Button
          type='submit'
          variants='primary'
          disabled={!isValid || !calenderValid}
          loading={isSubmitting}
          className='btn btn-primary text-white'
        >
          調整ちゃんを作成
        </Button>
      </form>
    </MainLayout>
  )
}
