import React from 'react'
import PropTypes from 'prop-types'
export default function DefaultLayout ({ children }) {
  return (
    <div className="flex">
      {children}
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
