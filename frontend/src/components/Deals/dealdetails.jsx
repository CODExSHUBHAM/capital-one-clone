import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Dealdetails = () => {

  const [deals, setDeals] = useState([])
  const id = useParams()
  const filteredDeals = deals.filter(item => item.promotionId == id.id)
  const topDeals = deals.slice(0, 4);

  useEffect(() => {
    fetch('https://capital-one-clone-api.vercel.app/deals/', { mode: "cors" })
      .then(response => response.json())
      .then(data => setDeals(data.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <div>

        <nav className="md:w-[74%] w-[85%] m-auto py-4  flex flex-col space-y-3">
          <div className="flex space-x-1 text-xs">
            <Link to='/' className="font-optimistsb text-blue hover:underline">Home</Link>
            <img src="/Icons/rightarrow.svg" className="w-[14px]" alt="" />
            <a href="https://capital-one-vert.vercel.app/deals" className="font-optimistsb text-blue hover:underline">Deals</a>
            <img src="/Icons/rightarrow.svg" className="w-[14px]" alt="" />
            {
              filteredDeals.map((deal) => {
                return (
                  <p key={deal.id} className="font-optimistr">{deal.mediaAltText}</p>
                )
              })
            }

          </div>
          {
            filteredDeals.map((deal) => {
              return (
                <h1 key={deal.id} className="text-base md:text-2xl font-optimistsb md:font-optimistr">{deal.supplierTitle}</h1>
              )
            })
          }

          <hr className="border-[#d4d4d4]" />
        </nav>

        {/* Section 1 */}
        {
          filteredDeals.map((deal) => {
            return (
              <div key={deal.id} className="w-[75%] m-auto hidden md:block">

                <div className="flex justify-between">

                  <div className="flex flex-col items-center w-[30%] text-center  bg-white border rounded py-20 px-6">
                    <img src={deal.supplierImage} alt="" className="w-[302.4px]" />
                    <p className="w-4/5">{deal.description.slice(0, 120)}</p>
                  </div>

                  <img src={deal.modalImage} className="w-[68%] rounded shadow-sm" />

                </div>

                <div className="mx-auto my-8 p-6 bg-white flex rounded-md">

                  <div className="w-[75%] space-y-2">
                    <p className="text-sm text-[#25810e] uppercase font-bold">{deal.discountMessage}</p>
                    <p className="text-xl font-semibold">{deal.title}</p>
                    <p className="blur-sm">{deal.description}</p>
                  </div>

                  <div className="w-[25%]">
                    <Link to='/signup' className="bg-[#25810e] px-8 py-1 rounded-sm text-white font-bold" >
                      Join For Free to Unlock
                    </Link>
                  </div>

                </div>
              </div>
            )
          })
        }

        {
          filteredDeals.map((deal) => {
            return (
              <div key={deal.id} className=" m-auto md:hidden">

                <img src={deal.modalImage} className="rounded-md shadow-sm" />

                <div className="flex flex-col justify-between">
                  <div className="flex flex-col items-center w-11/12 m-auto -mt-10 text-center  bg-white border rounded-md py-6 px-4">
                    <img src={deal.supplierImage} alt="" className="" />
                    <p className="w-4/5">{deal.description.slice(0, 120)}</p>
                  </div>
                </div>

                <div className="mx-auto my-8 p-6 bg-white flex flex-col w-11/12 rounded-md">

                  <div className="space-y-2">
                    <p className="text-sm text-[#25810e] uppercase font-bold">{deal.discountMessage}</p>
                    <p className="text-xl font-semibold">{deal.title}</p>
                    <p className="blur-sm">{deal.description}</p>
                  </div>

                  <div className="w-full pt-10">
                    <Link to='/signup' className="bg-[#25810e] px-8 w-full py-3 rounded-md  text-white font-bold" >
                      Join For Free to Unlock
                    </Link>
                  </div>

                </div>
              </div>
            )
          })
        }

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
                <p className="text-base font-optimistr mb-6 text-center">Are you a returning member? <Link className="text-blue" to='login'>Sign In</Link></p>
              </div>

              <p className="font-bold text-sm mb-6">OR</p>
              <button className="w-full border font-optimistr py-2 md:text-xl  rounded-md border-[#0276b1] mb-4 flex items-center justify-center text-[#0276b1]"> <img className="p-2" src="https://businessdeals.capitalone.com/img/capital-one-icon.svg" alt="" /> Sign in with Capital One</button>
              <button className="w-full border font-optimistr border-[#0276b1] py-2 md:text-xl  rounded-md mb-4 flex items-center justify-center text-[#0276b1]">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="w-4/5 m-auto flex flex-col  space-y-10 py-16">
          <div className=" flex  space-x-4 items-center">
            <p className="text-xl font-semibold">Related Deals</p>
            <Link to='/Deals' className="text-base text-blue-500 font-semibold">View All Deals &gt;</Link>
          </div>
          <div className="overflow-x-scroll md:overflow-auto">
            <div className="flex space-x-8 w-max md:w-auto">
              {/* card */}

              {topDeals.map((data) => {
                return (
                  <div key={data._id} className="flex flex-col items-center justify-center w-fit text-center space-y-4 bg-white rounded-md shadow-md">
                    <img src={data.supplierImage} alt="" className="md:w-[256px] md:h-[150px] w-6/12 mx-auto object-cover" />
                    <p className="text-sm uppercase font-bold">{data.discountMessage}</p>
                    <p className="pb-4">{data.title}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dealdetails