export interface Available {
  id: string
  from: number
  to: number
}

export interface User {
  id: string
  name: string
  memo?: string
  availables?: Available[]
}

export interface Schedule {
  id: string
  users?: User[]
  name: string
  memo?: string
  dates: number[]
}
