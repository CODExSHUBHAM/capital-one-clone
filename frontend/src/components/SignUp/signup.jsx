import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="w-2/5 m-auto">
      <h1>Join Business Deals <br />and Start Saving</h1>
      <span><p>Already a Business Deals member</p><Link to='/login'>Sign In</Link></span>
      <button className="w-full border py-2 text-xl font-semibold rounded-md border-blue-600 mb-4 flex items-center justify-center text-blue-600"> <img className="p-2" src="https://businessdeals.capitalone.com/img/capital-one-icon.svg" alt="" /> Sign in with Capital One</button>
      <button className="w-full border border-blue-600 py-2 text-xl font-semibold rounded-md mb-4 flex items-center justify-center text-blue-600">  <img className="p-2" src="https://businessdeals.capitalone.com/img/facebook-icon.svg" alt="" />Sign in with Facebook</button>
      <hr />
      <h1>Sign up with your email address</h1>
    </div>
  )
}

export default Signup