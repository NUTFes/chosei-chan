export interface Available {
  from: number
  to: number
}

export interface User {
  id: string
  name: string
  memo?: string
  availables?: Available[]
}
