import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Contracts = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const getData = () => {

      fetch('https://capital-one-clone-api.vercel.app/articles', { mode: "cors" })
        .then(response => response.json())
        .then(data => setArticles(data.data))
        .catch(error => console.error(error));
    }

    return getData();
  }, [])

  return (
    <div>

      {/* banner */}
      <div className="hidden md:block bg-[url(https://ecm.capitalone.com/ESM/assets/images/product-category-images/PCP-all-categories-optimized.jpg)] bg-cover bg-center py-14 px-40">
        {/* Content Box */}
        <div className="bg-white p-10 w-fit rounded space-y-4">
          <h1 className="text-[40px] font-thin">Business Discounts by <br /> Category</h1>
          <p className="text-base pb-8">Get discounts on the goods and services you need most to run your <br /> business.</p>
          <Link to='/signup' className="text-xl bg-blue-600 rounded text-white font-semibold px-5 py-3">Start Saving</Link>
        </div>
      </div>

      <div className="md:hidden">
        <img src="https://ecm.capitalone.com/ESM/assets/images/product-category-images/PCP-all-categories-optimized.jpg" className="text object-cover" alt="" />
        <div className="bg-white p-10 w-11/12 mx-auto rounded space-y-4">
          <h1 className="text-[40px] font-thin">Business Discounts by <br /> Category</h1>
          <p className="text-base pb-8">Get discounts on the goods and services you need most to run your <br /> business.</p>
          <Link to='/signup' className="text-xl bg-[#25810E] rounded text-white font-semibold px-5 py-3">Start Saving</Link>
        </div>
      </div>

      <div className="flex flex-col items-center p-8">
          <h1 className="uppercase font-semibold">Featured Content</h1>
          <div className="grid md:grid-cols-3 md:gap-6 md:w-10/12 m-auto space-y-6 p-8">

            {/* Cards  */}

            {articles.map((data) => {
              return (
                <Link to={`/resources/${data._id}`} className="w-fit space-y-4 rounded-md shadow-md" key={data._id}>
                  <img src={data.categoryImage} alt="" className="w-[352px] h-[176px] object-cover" />
                  <p className="text-sm px-3 pb-4 uppercase font-bold">{data.category}</p>
                  <p className="text-2xl px-3 pb-4 font-light w-10/12">{data.title}</p>
                  <p className="text-xs px-3 pb-4 font-bold"> {data.visibleDate}  | {data.readTime}</p>
                </Link>
              )
            })}

          </div>
        </div>
    </div>
  )
}

export default Contracts