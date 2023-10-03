import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Dealdetails = () => {

  const [deals, setDeals] = useState([])


  const id = useParams()

  const filteredDeals = deals.filter(item => item.promotionId == id.id)


  useEffect(() => {
    const getData = () => {

      fetch('https://capitalone-api.vercel.app/deals')
        .then(response => response.json())
        .then(data => setDeals(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])

  return (
    <>
      <div className="">

        <nav className="w-11/12 m-auto py-6 px-16 flex flex-col space-y-3">
          <div className="flex space-x-1 text-xs">
            <Link to='/' className="font-bold text-blue-600 hover:underline">Home</Link>
            <p> &gt; </p>
            <p>Catagories</p>
          </div>
          <hr className="border-black" />
        </nav>

        {
          filteredDeals.map((deal) => {
            return (
              <div key={deal.id} className="w-11/12 m-auto p-20">

                <div className="flex justify-between">

                  <div className="flex flex-col items-center w-4/12 text-center  bg-white border rounded-md shadow-sm py-20 px-6">
                    <img src={deal.supplierImage} alt="" className="w-[302.4px]" />
                    <p className="w-4/5">{deal.description.slice(0, 120)}</p>
                  </div>

                  <img src={deal.modalImage} className="w-3/5 rounded-md shadow-sm" />

                </div>

                <div className="mx-auto my-8 p-6 bg-white flex">

                  <div className="w-4/5 space-y-2">
                    <p className="text-sm text-[#25810e] uppercase font-bold">{deal.discountMessage}</p>
                    <p className="text-xl font-semibold">{deal.title}</p>
                    <p className="blur-sm">{deal.description}</p>
                  </div>

                  <div className="w-1/5">
                    <Link >
                      Join For Free to Unlock
                    </Link>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Dealdetails