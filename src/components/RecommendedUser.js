import React from 'react'

export default function RecommendedUser(props) {
  return (
    <div className="nav-top">
    <div className="user">
      <img src={props.img} alt="" className="avatar" />
      <div>
        <h1 className="user-name">{props.username}</h1>
        <h1 className="nick">{props.subtitle}</h1>
      </div>
    </div>
    <div>
      <a href="#" className="link-blue">
        Obserwuj
      </a>
    </div>
  </div>
  )
}
