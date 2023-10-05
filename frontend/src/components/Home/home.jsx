/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Home = () => {

  console.log("page loaded")

  const [catagories, setCatagories] = useState([]);
  const [deals, setDeals] = useState([]);

  // useEffect(() => {

    const getDeals = () => {

      console.log("get deals called")

      return(
        fetch('https://capitalone-api.vercel.app/deals/')
        .then(response => response.json())
        .then(data => console.log(data.data))
        .catch(error => console.error(error))
      )
      
    }

    getDeals()

  //   return () => getDeals();
  // }, [])

  const topDeals = deals.slice(0, 8);

  useEffect(() => {

    const getCatagories = () => {
      return (
        fetch('https://capitalone-api.vercel.app/catagories/')
          .then(response => response.json())
          .then(data => setCatagories(data.data))
          .catch(error => console.error(error))
      )

}
return () => getCatagories();
  }, [])

const topCatagories = catagories.slice(0, 4);

return (
  <>
    <section>
      {/* section 1 */}
      <div className="flex flex-col items-center py-20 space-y-4">
        <h1 className="text-5xl">Get deals on small business essentials</h1>
        <p className="text-xl">Joining is <b>easy</b> and <b>free</b></p>
        <p className="text-xl">No Capital One account required.</p>
        <Link to='/signup' className="text-xl bg-[#25810E] rounded-md font-semibold text-white px-4 py-3">Start Saving</Link>
      </div>

      {/* section 2 */}
      <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10">

        <div className="md:grid grid-cols-4 gap-8">

          {/* Cards */}

          {topDeals.map((data) => {
            return (
              <div key={data._Id} className="bg-white rounded-md shadow-md flex flex-col items-center text-center py-6 space-y-4">
                <img src={data.supplierImage} alt="" className="w-48" />
                <p className="text-sm uppercase font-bold text-[#1E6A0B] border-t border-b w-full py-2 ">{data.discountMessage}</p>
                <p className="text-sm font-medium">{data.title}</p>
              </div>
            )
          })}

        </div>

        <Link to='/deals' className="text-base text-blue-500 font-semibold">View All Deals &gt;</Link>

      </div>

      {/* section 3 */}
      <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
        <h1 className="text-[32px]">How Capital One Business Deals Works</h1>
        <div className="flex space-x-4">

          <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-1/3">
            <img src="https://businessdeals.capitalone.com/img/grv-primary-rewards.svg" alt="" />
            <p className="text-xl font-bold">Sign Up for FREE</p>
            <p className="text-base ">No Capital One account required. Sign up for free to start saving on the things your small business needs the most.</p>
            <Link className="text-base bg-blue-600 font-bold text-white py-1 px-4 rounded-md">Join for Free</Link>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-1/3">
            <img src="https://businessdeals.capitalone.com/img/grv-primary-branch.svg" alt="" />
            <p className="text-xl font-bold">Business Savings Made Easy</p>
            <p className="text-base ">Capital One Business Deals makes it easy for you to save on business purchases. Learn more about how we work, and more importantly, how we help you.</p>
            <Link className="text-base text-blue-600 font-semibold">Learn More &gt;</Link>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-1/3">
            <img src="https://businessdeals.capitalone.com/img/grv-primary-interest-rate.svg" alt="" />
            <p className="text-xl font-bold">100+ Deals At Your Fingertips</p>
            <p className="text-base ">Get discounts on shipping, office furniture, travel and so much more. We have over 100 deals from leading brands, and are adding more every day.</p>
            <Link className="text-base text-blue-600 font-semibold">Find Savings &gt;</Link>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-white">
        <div className="w-3/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
          <h1 className="text-4xl font-thin">Join Capital One Business Deals and Save Effortlessly</h1>
          <div className="w-2/5 items-center flex flex-col">
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
      <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
        <div className=" flex  space-x-4 items-center">
          <p className="text-xl font-semibold">Categories</p>
          <Link to='/catagories' className="text-base text-blue-500 font-semibold">View All Categories &gt;</Link>
        </div>

        <div className="flex space-x-8">
          {/* card */}

          {topCatagories.map((data) => {
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

      {/* Section 6 */}
      <div className="bg-white">
        <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">

          <h1 className="text-[32px] font-normal">What small business owners are saying about Capital One Business Deals</h1>

          <div className="flex w-4/5 m-auto space-x-4">
            <img src="https://businessdeals.capitalone.com/img/quotation-mark.svg" alt="" />
            <p className="text-center ">For as long as it's existed, I've used Capital One Business Deals (formerly known as Spring) to alert me to discounts I wouldn't have known existed. I'm confident I have saved significant dollars with little effort.<br />   Thanks Capital One!</p>
            <img src="https://businessdeals.capitalone.com/img/quotation-mark.svg" alt="" className="rotate-180" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-xl rounded-full px-5 py-4 bg-[#ccf2fa] font-bold text-[#013dfb]">JS</div>
            <h1 className="text-xl font-bold">Jon Snyder, Owner, il laboratorio del gelato</h1>
          </div>

          <div className="flex items-center space-x-4">
            <AiOutlineArrowLeft className="text-5xl" />
            <div className="flex items-center space-x-2">
              <input type="radio" />
              <input type="radio" />
            </div>
            <AiOutlineArrowRight className="text-5xl" />
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="bg-[#013D58]">
        <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
          <h1 className="text-[32px] text-white font-light">The smartest corporate deals on the brands your business needs</h1>
          <div className="grid grid-cols-3 gap-6 gap-x-10">
            <img src="https://ecm.capitalone.com/ESM/assets/images/fedex-brand-logo.png" alt="" className="w-52" />
            <img src="https://ecm.capitalone.com/ESM/assets/images/homepage-1800.png" alt="" className="w-52" />
            <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-parknfly.png" alt="" className="w-52" />
            <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-generac.png" alt="" className="w-52" />
            <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-indeed.png" alt="" className="w-52" />
            <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-pilotflying.png" alt="" className="w-52" />
          </div>
          <Link to='/signup' className="text-xl bg-[#25810E] rounded-md font-semibold text-white px-4 py-3">Get Free Deals</Link>
        </div>
      </div>

    </section>
  </>
)
}

export default Home
