import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6'

interface EditCommentModalProps {
    setIsModalOpen: (value: boolean) => void
}

export default function EditCommentModal(props: EditCommentModalProps) {

    const {setIsModalOpen} = props
  return (
    <div className='absolute z-50 bg-[#f2f4ff] w-full h-full top-0 left-0'>
        <div className='max-w-[650px] mx-auto pt-[100px]'>
            <div onClick={() => setIsModalOpen(false)} className='flex hover:opacity-50 duration-300 cursor-pointer w-fit gap-x-2 items-center'>
            <FaChevronLeft  className='text-sm text-[#4661e6]' />
            <h1>Go Back</h1>
            </div>
        </div>
    </div>
  )
}
