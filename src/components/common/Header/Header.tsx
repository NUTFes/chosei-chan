import Link from 'next/link'
const Header: React.FC = () => {
  return (
    <header className='bg-neutral flex items-center p-1 md:p-2'>
      <Link href='/'>
        <img src='/header_logo.svg' className='h-full' />
      </Link>
    </header>
  )
}

export default Header
