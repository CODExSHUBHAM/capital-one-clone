import { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";

const CatagoryDetails = () => {


  const id = useParams()
  const [catagories, setCatagories] = useState([]);
  const filteredCatagory = catagories.filter(item => item._id == id.id)

  useEffect(() => {

    const getData = () => {

      fetch('https://capitalone-api.vercel.app/catagories')
        .then(response => response.json())
        .then(data => setCatagories(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])

  return (
    <>
      {
        filteredCatagory.map((catagory) => {
          return (
            <div key={catagory._id}>
              <div className={`bg-[url(https://ecm.capitalone.com/ESM/assets/images/product-category-images/PCP-all-categories-optimized.jpg)] bg-cover bg-center py-14 px-40`}>
                {/* Content Box */}
                <div className="bg-white p-10 w-fit rounded space-y-4">
                  <h1 className="text-[40px] font-thin">Business Discounts by <br /> Category</h1>
                  <p className="text-base pb-8">Get discounts on the goods and services you need most to run your <br /> business.</p>
                  <Link to='/signup' className="text-xl bg-[#25810E] rounded text-white font-semibold px-5 py-3">Start Saving</Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default CatagoryDetails