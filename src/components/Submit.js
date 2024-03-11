import React from 'react'

function Submit(props) {
  return (
    <div>
      <h3> Name: {props.cn}</h3>
      <p> Email: {props.ce} </p>
      <p>phoneNumber: {props.cp} </p>
      <p>Message: {props.cm} </p>

    </div>
  )
}

export default Submit
