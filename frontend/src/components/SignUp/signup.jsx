import { Link } from "react-router-dom"
import { BsXCircleFill } from 'react-icons/bs'

const Signup = () => {
  return (
    <div className="bg-white">
      <div className="md:w-6/12 m-auto p-12 text-center flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <h1 className="md:text-[48px] text-[32px] font-light">Join Business Deals <br />and Start Saving</h1>
          <span className="flex space-x-1 font-medium text-[14px]"><p>Already a Business Deals member?</p><Link to='/login' className="text-blue-600">Sign In</Link></span>
        </div>
        <button className="w-full border py-2 text-xl font-semibold rounded-md border-blue-600 mb-4 flex items-center justify-center text-blue-600"> <img className="p-2" src="https://businessdeals.capitalone.com/img/capital-one-icon.svg" alt="" /> Sign in with Capital One</button>
        <button className="w-full border border-blue-600 py-2 text-xl font-semibold rounded-md mb-4 flex items-center justify-center text-blue-600">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
        <span>OR</span>
        <div className="w-full flex flex-col items-start">
          <h1 className="pb-6 font-medium">Sign up with your email address</h1>
          <div className="w-full space-y-8">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="md:w-[48%] flex flex-col items-start space-y-2">
                <label htmlFor="first-name" className="font-medium">First Name</label>
                <input type="text" name="first-name" id="" className="p-3 rounded-md border border-black w-full" />
              </div>
              <div className="md:w-[48%] flex flex-col items-start space-y-2">
                <label htmlFor="first-name" className="font-medium">Last Name</label>
                <input type="text" name="first-name" id="" className="p-3 rounded-md border border-black w-full" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="Business-name" className="font-medium">Business Name</label>
              <input type="text" name="Business-name" id="" className="p-3 rounded-md border border-black w-full" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="Business-name" className="font-medium">Email Address (Used to sign in on future visits)</label>
              <input type="text" name="Business-name" id="" className="p-3 rounded-md border border-black w-full" />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="md:w-[48%] flex flex-col items-start space-y-2">
                <label htmlFor="first-name" className="font-medium">Password</label>
                <input type="text" name="first-name" id="" className="p-3 rounded-md border border-black w-full" />
              </div>
              <div className="md:w-[48%] flex flex-col items-start space-y-2">
                <label htmlFor="first-name" className="font-medium">Confirm Password</label>
                <input type="text" name="first-name" id="" className="p-3 rounded-md border border-black w-full" />
              </div>
            </div>
            <div className="w-full px-8 py-12 bg-[#F4F4F4] flex flex-col items-start space-y-4">
              <h1 className="font-bold">Password Requirements</h1>
              <div className="flex space-x-3 items-center">
                <BsXCircleFill />
                <p className="font-medium">8 - 32 characters</p>
              </div>
              <div className="flex space-x-3 items-center">
                <BsXCircleFill />
                <p className="font-medium">Minimum one letter and one number</p>
              </div>
              <div className="flex space-x-3 items-center">
                <BsXCircleFill />
                <p className="font-medium">No Spaces</p>
              </div>
              <div className="flex space-x-3 items-start">
                <BsXCircleFill />
                <p className="font-medium text-left">Use only alphanumeric characters and the following symbols: - _ . / \@ $ * & ! #</p>
              </div>
              <div className="flex space-x-3 items-center">
                <BsXCircleFill />
                <p className="font-medium">Password confirmation matches</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 pb-16">
              <input type="checkbox" className="text-xl p-6" />
              <p className="text-left text-sm">By creating an account, you agree to Business Deals Terms & Conditions of Use and Privacy Statement. Please note when you provide your email address, we may use it to send important information about your account(s), as well as other useful products and services.</p>
            </div>
            x`x`
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup