import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ChatSeller = () => {
  const [show, setShow] = useState(false);
  const sellerId = 32;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)] ">
        <div className="flex w-full h-full relative ">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-[#3d4458] md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/admin.png"
                    alt="images"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Akter Hossain</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className="flex justify-between items-center">
              {sellerId && 
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[42px] h-[42px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                      src="http://localhost:3000/images/admin.png"
                      alt="images"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                </div>
              }
              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            <div className="py-4">
                <div className="bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                  <div className="w-full flex justify-start items-center">
                    <div className="flex justify-start items-start gap-2 md:px-2 max-w-full lg:max-w-[80%] ">
                      <img className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]" src="http://localhost:3000/images/admin.png" alt="" />
                    </div>
                    <div className=" flex justify-center items-start flex-col w-ful bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How are you?</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <div className="flex justify-start items-start gap-2 md:px-2 max-w-full lg:max-w-[80%] ">
                    <div className=" flex justify-center items-start flex-col w-ful bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>I am Fine and you?</span>
                    </div>
                    <img className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]" src="http://localhost:3000/images/seller.png" alt="" />
                    </div>
                    
                    
                  </div>
                  <div className="w-full flex justify-start items-center">
                    <div className="flex justify-start items-start gap-2 md:px-2 max-w-full lg:max-w-[80%] ">
                      <img className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]" src="http://localhost:3000/images/admin.png" alt="" />
                    </div>
                    <div className=" flex justify-center items-start flex-col w-ful bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm">
                      <span>Fine Too..</span>
                    </div>
                  </div>
                </div>
              </div>
              <form className="flex gap-3">
                <input className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]" type="text" placeholder="Enter Your Massege" />
                <button className="shadow-lg bg-cyan-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center cursor-pointer ">Send</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSeller;
