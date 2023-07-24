import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers = users.filter((user) => {
    return user.memo
  })
  return (
    <div className='w-2/3 gap-10 rounded-lg bg-white p-8'>
      <p className='text-3xl'>メモ欄</p>
      <div className='divider' />
      <div className='chat chat-start gap-4'>
        {filterUsers.map((user) => (
          <>
            <p className='ml-4 rounded-2xl bg-primary p-3 text-lg text-white'>
              {user.name}
            </p>
            <div className='chat-bubble chat-bubble-secondary my-auto'>
              <p className='truncate text-white'>{user.memo}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MemoList
