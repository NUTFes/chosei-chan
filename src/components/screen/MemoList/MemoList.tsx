import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers =
    users &&
    users.filter((user) => {
      return user.memo
    })

  return (
    <div className='w-11/12 gap-10 rounded-lg bg-white p-4 md:w-4/5 md:p-8'>
      <p className='text-xl'>メモ欄</p>
      <div className='divider' />
      <div className='chat chat-start items-end gap-4'>
        {filterUsers &&
          filterUsers.map((user) => (
            <>
              <p className='rounded-2xl bg-primary p-2 text-lg text-white md:ml-4 md:p-3'>
                {user.name}
              </p>
              <div className='chat-bubble chat-bubble-secondary my-auto'>
                <p className='hidden-scrollbar overflow-auto whitespace-nowrap break-keep text-xs text-white md:text-sm'>
                  {user.memo}
                </p>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default MemoList
