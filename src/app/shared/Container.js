import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1400px] w-full sm:px-4 px-3 mx-auto ${className || ""}`}>{children}</div>
  )
}

export default Container