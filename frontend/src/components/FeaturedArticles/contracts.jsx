import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useRef } from "react";


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

  const expandSections =() =>{
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('flex')
    }
    else if (ref.current.classList.contains('flex')) {
      ref.current.classList.remove('flex')
      ref.current.classList.add('hidden')
    }
  }

  const ref = useRef()  

  return (
    <div>
      {/* navbar */}
      <div className="hidden  w-full py-4 px-40 bg-white border-b md:flex justify-between">
        <Link to='/resources' className="font-semibold">Resources</Link>
        <div className="flex space-x-8">
          <Link to='procurementoverview' className="text-sm hover:underline hover:text-blue-600 font-medium">Procurement Overview</Link>
          <Link to='negosiation' className="text-sm hover:underline hover:text-blue-600 font-medium">Negosiation</Link>
          <Link to='suppliermanagement' className="text-sm hover:underline hover:text-blue-600 font-medium">Supplier Management</Link>
          <Link to='contracts' className="text-sm hover:underline hover:text-blue-600 font-medium">Contracts</Link>
          <Link to='spendcategories' className="text-sm hover:underline hover:text-blue-600 font-medium">Spend Catedories</Link>
        </div>
      </div>

      {/* Mobile Nav  */}

      <div className="w-full p-6 bg-white border-b flex  justify-between md:hidden">
        <Link to='/resources' className="font-semibold">Resources</Link>
        <h1 onClick={expandSections} className="text-blue-600">Sections</h1>
      </div>
      <div ref={ref} className="space-x-8 min-h-screen hidden flex-col item p-4 bg-white ">
        <Link to='procurementoverview' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Procurement Overview</Link>
        <Link to='negosiation' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Negosiation</Link>
        <Link to='suppliermanagement' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Supplier Management</Link>
        <Link to='contracts' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Contracts</Link>
        <Link to='' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Spend Catedories</Link>
      </div>


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