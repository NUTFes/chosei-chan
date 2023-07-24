import Image from 'next/image'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer: React.FC = () => {
  return (
    <footer className='footer absolute bottom-0 items-center bg-neutral p-4 text-neutral-content'>
      <div className='grid-flow-col items-center'>
        <Image src='/logo_images.png' width={36} height={36} alt='logo' />
        <p>Copyright © 2023 - NUTMEG</p>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a
          className='hover:scale-125'
          href='https://twitter.com/nutfes_nutmeg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
        >
          <AiOutlineTwitter size='24' />
        </a>
        <a className='link-hover link hover:scale-125' href='https://blog.nutmeg.cloud/'>
          Blog
        </a>
        <a className='link-hover link hover:scale-125' href='https://www.nutfes.net/'>
          HP
        </a>
      </div>
    </footer>
  )
}

export default Footer
