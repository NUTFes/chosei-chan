import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers =
    users &&
    users.filter((user) => {
      return user.memo
    })

  return (
    <div className='w-11/12 gap-10 rounded-lg border bg-white  p-4 drop-shadow-md md:w-4/5 md:p-8'>
      <p className='text-xl'>コメント欄</p>
      <div className='divider' />
      <div className='chat chat-start items-end gap-4'>
        {filterUsers &&
          filterUsers.map((user) => (
            <>
              <p className='rounded-box border-2 text-lg text-primary outline md:ml-4 md:px-3 md:py-1'>
                {user.name}
              </p>
              <div className='chat-bubble chat-bubble-primary flex h-auto items-center'>
                <p className='hidden-scrollbar overflow-x-auto whitespace-nowrap text-xs text-white'>
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
