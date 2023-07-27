import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers = users.filter((user) => {
    return user.memo
  })
  return (
    <div className='w-full gap-10 rounded-lg bg-white p-4 md:p-8'>
      <p className='text-3xl'>メモ欄</p>
      <div className='divider' />
      <div className='chat chat-start items-end gap-4'>
        {filterUsers.map((user) => (
          <>
            <p className='md:ml-4 rounded-2xl bg-primary p-3 text-lg text-white'>
              {user.name}
            </p>
            <div className='chat-bubble chat-bubble-secondary my-auto'>
              <p className='text-xs md:text-sm overflow-auto break-keep whitespace-nowrap hidden-scrollbar text-white'>{user.memo}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MemoList
