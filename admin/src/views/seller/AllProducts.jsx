/* eslint-disable jsx-a11y/scope */
import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
// import { BsImage } from "react-icons/bs";
import Search from '../components/Search'

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5 pb-3">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue}/>
        <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-[#d0d2d6]">
                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      NO
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Brand
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Discount
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Stock
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((d, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        {d}
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <img
                          className=" w-[45px] h-[45px]"
                          src={`http://localhost:3000/images/category/${d}.png`}
                          alt="images"
                        />
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Electronic Blender</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Nova Electronic Ltd</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>Electronics</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>$2500</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>5%</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <span>50</span>
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px] bg-yellow-500 ruonded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className="p-[6px] bg-green-500 ruonded hover:shadow-lg hover:shadow-green-500/50">
                            <FaEye />
                          </Link>
                          <button className="p-[6px] bg-red-500 ruonded hover:shadow-lg hover:shadow-red-500/50">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                pageNumber={currentPage}
                saetPageNumber={setCurrentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
            </div>
      </div>
    </div>
  )
}

export default AllProducts
