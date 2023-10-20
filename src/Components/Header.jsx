import React from 'react'

const Header = ({ handleToogleDarkMode }) => {
  return (
    <div className='Header'>
      <h1>Notes</h1>
      <button className='ToogleBtn' onClick={() => handleToogleDarkMode((previousDarkMode) => !previousDarkMode) }>Toogle Mode</button>
    </div>
  )
}

export default Header
