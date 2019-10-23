import React from 'react'
import PropTypes from 'prop-types'
export default function AuthLayout ({ children }) {
  return (
    <div className="flex h-screen bg-gray-200">
      {children}
    </div>
  )
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
}
