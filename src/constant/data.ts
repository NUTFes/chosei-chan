import { Available, Schedule, User } from '../type/common'

export const AVAILABLES1 = [
  {
    id: '1',
    from: 1690081200000,
    to: 1690084800000,
  },
  {
    id: '2',
    from: 1690174800000,
    to: 1690182000000,
  },
] as Available[]

const AVAILABLES2 = [
  {
    id: '1',
    from: 1690070400000,
    to: 1690077600000,
  },
  {
    id: '2',
    from: 1690196400000,
    to: 1690210800000,
  },
] as Available[]

export const USERS = [
  {
    id: '1',
    name: 'test1',
    memo: 'aaa',
    availables: AVAILABLES1,
  },
  {
    id: '2',
    name: 'test2',
    memo: '',
    availables: AVAILABLES2,
  },
  {
    id: '3',
    name: 'test3',
    memo: '今週は厳しいです',
    availables: AVAILABLES2,
  },
  {
    id: '4',
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
    1690038000000, 1690124400000, 1690210800000, 1690383600000, 1690470000000,
    1690556400000, 1690556400000,
  ],
}
