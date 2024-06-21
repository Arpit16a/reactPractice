import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../../lottie/Animation - 1718806100204.json'

function Loading() {
  return (
    <div className=' flex justify-center fixed top-0 left-0 items-center'>
    <div className=' w-full h-full top-0 left-0 fixed bg-black opacity-60 z-[8] '></div>
    <div className=" z-[10]">
    <Lottie className=' top-[] z-[10]'  animationData={animationData}/>
    </div>
    </div>
  )
}

export default Loading
