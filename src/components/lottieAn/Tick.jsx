import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../../lottie/tick.json'

function Tick() {
  return (
    <div>
            <Lottie animationData={animationData} loop={false} style={{width:'500px',height:'500px', margin:'auto'}}/>
    </div>
  )
}

export default Tick
