import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Resources = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const getData = () => {

      fetch('https://capitalone-api.vercel.app/articles')
        .then(response => response.json())
        .then(data => setArticles(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])

  return (
    <>
      <div>

        {/* navbar */}
        <div className="w-full py-4 px-40 bg-white border-b flex justify-between">
          <Link to='/resources' className="font-semibold">Resources</Link>
          <div className="flex space-x-8">
            <Link className="text-sm hover:underline hover:text-blue-600 font-medium">Procurement Overview</Link>
            <Link className="text-sm hover:underline hover:text-blue-600 font-medium">Negosiation</Link>
            <Link className="text-sm hover:underline hover:text-blue-600 font-medium">Supplier Management</Link>
            <Link className="text-sm hover:underline hover:text-blue-600 font-medium">Contracts</Link>
            <Link className="text-sm hover:underline hover:text-blue-600 font-medium">Spend Catedories</Link>
          </div>
        </div>

        {/* banner */}
        <div className="bg-[url(https://ecm.capitalone.com/ESM/assets/images/product-category-images/PCP-all-categories-optimized.jpg)] bg-cover bg-center py-14 px-40">
          {/* Content Box */}
          <div className="bg-white p-10 w-fit rounded space-y-4">
            <h1 className="text-[40px] font-thin">Business Discounts by <br /> Category</h1>
            <p className="text-base pb-8">Get discounts on the goods and services you need most to run your <br /> business.</p>
            <Link to='/signup' className="text-xl bg-blue-600 rounded text-white font-semibold px-5 py-3">Start Saving</Link>
          </div>
        </div>

        {/* Featured Content */}
        <div className="flex flex-col items-center p-8">
          <h1 className="uppercase font-semibold">Featured Content</h1>
          <div className="grid grid-cols-3 gap-6 w-10/12 m-auto p-8">

            {/* Cards  */}

            {articles.map((data) => {
              return (
                <div className="w-fit space-y-4 rounded-md shadow-md" key={data._id}>
                  <img src={data.categoryImage} alt="" className="w-[352px] h-[176px] object-cover" />
                  <p className="text-sm px-3 pb-4 uppercase font-bold">{data.category}</p>
                  <p className="text-2xl px-3 pb-4 font-light w-10/12">{data.title}</p>
                  <p className="text-xs px-3 pb-4 font-bold"> {data.visibleDate}  | {data.readTime}</p>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default Resources