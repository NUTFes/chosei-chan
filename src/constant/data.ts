import { Available, Schedule, User } from '../type/common'

export const AVAILABLES1 = [
  {
    from: 1690081200000,
    to: 1690084800000,
  },
  {
    from: 1690174800000,
    to: 1690182000000,
  },
] as Available[]

const AVAILABLES2 = [
  {
    from: 1690070400000,
    to: 1690077600000,
  },
  {
    from: 1690196400000,
    to: 1690210800000,
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
    availables: null,
  },
  {
    name: 'test4',
    memo: '今週が良いです',
    availables: null,
  },
] as User[]

export const SCHEDULE: Schedule = {
  id: '',
  users: USERS,
  name: '飲み会',
  memo: '出席できる日追加して下さい',
  dates: [1690038000000, 1690124400000, 1690210800000],
  createdAt: null,
  updatedAt: null,
  deletedAt: null,
}

export const USER: User = {
  availables: null,
  name: 'テスト太郎',
  memo: 'いけません',
}
