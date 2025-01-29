import React from 'react'
import img2 from '../asset/img/logo.jpg'
function Header() {
  return (
    <div className='header'>
        <img src={img2} alt=''/>
        <h2>Expense Tracker</h2>
    </div>
  )
}

export default Header