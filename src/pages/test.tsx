import type { NextPage } from 'next'
import { SCHEDULE, USER, USERS } from '@/constant/data'
import {
  addSchedule,
  getAllSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} from '@/repositories/schedule'
import { addUser, updateUser, deleteUser } from '@/repositories/user'

const insert = async () => {
  const doc = await addSchedule(SCHEDULE)
  // console.log('Document written with ID: ', doc.id)
}

const get = async () => {
  const id = 'YyyrWIL8YfRZj6oD72t4'
  const scheduleData = await getSchedule(id)
  // console.log(scheduleData)
}

const getAll = async () => {
  const scheduleData = await getAllSchedules()
  // console.log(scheduleData)
}

const update = async () => {
  const id = 'tNp6BizMPL2uRok5TKZF'
  await updateSchedule(id, SCHEDULE)
  // console.log('Updated with ID: ', id)
}

const deleteS = async () => {
  const id = 'tNp6BizMPL2uRok5TKZF'
  const res = await deleteSchedule(id)
  // console.log(res)
}

const insertUser = async () => {
  const id = 'tNp6BizMPL2uRok5TKZF'

  const doc = await addUser(id, USER)
  // console.log(doc)
}

const updateU = async () => {
  const id = 'tNp6BizMPL2uRok5TKZF'

  const doc = await updateUser(id, USERS, USER, 1)
  // console.log(doc)
}

const deleteU = async () => {
  const id = 'tNp6BizMPL2uRok5TKZF'

  const doc = await deleteUser(id, USER)
  // console.log(doc)
}

const Home: NextPage = () => {
  return (
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
          onClick={() => deleteS()}
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
          onClick={() => updateU()}
        >
          Update User
        </button>
        <button
          className='mt-4 w-60 rounded-full bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus'
          onClick={() => deleteU()}
        >
          Delete User
        </button>
      </div>
    </div>
  )
}

export default Home
