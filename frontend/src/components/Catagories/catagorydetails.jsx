import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CatagoryDetails = () => {


  const id = useParams()
  const [catagories, setCatagories] = useState([]);
  const [deals, setDeals] = useState([]);
  const filteredCatagory = catagories.filter(item => item._id == id.id)
  const topDeals = deals.slice(0, 8);
  const topCatagories = catagories.slice(0, 4);
  const mobileCatagories = catagories.slice(0, 2)


  useEffect(() => {

    fetch('https://capital-one-clone-api.vercel.app/catagories', { mode: "cors" })
      .then(response => response.json())
      .then(data => setCatagories(data.data))
      .catch(error => console.error(error));

  }, [])

  useEffect(() => {
    fetch('https://capital-one-clone-api.vercel.app/deals/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setDeals(data.data))
      .catch(error => console.error(error))
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
      <div className="w-10/12 mx-auto p-10">

        {/* contnent */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Discounts for Small Business Technology Needs</h1>
          <p className="font-medium">Upgrading your business’s technical capabilities is a great way to stay connected with customers and employees. With Capital One Business Deals, find <br /> discounts on a range of solutions from teleconferencing and web hosting to document sharing and storage.</p>
        </div>

        {/* Deals  */}
        <div className="flex flex-col space-y-6">
          <div className="md:m-auto flex flex-col md:justify-center md:items-center md:space-y-10 overflow-x-scroll md:overflow-x-auto py-5">

            <div className="md:grid md:grid-cols-4 gap-8 flex w-max md:w-fit">

              {/* Cards */}

              {topDeals.map((data) => {
                return (
                  <Link to={`/deals/${data.promotionId}`} key={data._Id} className="bg-white rounded-md shadow-md flex flex-col items-center text-center py-6 px-4 space-y-4">
                    <img src={data.supplierImage} alt="" className="w-48" />
                    <p className="text-sm uppercase font-bold text-[#1E6A0B] border-t border-b w-full py-2 ">{data.discountMessage}</p>
                    <p className="text-sm font-medium">{data.title}</p>
                  </Link>
                )
              })}

            </div>

          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-col space-y-6 py-16">
          <h1 className="text-[32px] self-center text-center">How Capital One Business Deals Works</h1>
          <div className="md:w-4/5 w-full m-auto flex flex-col justify-center md:items-center overflow-x-scroll md:overflow-auto">
            <div className="flex space-x-4 w-max md:w-auto p-6">

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-rewards.svg" alt="" />
                <p className="text-xl font-bold">Sign Up for FREE</p>
                <p className="text-base ">No Capital One account required. Sign up for free to start saving on the things your small business needs the most.</p>
                <Link className="text-base bg-blue-600 font-bold text-white py-1 px-4 rounded-md">Join for Free</Link>
              </div>

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-branch.svg" alt="" />
                <p className="text-xl font-bold">Business Savings Made Easy</p>
                <p className="text-base ">Capital One Business Deals makes it easy for you to save on business purchases. Learn more about how we work, and more importantly, how we help you.</p>
                <Link className="text-base text-blue-600 font-semibold">Learn More &gt;</Link>
              </div>

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-interest-rate.svg" alt="" />
                <p className="text-xl font-bold">100+ Deals At Your Fingertips</p>
                <p className="text-base ">Get discounts on shipping, office furniture, travel and so much more. We have over 100 deals from leading brands, and are adding more every day.</p>
                <Link className="text-base text-blue-600 font-semibold">Find Savings &gt;</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Section 4 */}
      <div className="bg-white">
        <div className="md:w-3/5 w-11/12 m-auto flex flex-col justify-center items-center space-y-10 py-16">
          <h1 className="text-4xl font-thin text-center">Join Capital One Business Deals and Save Effortlessly</h1>
          <div className="md:w-2/5 w-11/12 items-center flex flex-col">
            <div>
              <p className="text-sm mb-2">Email Address</p>
              <input type="text" className="w-full p-3 border border-black rounded-md mb-2" />
              <p className="text-xs mb-4">When you provide your email address, we may use it to send communications about our site.</p>
              <button className="w-full border-2 py-2 text-xl font-semibold text-white bg-blue-600 rounded-md mb-4">Join with Email</button>
              <p className="text base mb-6">Are you a returning member? Sign In</p>
            </div>

            <p className="font-bold text-sm mb-6">OR</p>
            <button className="w-full border py-2 text-xl font-semibold rounded-md border-blue-600 mb-4 flex items-center justify-center text-blue-600"> <img className="p-2" src="https://businessdeals.capitalone.com/img/capital-one-icon.svg" alt="" /> Sign in with Capital One</button>
            <button className="w-full border border-blue-600 py-2 text-xl font-semibold rounded-md mb-4 flex items-center justify-center text-blue-600">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="md:w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
        <div className=" flex  space-x-4 items-center">
          <p className="text-xl font-semibold">Categories</p>
          <Link to='/catagories' className="text-base text-blue-500 font-semibold">View All Categories &gt;</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {/* card */}
          {topCatagories.map((data) => {
            return (
              <Link to={`/catagories/${data._id}`} key={data._id} className="w-fit text-center space-y-4 bg-white rounded-md shadow-md">
                <img src={data.image} alt="" className="w-[256px] h-[150px] object-cover" />
                <p className="text-sm uppercase font-bold">{data.category}</p>
                <p className="pb-4">{data.subcategory}</p>
              </Link>
            )
          })}
        </div>

        <div className="space-y-8 md:hidden">
          {mobileCatagories.map((data) => {
            return (
              <div key={data._id} className="w-fit text-center space-y-4 bg-white rounded-md shadow-md">
                <img src={data.image} alt="" className="w-[256px] h-[150px] object-cover" />
                <p className="text-sm uppercase font-bold">{data.category}</p>
                <p className="pb-4">{data.subcategory}</p>
              </div>
            )
          })}
        </div>


      </div>
    </>
  )
}

export default CatagoryDetails