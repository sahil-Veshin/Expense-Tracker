import React from 'react'
import img1 from '../asset/img/Dashboard.jpg'
function Homepage() {
  return (
    <div className='container'>
      <div className=' leftcontainer'>
        <p> Welcome to Expense Tracker</p>
        <p> Manage  all your expense here</p>
        <img src={img1} alt='' />
      </div>
      <div className=' rightcontainer'>
        <div className='formcard'>
          <h2 style={{alignSelf:'center'}}>Register</h2>
          <div>
            <label>
              Name
            </label>
            <input type='text' placeholder='Enter your name' required />
          </div>
          <div>
            <label>
              Email
            </label>
            <input type="email" placeholder='Enter your email' required />
          </div>
          <div>
            <label>
              Password
            </label>
            <input type="password" placeholder='Enter your password' required />
          </div>
          <div>
            <label>
              Confirm password
            </label>
            <input type="password" placeholder='confirm  your password' required />
          </div>
          <div>
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
