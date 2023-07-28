import Link from 'next/link'
const Header: React.FC = () => {
  return (
    <header className='flex items-center bg-white p-1 md:p-2'>
      <Link href='/' className='rounded-box bg-neutral p-1'>
        <img src='/header_logo.svg' className='h-full' />
      </Link>
    </header>
  )
}

export default Header
