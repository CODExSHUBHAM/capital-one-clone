/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Home = () => {


  const [catagories, setCatagories] = useState([]);
  const [deals, setDeals] = useState([]);
  const topDeals = deals.slice(0, 8);
  const topCatagories = catagories.slice(0, 4);
  const mobileCatagories = catagories.slice(0, 2)

  console.log(mobileCatagories)

  // Get Deals 

  useEffect(() => {
    fetch('https://capital-one-clone-api.vercel.app/deals/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setDeals(data.data))
      .catch(error => console.error(error))
  }, [])

  // Get Categories

  useEffect(() => {

    fetch('https://capital-one-clone-api.vercel.app/catagories/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setCatagories(data.data))
      .catch(error => console.error(error))

  }, [])

  return (
    <>

      <section className="w-screen overflow-x-hidden">

        {/* section 1 */}

        <div className="flex flex-col items-center py-6 md:py-20 w-11/12 m-auto md:w-auto text-center">
          <h1 className="text-[32px] font-optimistl md:font-optimistxl md:text-5xl pb-4">Get deals on small business essentials</h1>
          <p className="text-base md:text-xl font-optimistr">Joining is <b>easy</b> and <b>free</b></p>
          <p className="text-base md:text-xl font-optimistr pb-4">No Capital One account required.</p>
          <Link to='/signup' className="text-xl bg-[#25810E] rounded-md font-optimistr text-white px-4 py-3 w-full md:w-auto">Start Saving</Link>
        </div>


        {/* section 2 */}
        <div className="flex flex-col space-y-6">
          <div className=" md:w-4/5 md:m-auto flex flex-col md:justify-center md:items-center md:space-y-10 overflow-x-scroll md:overflow-x-auto p-6">

            <div className="md:grid md:grid-cols-4 gap-8 flex w-max md:w-fit">

              {/* Cards */}

              {topDeals.map((data) => {
                return (
                  <Link to={`/deals/${data.promotionId}`} key={data._Id} className="w-72 bg-white rounded-md shadow-md flex flex-col items-center text-center py-6 px-4 space-y-4">
                    <img src={data.supplierImage} alt="" className="w-48" />
                    <p className="text-sm uppercase font-optimistb text-[#1E6A0B] border-t border-b w-full py-2 ">{data.discountMessage}</p>
                    <p className="text-sm font-optimistsb">{data.title}</p>
                  </Link>
                )
              })}

            </div>

          </div>
          <Link to='/deals' className="text-base text-[#0276b1] font-optimistsb self-center">View All Deals &gt;</Link>
        </div>


        {/* section 3 */}
        <div className="flex flex-col space-y-6 py-16">
          <h1 className="text-[32px] self-center text-center font-optimistl">How Capital One Business Deals Works</h1>
          <div className="md:w-4/5 w-full m-auto flex flex-col justify-center md:items-center overflow-x-scroll md:overflow-auto">
            <div className="flex space-x-4 w-max md:w-auto p-6">

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-rewards.svg" alt="" />
                <p className="text-xl font-optimistsb">Sign Up for FREE</p>
                <p className="text-base font-optimistr ">No Capital One account required. Sign up for free to start saving on the things your small business needs the most.</p>
                <Link className="text-base font-optimistr bg-[#0276b1] font-bold text-white py-1 px-4 rounded-sm">Join for Free</Link>
              </div>

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-branch.svg" alt="" />
                <p className="text-xl font-optimistsb">Business Savings Made Easy</p>
                <p className="text-base font-optimistr ">Capital One Business Deals makes it easy for you to save on business purchases. Learn more about how we work, and more importantly, how we help you.</p>
                <Link className="text-base text-[#0276b1] font-optimistr">Learn More &gt;</Link>
              </div>

              <div className="flex flex-col items-start justify-between space-y-4 bg-white rounded-md p-6 border w-[300px] md:w-1/3">
                <img src="https://businessdeals.capitalone.com/img/grv-primary-interest-rate.svg" alt="" />
                <p className="text-xl font-optimistsb">100+ Deals At Your Fingertips</p>
                <p className="text-base font-optimistr">Get discounts on shipping, office furniture, travel and so much more. We have over 100 deals from leading brands, and are adding more every day.</p>
                <Link className="text-base text-[#0276b1] font-optimistr">Find Savings &gt;</Link>
              </div>
            </div>
          </div>
        </div>


        {/* Section 4 */}
        <div className="bg-white">
          <div className="md:w-3/5 w-11/12 m-auto flex flex-col justify-center items-center space-y-10 py-16">
            <h1 className="text-[32px] font-optimistl text-center">Join Capital One Business Deals and Save Effortlessly</h1>
            <div className="md:w-2/5 w-11/12 items-center flex flex-col">
              <div>
                <p className="text-sm mb-2 font-optimistr">Email Address</p>
                <input type="text" className="w-full p-3 border border-black rounded-md mb-2" />
                <p className="text-xs mb-4 font-optimistr">When you provide your email address, we may use it to send communications about our site.</p>
                <button className="w-full border-2 py-2 text-xl font-optimistr text-white bg-[#0276b1] rounded-md mb-4">Join with Email</button>
                <p className="text-base font-optimistr mb-6">Are you a returning member? Sign In</p>
              </div>

              <p className="font-bold text-sm mb-6">OR</p>
              <button className="w-full border font-optimistr py-2 md:text-xl  rounded-md border-[#0276b1] mb-4 flex items-center justify-center text-[#0276b1]"> <img className="p-2" src="https://businessdeals.capitalone.com/img/capital-one-icon.svg" alt="" /> Sign in with Capital One</button>
              <button className="w-full border font-optimistr border-[#0276b1] py-2 md:text-xl  rounded-md mb-4 flex items-center justify-center text-[#0276b1]">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="md:w-4/5 m-auto flex flex-col justify-center items-center md:items-start  space-y-10 py-16">
          <div className=" flex  space-x-4 items-center">
            <p className="font-optimistsb text-xl">Categories</p>
            <Link to='/catagories' className="text-base text-[#0276b1] font-optimistr">View All Categories &gt;</Link>
          </div>

          <div className="hidden md:flex md:space-x-8">
            {/* card */}
            {topCatagories.map((data) => {
              return (
                <Link to={`/catagories/${data._id}`} key={data._id} className="md:w-fit w-full text-center space-y-4 bg-white rounded-md shadow-md">
                  <img src={data.image} alt="" className="md:w-[256px] md:h-[150px] object-cover" />
                  <p className="text-sm uppercase font-optimistsb">{data.category}</p>
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
                  <p className="text-sm uppercase font-optimistsb">{data.category}</p>
                  <p className="pb-4">{data.subcategory}</p>
                </div>
              )
            })}
          </div>

        </div>

        {/* Section 6 */}
        <div className="bg-white">
          <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">

            <h1 className="text-[32px] text-center font-optimistl">What small business owners are saying about Capital One Business Deals</h1>

            <div className="flex md:w-4/5 m-auto space-x-4 items-start md:items-center">
              <img src="https://businessdeals.capitalone.com/img/quotation-mark.svg" className="w-10 md:w-auto" alt="" />
              <p className="text-center font-optimistr ">For as long as it's existed, I've used Capital One Business Deals (formerly known as Spring) to alert me to discounts I wouldn't have known existed. I'm confident I have saved significant dollars with little effort.<br />   Thanks Capital One!</p>
              <img src="https://businessdeals.capitalone.com/img/quotation-mark.svg" alt="" className="rotate-180 w-10 md:w-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-4 w-4/5 md:w-auto text-center">
              <div className="text-xl rounded-full px-5 py-4 bg-[#ccf2fa] font-bold text-[#013dfb]">JS</div>
              <h1 className="text-xl font-optimistsb">Jon Snyder, Owner, il laboratorio del gelato</h1>
            </div>

            <div className="flex items-center space-x-4">
              <AiOutlineArrowLeft className="text-4xl" />
              <div className="flex items-center space-x-2">
                <input type="radio" />
                <input type="radio" />
              </div>
              <AiOutlineArrowRight className="text-4xl" />
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="bg-[#013D58]">
          <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-10 py-16">
            <h1 className="text-[32px] text-center text-white font-light">The smartest corporate deals on the brands your business needs</h1>
            <div className="overflow-x-scroll md:overflow-x-auto">
              <div className="flex md:grid grid-cols-3 gap-6 gap-x-10 w-full">
                <img src="https://ecm.capitalone.com/ESM/assets/images/fedex-brand-logo.png" alt="" className="w-52" />
                <img src="https://ecm.capitalone.com/ESM/assets/images/homepage-1800.png" alt="" className="w-52" />
                <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-parknfly.png" alt="" className="w-52" />
                <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-generac.png" alt="" className="w-52" />
                <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-indeed.png" alt="" className="w-52" />
                <img src="https://ecm.capitalone.com/ESM/assets/images/home-logo-pilotflying.png" alt="" className="w-52" />
              </div>
            </div>
            <Link to='/signup' className="w-full md:w-auto text-center text-xl bg-[#25810e] rounded-md font-optimistr text-white px-4 py-3">Get Free Deals</Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home
