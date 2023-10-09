import {HiOutlineMail} from 'react-icons/hi'

const Login = () => {
  return (
    <div>
      <div className="w-3/12 mx-auto text-center space-y-4 p-10">
        <h1 className="text-[32px] font-light">Sign In</h1>
        <p>Sign in with your Capital One account</p>
        <div className="space-y-6">
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="Business-name" className="font-medium">Capital One Username</label>
            <input type="text" name="Business-name" id="" className="p-3 rounded-md border border-black w-full" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label htmlFor="Business-name" className="font-medium">Capital One Password</label>
            <input type="text" name="Business-name" id="" className="p-3 rounded-md border border-black w-full" />
          </div>
          <button className='bg-[#25810E] px-16 py-3 rounded-md w-full text-white'>Sign Up</button>
          <p className="text-sm text-blue-600 font-medium">Forgot username or password?</p>
          <p>OR</p>
          <button className="w-full border py-2 text-lg font-semibold rounded-md border-blue-600 mb-4 flex items-center justify-center text-blue-600"> <HiOutlineMail className="text-2xl px-1"/> Sign in with Capital One </button>
          <button className="w-full border border-blue-600 py-2 text-lg font-semibold rounded-md mb-4 flex items-center justify-center text-blue-600">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
        </div>
        <p className="text-sm font-medium">
          By signing in, I agree to the Business Deals Terms & Conditions and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Login