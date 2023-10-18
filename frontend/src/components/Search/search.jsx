
const search = (props) => {
  return (
    <>
      <div className={`w-full py-6 bg-white border-b hidden md:flex`}>
        <div className="w-[74%] m-auto p-3 border border-black rounded-md flex space-x-2">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23141414' className="w-[24px]">
            <path
              d='M21.467,19l-5.65-5.466a7.529,7.529,0,1,0-2.508,2.423l5.745,5.556a1.727,1.727,0,0,0,1.2.484H20.3a1.743,1.743,0,0,0,1.171-3ZM3,9.505A6.5,6.5,0,1,1,9.5,16.01,6.51,6.51,0,0,1,3,9.505Z' />
          </svg>
          <input type="text" placeholder="Search by brand, discount or catagory" className="w-full font-optimistr" />
        </div>
      </div>
    </>
  )
}

export default search