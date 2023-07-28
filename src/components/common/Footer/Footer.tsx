import Image from 'next/image'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer: React.FC = () => {
  return (
    <footer className='footer bg-neutral p-1 md:p-4 text-neutral-content'>
      <div className='w-full grid-flow-col items-center'>
        <div className='flex gap-1 items-center'>
          <Image src='/logo_images.png' width={24} height={24} alt='logo' />
          <div className='text-xs md:text-base'>Copyright © 2023 - NUTMEG</div>
        </div>
        <div className='flex gap-1 md:gap-4 place-self-center justify-self-end'>
          <a
            className='hover:scale-125'
            href='https://twitter.com/nutfes_nutmeg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
          >
            <AiOutlineTwitter size='24' />
          </a>
          <a
            className='link-hover link hover:scale-125'
            href='https://blog.nutmeg.cloud/'
          >
            Blog
          </a>
          <a className='link-hover link hover:scale-125' href='https://www.nutfes.net/'>
            HP
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
