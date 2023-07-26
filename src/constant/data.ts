import { Available, Schedule, User } from '../type/common'

export const AVAILABLES1 = [
  {
    id: '1',
    from: 1690081200,
    to: 1690084800,
  },
  {
    id: '2',
    from: 1690174800,
    to: 1690182000,
  },
] as Available[]

const AVAILABLES2 = [
  {
    id: '1',
    from: 1690070400,
    to: 1690077600,
  },
  {
    id: '2',
    from: 1690196400,
    to: 1690210800,
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
  dates: [1690038000, 1690124400, 1690210800],
}

export const USER: User = {
  id: '5',
  name: 'テスト太郎',
  memo: 'いけません',
}
