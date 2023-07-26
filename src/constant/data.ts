import { Available, Schedule, User } from '../type/common'

export const AVAILABLES1 = [
  {
    from: 1672504200000,
    to: 1672522200000,
  },
] as Available[]

const AVAILABLES2 = [
  {
    from: 1672682400000,
    to: 1672705800000,
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
  dates: [
    1672498800000, 1672585200000, 1672671600000, 1672771600000, 1672871600000,
    1672971600000,
  ],
}
