import { Available, Schedule, User } from '../type/common'

export const AVAILABLES1 = [
  {
    from: 1672597800000,
    to: 1672605000000,
  },
] as Available[]

const AVAILABLES2 = [
  {
    from: 1672506900000,
    to: 1672519500000,
  },
] as Available[]

export const USERS = [
  {
    name: 'test1',
    memo: 'aaa',
    availables: AVAILABLES1,
  },
  {
    name: 'test2',
    memo: '',
    availables: AVAILABLES2,
  },
  {
    name: 'test3',
    memo: '今週は厳しいです',
  },
  {
    name: 'test4',
    memo: '今週が良いです',
  },
] as User[]

export const SCHEDULE: Schedule = {
  id: 'acsajvYtOlf8K',
  users: USERS,
  name: '飲み会',
  memo: '出席できる日追加して下さい',
  dates: [1672498800000, 1672585200000, 1672671600000],
}
