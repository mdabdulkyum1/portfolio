import React from 'react'
import PropTypes from 'prop-types'

const Services = ({me}) => {
  console.log(me)
  return (
    <div className='bg-red-700 p-10'>
      <h1>Services</h1>

      <h1>name: {me.name}</h1>
      <h1>age: {me.age}</h1>

    </div>
  )
}

// Services.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// }

export default Services