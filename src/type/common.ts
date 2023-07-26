export interface Available {
  from: number
  to: number
}

export interface User {
  name: string
  memo?: string
  availables?: Available[]
}

export interface Schedule {
  id?: string
  users?: User[]
  name: string
  memo?: string
  dates: number[]
}
