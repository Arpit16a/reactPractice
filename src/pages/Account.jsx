import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../lottie/tick.json'
import Tick from '../components/lottieAn/Tick'
import Loading from '../components/lottieAn/Loading'

function Account() {
  return (
    <div className=' pt-20 flex'>
      <Tick className=' m-auto'/>
      <Loading/>
    </div>
  )
}

export default Account
