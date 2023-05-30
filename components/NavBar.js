import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsArrowDownShort} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className='mx-auto '>
        <div className="container flex flex-col lg:flex-row py-2 justify-between items-center">
        <img src="https://putatoe.com/img/logo.png" alt="image" height="50" width="50"/>
        <div class="ml-1"> PUTATOE
        <br/>
         <span class="tagLine">One Solution</span>
                  </div>
            <div className="flex gap-2 items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md" >
                <CiSearch className='text-[#c3c5c9]'/>

                <input className='focus:outline-none' type="text" placeholder='Search for products here'/>
                <button className='flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200'>Explore
                    <BsArrowDownShort/>
                </button>
            </div>
            <div className="flex items-center gap-4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hK6uAQxVjTpb3j81CXYUPSbEabTsaW4xm4Hah4z5N8OMGOPPp2YiU-7UxrqYF7UAZSE&usqp=CAU" height="50" width="50" alt="Chat" />

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQZtrrgHVoPmrpvvl-6fRzLuUuOqbydIv_VDr3dVFXyUwCbZG1VY6gynrwxrT3uLxdjI&usqp=CAU" height="50" width="50" alt="Chat" />

            

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtMsIjMJ5R7P1t2b4JepXmdU8lT4NcW3i5hjbeXCDSNcwcrnjXirMlRhTstbnCrAkYIE&usqp=CAU" height="50" width="50" alt="Chat" />

            </div>
            <div className="flex items-center gap-4">
                {/* <p className='text-base font-medium cursor-pointer'>Sign In</p> */}
                <p className='text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm'>Create Free Account</p>
             
            </div>
        </div>
    </div>
  )
}

export default NavBar