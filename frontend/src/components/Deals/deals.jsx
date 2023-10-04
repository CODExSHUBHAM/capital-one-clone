/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Search from "../Search/search.jsx";
import { Link } from "react-router-dom";

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
    const getData = () => {

      fetch('https://capitalone-api.vercel.app/deals')
        .then(response => response.json())
        .then(data => setDeals(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])

  useEffect(() => {
    const getData2 = () => {

      fetch('https://capitalone-api.vercel.app/deals')
        .then(response => response.json())
        .then(data => setFilteredDeals(data.data))
        .catch(error => console.error(error));
    }

    return () => getData2();
  }, [])




  return (
    <>

      <div>

        <Search />

        <nav className="w-11/12 m-auto py-6 px-16 flex flex-col space-y-3">
          <div className="flex space-x-1 text-xs">
            <Link to='/' className="font-bold text-blue-600 hover:underline">Home</Link>
            <p> &gt; </p>
            <p>Deals</p>
          </div>
          <h1 className="text-2xl">All Deals</h1>
          <hr className="border-black" />
        </nav>

        <div className="flex w-10/12 m-auto">

          {/* 1st Half */}
          <section className="w-fit flex flex-col p-10 ">
            <div className="w-fit">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Filter</h1>
                <h1 className="font-semibold text-blue-600">Reset Filters</h1>
              </div>
              {/* filters */}
              <div className="p-4 flex flex-col space-y-2">

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='0' onChange={onChange} />
                    <p className="text-sm font-medium">All Categories</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">213</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='11' onChange={onChange} />
                    <p className="text-sm font-medium">Business Travel</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">32</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='14' onChange={onChange} />
                    <p className="text-sm font-medium">Administrative</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">16</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='3' onChange={onChange} />
                    <p className="text-sm font-medium">Technology</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">41</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='15' onChange={onChange} />
                    <p className="text-sm font-medium">Cyber Security</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">3</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='13' onChange={onChange} />
                    <p className="text-sm font-medium">HR & Benefits</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">29</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='16' onChange={onChange} />
                    <p className="text-sm font-medium">Communications</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">7</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='8' onChange={onChange} />
                    <p className="text-sm font-medium">Office Supplies</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">55</p>
                </div>

                <div className="flex space-x-4 items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" id='10' onChange={onChange} />
                    <p className="text-sm font-medium">Business Marketing</p>
                  </div>
                  <p className="text-xs border px-2 rounded-xl">34</p>
                </div>
              </div>
            </div>

          </section>

          {/* 2nd Half */}
          <section className="w-2/3 flex flex-col p-10 space-y-6">
            <p className="font-medium"> {filteredDeals.length} results</p>
            {/* card */}
            {filteredDeals.map((data, key) => {
              return (
                <div key={key} className="flex space-x-8 border w-full p-4 rounded-md bg-white">
                  <img src={data.supplierImage} alt="" className="w-1/4 border-2 rounded md" />

                  <div className="flex flex-col space-y-2 w-2/4">
                    <p className="font-bold text-[#1E6A0B] w-3/5">{data.discountMessage}</p>
                    <p className="font-bold">{data.title}</p>
                  </div>

                  <div className="w-1/4 flex flex-col items-end">
                    <Link to={`/Deals/${data.promotionId}`}>
                      <button className=" bg-blue-600 px-8 py-1 rounded-md text-white font-bold">More Info</button>
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