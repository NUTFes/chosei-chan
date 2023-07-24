import { doc, setDoc } from 'firebase/firestore'
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
