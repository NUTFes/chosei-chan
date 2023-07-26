import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { User } from '@/type/common'

// ユーザーを追加するメソッド
export async function addUser(id: string, data: User) {
  try {
    const docRef = doc(db, 'schedules', id)
    await updateDoc(docRef, {
      users: arrayUnion(data),
    })
    return 'append user'
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
  return null
}

// ユーザーを更新するメソッド 引数にドキュメントid,更新したuser,userの配列,インデックスを渡す
export async function updateUser(
  id: string,
  usersArray: User[],
  updateUser: User,
  index: number,
) {
  try {
    const docRef = doc(db, 'schedules', id)
    usersArray[index] = updateUser
    await updateDoc(docRef, {
      users: usersArray,
    })
    return `update user ${index}`
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
  return null
}

// ユーザーを削除するメソッド
export async function deleteUser(id: string, deleteUser: User) {
  try {
    const docRef = doc(db, 'schedules', id)

    await updateDoc(docRef, { users: arrayRemove(deleteUser) })
    return `delete user`
  } catch (error) {
    console.error('データの追加中にエラーが発生しました:', error)
  }
  return null
}
