import React, { forwardRef } from 'react'
import {FixedSizeList as List } from 'react-window'
import { BsCurrencyDollar } from 'react-icons/bs'

function handleOnWheel ({ deltaY }) {
  console.log('handleOnWheel', deltaY)
}
const outerElementType = forwardRef((props, ref) =>(
  <div ref={ref} onWheel={handleOnWheel} {...props} />
))


const Payment = () => {

  const Row = ({index, style }) => {
    return (
      <div style={style} className='flex text-sm'>
        <div className='w-[25%] p-2 whitespace-nowrap'>{index +1 }</div>
        <div className='w-[25%] p-2 whitespace-nowrap'>$5000</div>
        <div className='w-[25%] p-2 whitespace-nowrap'>
          <span className='py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs'>Successfull</span>
        </div>
        <div className='w-[25%] p-2 whitespace-nowrap'>20 may 2023</div>
      </div>
    )
  }

  return (
    <div className='px-2 md:px-7 py-5'>
     <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-4'>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>$6660</h2>
            <span className='text-sm font-normal'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
              <BsCurrencyDollar className='text-[#28c76f] shadow-lg'/>
            </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>$2000</h2>
            <span className='text-sm font-normal'>Available Amount</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
              <BsCurrencyDollar className='text-[#cd00e8] shadow-lg'/>
            </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-lg font-bold'>$3000</h2>
            <span className='text-sm font-medium'>Withdrawl Amount</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe8af] flex justify-center items-center text-xl'>
              <BsCurrencyDollar className='text-[#00cfe8] shadow-lg'/>
            </div>
        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-lg font-bold'>$2000</h2>
            <span className='text-sm font-medium'>Pending Amount</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e737ad1f] flex justify-center items-center text-xl'>
              <BsCurrencyDollar className='text-[#f042ad] shadow-lg'/>
            </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4'>
        <div className='bg-[#283046] text-[#d0d2d6] rounded-md p-5'>
          <h2 className='text-lg'>Send Request</h2>
          <div className='py-5'>
            <form>
              <div className='flex gap-3 flex-wrap'>
                <input className="px-4 md:w-[79%] py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"  type='number' min='0' placeholder='Enter Amount' name='amount' id='amount' />
                <button className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2">Submit</button>
              </div>
            </form>
          </div>
          <div>
          <h2 className='text-lg pb-4'>Pending Request</h2>
          <div>
          <div className='w-full overflow-x-auto'>
                <div className='flex bg-[#161d31] uppercase text-xs main-w-[340px]'>
                    <div className='w-[25%] p-2'>No</div>
                    <div className='w-[25%] p-2'>Amount</div>
                    <div className='w-[25%] p-2'>Status</div>
                    <div className='w-[25%] p-2'>Date</div>
                    
                </div>
                {
                  <List 
                    style={{mainWidth: '340px', overflowX: 'hidden'}}
                    className='List'
                    height={350}
                    itemCount={10}
                    itemSize={35}
                    outerElementType={outerElementType}>
                      {Row}
                  </List>
                }
            </div>
          </div>
        </div>
        </div>
        
        <div className='bg-[#283046] text-[#d0d2d6] rounded-md p-5'>
          <h2 className='text-lg'>Withdrawl Success</h2>
          <div className='w-full overflow-x-auto'>
                <div className='flex bg-[#161d31] uppercase text-xs main-w-[340px]'>
                    <div className='w-[25%] p-2'>ID</div>
                    <div className='w-[25%] p-2'>Amount</div>
                    <div className='w-[25%] p-2'>Status</div>
                    <div className='w-[25%] p-2'>Date</div>
                    
                </div>
                {
                  <List 
                    style={{mainWidth: '340px', overflowX: 'hidden'}}
                    className='List'
                    height={350}
                    itemCount={10}
                    itemSize={35}
                    outerElementType={outerElementType}>
                      {Row}
                  </List>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
