import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <>
      Mai ho Example 01 {props.name}
      <Ex2 user={props.name} />
    </>
  )
}

export default Ex
