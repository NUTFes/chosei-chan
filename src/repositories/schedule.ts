import { doc, addDoc, getDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { Schedule } from '@/type/common'

// スケジュールを追加する関数
export async function addSchedule(data: Schedule) {
  try {
    const docRef = await addDoc(collection(db, 'schedules'), data)
    return docRef
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
  return null
}

// スケジュールを取得する関数
export async function getSchedule(id: string) {
  try {
    const scheduleRes = await getDoc(doc(db, 'schedules', id))
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
