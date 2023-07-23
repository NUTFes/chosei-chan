import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  const filterUsers = users.filter((user) => {
    return user.memo
  })
  return (
    <div className='w-2/3 gap-10 rounded-lg bg-white p-8'>
      <p className='text-3xl'>メモ欄</p>
      <div className='divider' />
      <div className='grid grid-cols-3 gap-5'>
        {filterUsers.map((user) => (
          <>
            <p className='badge badge-lg mx-auto'>{user.name}</p>
            <p className='col-span-2 my-auto'>{user.memo}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default MemoList
