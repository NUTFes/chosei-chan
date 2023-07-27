import { SCHEDULE, USER, USERS } from '@/constant/data'
import {
  addSchedule,
  getAllSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
  addUser,
  updateUser,
  deleteUser,
} from '@/repositories'

const insert = async () => {
  const res = await addSchedule(SCHEDULE)
  alert(res)
}

const get = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await getSchedule(id)
  alert(res)
}

const getAll = async () => {
  const res = await getAllSchedules()
  alert(res)
}

const update = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await updateSchedule(id, SCHEDULE)
  alert(res)
}

const deleteScheduleByRepo = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await deleteSchedule(id, SCHEDULE)
  alert(res)
}

const insertUser = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await addUser(id, USER)
  alert(res)
}

const updateUserByRepo = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await updateUser(id, USERS, USER, 1)
  alert(res)
}

const deleteUserByRepo = async () => {
  const id = 'iyKnqF9XFvGkgSpzoAUx'
  const res = await deleteUser(id, USER)
  alert(res)
}

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex min-h-screen flex-col items-center justify-center py-2'>
          <button
            className='mt-4 w-60 rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700'
            onClick={() => insert()}
          >
            Insert Schedule
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            onClick={() => get()}
          >
            Get Schedule
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-primary px-4 py-2 font-bold text-white hover:bg-primary-focus'
            onClick={() => getAll()}
          >
            Get All Schedules
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-secondary px-4 py-2 font-bold text-white hover:bg-secondary-focus'
            onClick={() => update()}
          >
            Update Schedule
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus'
            onClick={() => deleteScheduleByRepo()}
          >
            Delete Schedule
          </button>
        </div>
        <div className='flex min-h-screen flex-col items-center justify-center py-2'>
          <button
            className='mt-4 w-60 rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700'
            onClick={() => insertUser()}
          >
            Insert User
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-secondary px-4 py-2 font-bold text-white hover:bg-secondary-focus'
            onClick={() => updateUserByRepo()}
          >
            Update User
          </button>
          <button
            className='mt-4 w-60 rounded-full bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus'
            onClick={() => deleteUserByRepo()}
          >
            Delete User
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
