import React from 'react'

const Header = ({text}) => (
  <header className="ui sizer vertical segment subtitle">
    <div className="ui huge header subtitle-text">
      {text}
    </div>
  </header>
)

export default Header
