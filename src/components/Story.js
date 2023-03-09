import React from 'react'

export default function Story(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  )
}
