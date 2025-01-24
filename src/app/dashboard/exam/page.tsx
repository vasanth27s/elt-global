"use client"

import React from 'react'
import QuestionNumber from '@/app/components/examComponents/QuestionNumber'
import Questions from '../../components/examComponents/Questions'
import { useAppContext } from '@/app/utils/AppContext'
import SubmitModal from '@/app/components/modals/submitModal'

const Page = () => {
   const {modal} = useAppContext()
  return (
    <div className='md:flex justify-center h-full w-full'>
       {modal && <SubmitModal/>}
       <QuestionNumber/>
       <Questions />
    </div>
  )
}

export default Page
