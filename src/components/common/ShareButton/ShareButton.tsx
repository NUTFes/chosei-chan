import Image from 'next/image'
import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ShareButtons: React.FC = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      toast.success('URLをコピーしました')
    } catch (error) {
      alert('URLをコピーできませんでした')
    }
  }

  const handleShareLine = () => {
    // Lineに共有するURLを作成
    const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${location.href}`
    window.open(lineShareUrl, '_blank') // 新しいタブで開く
  }

  return (
    <div className='flex items-center'>
      <button className='btn btn-ghost' onClick={handleCopy}>
        <AiOutlineCopy size='25' />
      </button>
      <button onClick={handleShareLine}>
        <Image src='/LINE_Brand_icon.png' width={36} height={36} alt='logo' />
      </button>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  )
}

export default ShareButtons
