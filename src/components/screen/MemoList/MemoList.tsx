import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers =
    users &&
    users.filter((user) => {
      return user.memo
    })

  return (
    <div className='w-11/12 gap-10 rounded-lg border bg-white  p-4 drop-shadow md:w-4/5 md:p-8'>
      <p className='text-xl'>コメント欄</p>
      <div className='divider' />
      <div className='chat chat-start items-end gap-4'>
        {filterUsers &&
          filterUsers.map((user) => (
            <>
              <p className='rounded-box border p-2 text-lg text-primary outline md:ml-4 md:p-3'>
                {user.name}
              </p>
              <div className='chat-bubble chat-bubble-primary my-auto'>
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
