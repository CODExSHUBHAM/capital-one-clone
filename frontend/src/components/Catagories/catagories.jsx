import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catagories = () => {

  const [catagories, setCatagories] = useState([]);

  useEffect(() => {

    const getData = () => {

      fetch('https://capitalone-api.vercel.app/catagories',{mode : "no-cors"})
        .then(response => response.json())
        .then(data => setCatagories(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])


  return (
    <div>

      <nav className="w-11/12 m-auto py-6 px-16 flex flex-col space-y-3">
        <div className="flex space-x-1 text-xs">
          <Link to='/' className="font-bold text-blue-600 hover:underline">Home</Link>
          <p> &gt; </p>
          <p>Catagories</p>
        </div>
        <hr className="border-black" />
      </nav>

      <div className="bg-[url(https://ecm.capitalone.com/ESM/assets/images/product-category-images/PCP-all-categories-optimized.jpg)] bg-cover bg-center py-14 px-40">
        {/* Content Box */}
        <div className="bg-white p-10 w-fit rounded space-y-4">
          <h1 className="text-[40px] font-thin">Business Discounts by <br /> Category</h1>
          <p className="text-base pb-8">Get discounts on the goods and services you need most to run your <br /> business.</p>
          <Link to='/signup' className="text-xl bg-[#25810E] rounded text-white font-semibold px-5 py-3">Start Saving</Link>
        </div>
      </div>

      <div className="flex w-11/12 m-auto py-20 " >

        {/* section 1 */}
        <section className="w-1/3 flex flex-col px-10">
          <h1 className="font-semibold">Filter</h1>

          {/* filters */}
          <div className="p-4 flex flex-col space-y-2">
            <div className="flex space-x-4 items-center">
              <input type="checkbox" />
              <p className="text-sm font-medium">All Catagories</p>
              <p className="text-xs border px-2 rounded-xl">26</p>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" />
              <p className="text-sm font-medium">Business Needs</p>
              <p className="text-xs border px-2 rounded-xl">26</p>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" />
              <p className="text-sm font-medium">Business Life Cycle</p>
              <p className="text-xs border px-2 rounded-xl">26</p>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" />
              <p className="text-sm font-medium">Industry</p>
              <p className="text-xs border px-2 rounded-xl">26</p>
            </div>
          </div>

        </section>

        {/* section 2 */}
        <section className="flex flex-col px-10 space-y-4">
          <p className="font-medium"> {catagories.length} results</p>
          <div className="grid grid-cols-3 gap-6">
            {/* Card  */}

            {catagories.map((data) => {
              return (
                <Link to={`/Catagories/${data._id}`} className="rounded bg-white w-fit shadow-md text-center space-y-5 pb-4" key={data._id}>
                  <img src={data.image} alt="" className="w-[256px] h-[150px] object-cover" />
                  <h1 className="text-sm uppercase font-bold">{data.category}</h1>
                  <p className="text-base">{data.subcategory}</p>
                </Link>
              )
            })}
          </div>

        </section>
      </div>
    </div>
  )
}

export default Catagories