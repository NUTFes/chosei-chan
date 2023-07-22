import type { Meta, StoryObj } from '@storybook/react'
import MemoList from './MemoList'
import { USERS } from '@/constant/users'

const meta: Meta<typeof MemoList> = {
  title: 'screen/MemoList',
  component: MemoList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MemoList>

export const Defualt: Story = {
  args: {
    users: USERS,
  },
}
