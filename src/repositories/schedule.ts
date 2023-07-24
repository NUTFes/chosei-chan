import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore'
import { db } from './firebase'
import { Schedule } from '@/type/common'

// idの乱数を生成する関数
function generateRandomString(length: number): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    result += charset.charAt(randomIndex)
  }
  return result
}

// スケジュールを追加する関数
export async function addSchedule(data: Schedule) {
  const id = generateRandomString(10)
  try {
    data.id = id
    const docRef = doc(db, 'schedules', id)

    await setDoc(docRef, data)
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
}

// スケジュールを取得する関数
export async function getSchedule(id: string) {
  try {
    const docRef = doc(db, 'schedules', id)

    const scheduleRes = await getDoc(docRef)
    if (scheduleRes.exists()) {
      return scheduleRes.data()
    } else {
      return null
    }
  } catch (error) {
    console.error('データの取得中にエラーが発生しました:', error)
  }
  return null
}

// スケジュールを全取得する関数
export async function getAllSchedules() {
  try {
    const docRefs = collection(db, 'schedules')

    const querySnapshot = await getDocs(docRefs)
    const documents = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    return documents
  } catch (error) {
    console.error('データの取得中にエラーが発生しました:', error)
  }
  return null
}
