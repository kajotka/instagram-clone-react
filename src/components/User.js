import React from 'react'

export default function User() {
  return (
    <div className="nav-top">
      <div className="user">
        <img src="img/avatar9.jpg" alt="" className="avatar" />
        <div>
          <h1 className="user-name">moja_nazwa</h1>
          <h1 className="nick">Lula 👽</h1>
        </div>
      </div>
      <div>
        <a href="#" className="link-blue">
          Przełącz
        </a>
      </div>
    </div>
  )
}
