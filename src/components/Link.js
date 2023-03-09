import React from 'react'

export default function LinkWhite(props) {
  return (
    <a href={props.href} className={props.classes}>
      {props.label}
    </a>
  )
}
