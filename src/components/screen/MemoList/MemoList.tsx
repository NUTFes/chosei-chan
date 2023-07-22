import { MemoListProps } from './MemoList.types'

const MemoList: React.FC<MemoListProps> = ({ users }) => {
  return (
    <div className='w-8/12 rounded-lg bg-white p-8'>
      <div className='grid grid-cols-4 gap-5'>
        <p className='mb-8 text-center text-3xl underline'>メモ欄</p>
        <div className='col-span-3'></div>
        {users.map((user) => (
          <>
            <p className='text-center text-xl'>{user.name}</p>
            <p className='col-span-3 my-auto'>{user.memo}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default MemoList
