/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Breadcrumbs from "../Breadcrumbs/breadcrumbs.jsx";

const Deals = () => {

  const [deals, setDeals] = useState([]);
  const [filterParam, setFilterParam] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  // const [checked, setChecked] = useState(true)


  useEffect(() => {
    filterParam.map((param) => {
      if (param == 0) {
        setFilteredDeals(deals)
      } else if (filterParam.length != 0) {
        const filteredData = deals.filter(item => item.category.categoryId == param);
        console.log(filteredData.length)
        setFilteredDeals(filteredData)
      }
      else {
        setFilteredDeals(deals)
      }

    })
  }, [filterParam])


  const onChange = (event) => {
    if (event.target.checked) {
      setFilterParam([...filterParam, event.target.id])
    }
    else {
      setFilterParam(
        filterParam.filter((filterTag) => filterTag !== event.target.id)
      )
    }
  }

  useEffect(() => {
    fetch('https://capital-one-clone-api.vercel.app/deals/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setDeals(data.data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    fetch('https://capital-one-clone-api.vercel.app/deals/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setFilteredDeals(data.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>

      <div>

        {/* <Breadcrumbs/> */}

        <nav className="md:w-[74%] w-[85%] m-auto py-4  flex flex-col space-y-3">
          <div className="flex space-x-1 text-xs">
            <Link to='/' className="font-optimistsb text-blue hover:underline">Home</Link>
            <img src="/Icons/rightarrow.svg" className="w-[14px]" alt="" />
            <p className="font-optimistr">Deals</p>
          </div>
          <h1 className="text-base md:text-2xl font-optimistsb md:font-optimistr">All Deals</h1>
          <hr className="border-[#d4d4d4]" />
        </nav>

        <div className="md:flex w-[85%] md:w-[74%] m-auto justify-between">

          {/* 1st Half */}
          <section className=" w-[25%] hidden md:flex flex-col p-6 ">
            <div className="w-full">

              {/* Filter Heading  */}
              <div className="flex justify-between items-center pb-3">
                <h1 className="text-xl font-optimistsb">Filter</h1>
                <h1 className="font-optimistsb text-blue">Reset Filters</h1>
              </div>
              {/* filters */}

              {/* Catagory Filter  */}
              <div className="flex justify-between px-2 py-4 border-b border-[#d4d4d4]">
                <p className="font-optimistsb">Categories</p>
                <img src="/Icons/line.svg" className="w-[24px]" alt="" />
              </div>
              <div className="flex flex-col space-y-2 py-6">

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='0' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">All Categories</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">213</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='11' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Business Travel</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">32</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='14' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Administrative</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">16</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='3' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Technology</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">41</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='15' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Cyber Security</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">3</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='13' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">HR & Benefits</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">29</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='16' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Communications</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">7</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='8' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Office Supplies</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">55</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='10' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Business Marketing</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">34</p>
                </div>
              </div>

              {/* Brand Filter  */}
              <div className="flex justify-between px-2 py-4 border-b border-[#d4d4d4]">
                <p className="font-optimistsb">Brands</p>
                <img src="/Icons/line.svg" className="w-[24px]" alt="" />
              </div>
              <div className="flex flex-col space-y-2 py-6 h-48 overflow-y-scroll">

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='0' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">All Brands</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">213</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='11' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Business Travel</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">32</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='14' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">1-800 Flowers</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">16</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='3' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">123InkJets</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">41</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='15' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">ADP</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">3</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='13' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">ADT</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">29</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='16' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">AKKO</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">7</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='8' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Office Supplies</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">55</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='10' className="w-[16px] h-[16px] border-black rounded-none" onChange={onChange} />
                    <p className="text-sm font-optimistr">Business Marketing</p>
                  </div>
                  <p className="text-xs border font-optimistr bg-[#fafafa] px-2 border-[#E6E6E6] rounded-xl w-[48px] text-center">34</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2nd Half */}
          <section className="md:w-[75%] flex flex-col space-y-6 md:p-6">
            <div className="flex justify-between">
              <p className="font-optimistr"> {filteredDeals.length} results</p>
              <div className="flex space-x-4 md:hidden">
                <span className="flex font-optimistl text-blue"><img src="/Icons/filter.svg" className="w-[24px] h-[24px]" alt="" />  Filter</span>
                <span className="flex font-optimistl text-blue"><img src="/Icons/sort.svg" className="w-[24px] h-[24px]" alt="" />  Sort</span>
              </div>
            </div>
            {/* card */}
            {filteredDeals.map((data, key) => {
              return (
                <div key={key} className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-8 border p-4 rounded-md bg-white md:text-left text-center items-center">
                  <img src={data.supplierImage} alt="" className="md:w-1/4 w-3/4 border-2 rounded md" />

                  <div className="flex flex-col items-center md:items-start space-y-2 md:w-2/4">
                    <p className="font-optimistsb text-sm md:text-base text-[#008140] md:w-3/5">{data.discountMessage}</p>
                    <p className="font-optimistr md:font-optimistsb text-xs md:text-base">{data.title}</p>
                  </div>

                  <div className="md:w-1/4 w-full flex flex-col">
                    <Link to={`/deals/${data.promotionId}`}>
                      <button className="px-8 py-2 md:py-1 bg-blue rounded-md text-white font-optimistsb w-full">More Info</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </section>

        </div>
      </div>
    </>
  )
}

export default Deals