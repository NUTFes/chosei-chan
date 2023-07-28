const Header: React.FC = () => {
  return (
    <header className='flex h-12 md:h-16 items-center p-1 md:p-2'>
      <a href='/'>
        <img src='/header_logo.svg' className='h-full' />
      </a>
    </header>
  )
}

export default Header
