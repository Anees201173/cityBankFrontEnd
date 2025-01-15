import React from 'react'

function HomeCom_3() {
  return (
    <div>
      <div className='bg-black h-full w-full text-center '  >
        <h1 className='text-4xl  font-bold text-white'>
            Fowerfull Features
        </h1>
        <p className='text-gray-200'>Offer differnent tools and resources to reach your free features</p>

        <div className='flex gap-x-8 justify-center items-center mt-[50px]'>
            <div className='bg-gradient-to-t from-[#171717] to-[#3a3636] w-[600px] h-[700px] rounded-[40px]'>
                <h1 className='text-[30px] font-bold text-white relative -left-[110px] top-4 '>
                Grow your wealth
                </h1>
                <p className='mt-5 text-[25px] w-[500px] ml-[30px] text-justify font-semibold text-[#838181]' >
                    Access invistment tools and resources to reach your Financial goul faster.
                </p>

                <div className='flex flex-col gap-y-[40px] mt-[100px]'>
                    <h1 className='text-[#414141] text-3xl font-semibold'>
                        Addvanced budgeting
                    </h1>
                    <h1 className='text-4xl text-[#BCBCBC] font-semibold'>
                        Manage Savings
                    </h1>
                    <h1 className='text-5xl text-white font-semibold'>
                        Bill pay functinality
                    </h1>
                    <h1 className='text-4xl text-[#BCBCBC] font-semibold'>
                        Multi Currency
                    </h1>
                    <h1 className='text-[#414141] text-3xl font-semibold'>
                        Invistment Access
                    </h1>
                </div>
            </div>
            <div className='flex flex-col gap-y-5'>
                <div className='bg-gradient-to-t from-[#171717] to-[#3a3636]  w-[600px] h-[350px] rounded-[40px]'>
                    
                </div>
                <div className='bg-gradient-to-t from-[#171717] to-[#3a3636] w-[600px] h-[350px] rounded-[40px]'>
                    3
                </div>
            </div>
        </div>


        
      </div>
    </div>
  )
}

export default HomeCom_3
