import { doc, setDoc, getDoc } from 'firebase/firestore'
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
    const docRef = doc(db, 'schedules', id) // "test"コレクションの新しいドキュメントの参照を取得

    await setDoc(docRef, data) // データをドキュメントにセット
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
}

// スケジュールを取得する関数
export async function getSchedule(id: string) {
  try {
    const docRef = doc(db, 'schedules', id)

    const scheduleRes = await getDoc(docRef)
    // ドキュメントが存在するかチェック
    if (scheduleRes.exists()) {
      // ドキュメントデータを取得して返す
      return scheduleRes.data()
    } else {
      // ドキュメントが存在しない場合はnullを返す
      return null
    }
  } catch (error) {
    console.error('データの取得中にエラーが発生しました:', error)
  }

  return null
}
