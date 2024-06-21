import React, { useState } from 'react'
import { FaTree, FaBars } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'


function Header() {
  const [open, setopen]=useState(false)
  const container = (delay)=>({
    hidden: {y:-100, opacity:0},
    visible: {y: 0, opacity: 1,
      transition:{
        duration:0.5,
        delay: delay
      }
    }
  })
  const navigate = useNavigate()
  const admincheck=useSelector(state=>(state.auth.isAdmin))
  return (
    <>
    <div className=' fixed flex justify-between w-full  '>
    <div className='bg-slate-600 px-10 py-1.5 justify-between z-[999] w-full flex  shadow-lg'>
        <div
        
         className="logo font-bold text-xl flex 
         items-center gap-5">
          <motion.span
          variants={container(0.1)}
          initial='hidden'
          animate='visible'>
          <img src="logo.png" className=' w-[40px] scale-[3]' alt="" />
          </motion.span>
          <motion.span
         variants={container(0.2)}
         initial='hidden'
         animate='visible'

         className=' text-white'
         >Vlogger Food</motion.span></div>

         <FaBars onClick={()=>{setopen(!open)}} className=' text-white text-xl md:hidden'/>
         </div>
         
        <div className={`items flex md:static absolute flex-col left-0 bg-gray-600 w-full md:py-0 md:w-fit z-[1] py-4 rounded-b-xl md:rounded-b-none transition-all duration-1000 ease-in-out md:flex-row   gap-5 items-center ${open? 'top-12':'top-[-420px]'}`}>

        {[{name:"Home", path:'/'},{name:"Add", path:'/add', isAdmin:admincheck}, {name:"Contact Us", path:'/contact-us'}, {name:"Categories", path:'/categories'},{name:"Your Account", path:'/account'}].map((item, index)=>(
       <>
      
            <motion.div
            variants={container((index/10)+0.4)}
            initial='hidden'
            animate='visible'
             onClick={()=>{ navigate(item.path)}} className={` cursor-pointer text-md ${index===4 && 'md:ml-20 text-black bg-gray-400  px-4 py-2 flex md:items-center rounded-full hover:text-black m-auto '}  text-white
            ${(item.name==='Add' && item.isAdmin===false) && 'hidden'} whitespace-nowrap`}>{item.name}</motion.div>
            </>
        ))} 
        </div>


        </div>


    </>
   
  )
}

export default Header
