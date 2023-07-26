import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { Schedule, scheduleSchema } from '@/type/common'

export const getCurrentUnixTime = (): number => {
  const now = new Date()
  const unixTime = Math.floor(now.getTime() / 1000)
  return unixTime
}

// スケジュールを取得する関数
export async function getSchedule(id: string) {
  try {
    const scheduleRes = await getDoc(doc(db, 'schedules', id))
    scheduleSchema.parse(scheduleRes.data())
    const resData = scheduleRes.data()
    return resData
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

// スケジュールを追加する関数
export async function addSchedule(data: Schedule) {
  try {
    const currentUnixTime = getCurrentUnixTime()
    const submitData = { ...data, createdAt: currentUnixTime, updatedAt: currentUnixTime }
    const docRef = await addDoc(collection(db, 'schedules'), submitData)
    const resData = await getSchedule(docRef.id)
    scheduleSchema.parse(resData)
    return resData
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

// スケジュールを全取得する関数
export async function getAllSchedules() {
  try {
    const docRefs = collection(db, 'schedules')
    const querySnapshot = await getDocs(docRefs)
    const resDates = querySnapshot.docs.map((doc) => {
      scheduleSchema.parse(doc.data())
      return { id: doc.id, ...doc.data() }
    })
    return resDates
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

// スケジュールを更新する関数
export async function updateSchedule(id: string, data: Schedule) {
  try {
    const currentUnixTime = getCurrentUnixTime()
    const submitData = { ...data, updatedAt: currentUnixTime }
    await setDoc(doc(db, 'schedules', id), submitData)
    const resData = await getSchedule(id)
    scheduleSchema.parse(resData)
    return resData
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}

// スケジュールを削除する関数
export async function deleteSchedule(id: string) {
  try {
    await deleteDoc(doc(db, 'schedules', id))
    return 'success'
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}
