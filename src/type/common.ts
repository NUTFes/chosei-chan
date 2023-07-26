import { z } from 'zod'

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

export const availableSchema = z.object({
  from: z.number(),
  to: z.number(),
})

export const userSchema = z.object({
  name: z.string(),
  memo: z.string().nullable(),
  availables: z.array(availableSchema).nullable(),
})

export const scheduleSchema = z.object({
  id: z.string().nullable(),
  name: z.string(),
  memo: z.string().nullable(),
  users: z.array(userSchema).nullable(),
  dates: z.array(z.number()),
})
