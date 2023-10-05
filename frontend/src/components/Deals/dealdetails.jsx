import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Dealdetails = () => {

  const [deals, setDeals] = useState([])
  const id = useParams()
  const filteredDeals = deals.filter(item => item.promotionId == id.id)
  const topDeals = deals.slice(0, 4);

  console.log("hello")

  useEffect(() => {
    const getData = () => {

      return fetch('https://capitalone-api.vercel.app/deals',{mode : "no-cors"})
        .then(response => response.json())
        .then(data => setDeals(data.data))
        .catch(error => console.error(error));
    }

    return () => getData();
  }, [])

  return (
    <>
      <div>

        <nav className="w-11/12 m-auto py-6 px-16 flex flex-col space-y-3">
          <div className="flex space-x-1 text-xs">
            <Link to='/' className="font-bold text-blue-600 hover:underline">Home</Link>
            <p> &gt; </p>
            <p>Catagories</p>
          </div>
          <hr className="border-black" />
        </nav>

        {/* Section 1 */}
        {
          filteredDeals.map((deal) => {
            return (
              <div key={deal.id} className="w-10/12 m-auto">

                <div className="flex justify-between">

                  <div className="flex flex-col items-center w-4/12 text-center  bg-white border rounded-md py-20 px-6">
                    <img src={deal.supplierImage} alt="" className="w-[302.4px]" />
                    <p className="w-4/5">{deal.description.slice(0, 120)}</p>
                  </div>

                  <img src={deal.modalImage} className="w-3/5 rounded-md shadow-sm" />

                </div>

                <div className="mx-auto my-8 p-6 bg-white flex rounded-md">

                  <div className="w-4/5 space-y-2">
                    <p className="text-sm text-[#25810e] uppercase font-bold">{deal.discountMessage}</p>
                    <p className="text-xl font-semibold">{deal.title}</p>
                    <p className="blur-sm">{deal.description}</p>
                  </div>

                  <div className="w-1/5">
                    <Link to='/signup' className="bg-[#25810e] px-8 py-1 rounded-sm text-white font-bold" >
                      Join For Free to Unlock
                    </Link>
                  </div>

                </div>
              </div>
            )
          })
        }

        {/* section 2 */}
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

        {/* Section 3 */}
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
        <div className="w-4/5 m-auto flex flex-col  space-y-10 py-16">
          <div className=" flex  space-x-4 items-center">
            <p className="text-xl font-semibold">Related Deals</p>
            <Link to='/Deals' className="text-base text-blue-500 font-semibold">View All Deals &gt;</Link>
          </div>

          <div className="flex space-x-8">
            {/* card */}

            {topDeals.map((data) => {
              return (
                <div key={data._id} className="w-fit text-center space-y-4 bg-white rounded-md shadow-md">
                  <img src={data.supplierImage} alt="" className="w-[256px] h-[150px] object-cover" />
                  <p className="text-sm uppercase font-bold">{data.discountMessage}</p>
                  <p className="pb-4">{data.title}</p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </>
  )
}

export default Dealdetails