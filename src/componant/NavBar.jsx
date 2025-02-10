import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center px-12 py-2'>
        <div className='flex items-center '> 
            <div className='flex items-center text-3xl font-black  gap-5'> <h1>Even <span className='text-orange-500 '>tre</span></h1></div>
            <div className='flex items-center gap-5'>
                <div className="text-xl font-thin">Home</div>
                <div className="text-xl font-thin">Home</div>
                <div className="text-xl font-thin">Home</div>
                <div className="text-xl font-thin">Home</div>
                <div className="text-xl font-thin">Home</div>
            </div>
        </div>
        <div className='bg-orange-500 text-white flex items-center '>

        </div>
    </div>
  )
}

export default NavBar;
