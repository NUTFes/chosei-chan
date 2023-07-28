import { z } from 'zod'

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
  createdAt: z.number().nullable(),
  updatedAt: z.number().nullable(),
  deletedAt: z.number().nullable(),
})

export type Available = z.infer<typeof availableSchema>

export type User = z.infer<typeof userSchema>

export type Schedule = z.infer<typeof scheduleSchema>

export const isAvailable = (arg: unknown): arg is Available => {
  return availableSchema.safeParse(arg).success
}
